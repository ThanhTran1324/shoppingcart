import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { firebaseConnect } from "../apis/firebaseShoppingCart";

// import axios from "axios";
class ItemForm extends Component {
  state = {
    selectedFile: null,
    imageLink: null,
    uploadPercent: 0,
    imageName: null
  };
  renderInput = ({ input, meta, label, type }) => {
    const confirmError = meta.error && meta.touched;
    const errorClassName = `field ${confirmError ? `error` : ``}`;

    return (
      <div className={errorClassName}>
        <label>
          {label}
          {`${confirmError ? "Requited" : ""}`}
        </label>
        <input {...input} type={type} />
      </div>
    );
  };

  renderImageInput = ({ input, meta, label, uploadPercent }) => {
    return (
      <div className="field">
        <label>{label}</label>
        <div>
          <input type="file" onChange={this.fileSelectedHandler}></input>
          <div
            onClick={this.fileUploadHandler}
            className="ui labeled button"
            tabIndex="0"
          >
            <div id="uploadButton" className="ui button  ">
              <i className="upload icon "></i> Upload
            </div>
            <p className="ui basic label">
              {parseFloat(uploadPercent).toFixed(2)}%
            </p>
          </div>
        </div>
      </div>
    );
  };

  convertImage = item => {
    console.log("converting");
    var resize_width = 600;
    var reader = new FileReader();

    //image turned to base64-encoded Data URI.
    reader.readAsDataURL(item);
    reader.name = item.name; //get the image's name
    reader.size = item.size; //get the image's size
    reader.onload = event => {
      var img = new Image(); //create a image
      img.src = event.target.result; //result is base64-encoded Data URI
      img.name = event.target.name; //set name (optional)
      img.size = event.target.size; //set size (optional)
      img.onload = async el => {
        var elem = document.createElement("canvas"); //create a canvas

        //scale the image to 600 (width) and keep aspect ratio
        var scaleFactor = resize_width / el.target.width;
        elem.width = resize_width;
        elem.height = el.target.height * scaleFactor;

        //draw in canvas
        var ctx = elem.getContext("2d");
        ctx.drawImage(el.target, 0, 0, elem.width, elem.height);

        //get the base64-encoded Data URI from the resize image
        var srcEncoded = ctx.canvas.toDataURL(el.target, "image/jpeg", 0);
        //convert uri to image
        var binary = atob(srcEncoded.split(",")[1]);
        var array = [];
        for (var i = 0; i < binary.length; i++) {
          array.push(binary.charCodeAt(i));
        }
        this.setState({
          selectedFile: new Blob([new Uint8Array(array)], {
            type: "image/jpeg"
          })
        });
      };
    };
  };

  fileSelectedHandler = event => {
    if (event.target.files.length >= 0) {
      this.setState({ imageName: event.target.files[0].name });
      this.convertImage(event.target.files[0]);
      document.getElementById("submitButton").disabled = true; //disable submit button , wait for click upload
      document.getElementById("uploadButton").classList.add("green");
    }
  };
  fileUploadHandler = event => {
    event.preventDefault();
    var filename = this.state.imageName; //get file name
    var storageRef = firebaseConnect.storage().ref(`/images/` + filename); //upload to image folder
    var uploadTask = storageRef.put(this.state.selectedFile);
    uploadTask.on(
      "state_changed",
      snapshot => {
        //run during upload proccess
        this.setState({
          uploadPercent: (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        });
      },
      error => {
        console.log(error);
      },
      () => {
        uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          // arrow function to use this.setState
          this.setState({ imageLink: downloadURL });
          document.getElementById("submitButton").disabled = false;
        });
      }
    );
  };

  onSubmit = formValue => {
    formValue.images = this.state.imageLink;
    formValue.price = parseInt(formValue.price);
    this.props.onSubmit(formValue);
  };
  render() {
    return (
      <div className="ui container">
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className="ui form error"
        >
          <Field name="name" component={this.renderInput} label="Name : " />
          <Field
            name="price"
            component={this.renderInput}
            label="Price: "
            type="number"
          />

          {/* Upload item pictures */}
          <Field
            name="images"
            component={this.renderImageInput}
            label="Images: "
            uploadPercent={this.state.uploadPercent}
          />

          <button id="submitButton" className="ui green approve right button">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

const validate = formValue => {
  const error = {};
  if (!formValue.name) error.name = "Requite Value!";
  if (!formValue.price) error.price = "Requite Value!";

  return error;
};

export default reduxForm({
  form: "ItemForm",
  validate
})(ItemForm);

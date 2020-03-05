import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { itemsFetch } from "../actions";
import { cartAdd } from "../actions/cartActions";
import SortAndFilter from "./SortAndFilter";

export class ItemList extends Component {
  componentDidMount() {
    this.props.itemsFetch();
  }
  renderAdmin = item => {
    if (item.userId === this.props.currentUserId)
      return (
        <div>
          <hr></hr>
          <div className="ui large two buttons">
            <Link
              to={`/shoppingcart/items/delete/${item.id}`}
              className="ui inverted red button "
              style={{ whiteSpace: "nowrap" }}
            >
              <i className="icon trash alternate" />
              Delete
            </Link>
            <div className="or"></div>
            <Link
              to={`/shoppingcart/items/edit/${item.id}`}
              className="ui inverted blue button "
            >
              <i className="edit icon"></i>Edit
            </Link>
          </div>
        </div>
      );
  };
  renderList = () => {
    return Object.values(this.props.items).map(item => {
      // console.log(item.images);
      return (
        <div className="card  " key={item.id}>
          <div
            className="blurring dimmable image "
            style={{ overflow: "hidden" }}
          >
            <img
              className="imageCartList  "
              style={{
                width: "100%",
                height: "290px",
                objectFit: "fill"
              }}
              src={
                !item.images
                  ? "https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28"
                  : item.images
              }
              alt="hinh"
            ></img>
          </div>

          <div className="content">
            <div className=" ui buttons right floated">
              <button
                className="ui button primary"
                onClick={() => this.props.cartAdd(item)}
              >
                <i className="shopping cart icon"></i>
                Add
              </button>
            </div>
            <div
              className="header"
              style={{ overflow: "hidden", textTransform: "capitalize" }}
            >
              {item.name}
            </div>
            <div className="meta">
              <span
                className="price"
                style={{ color: "#FF9200", fontSize: "18px" }}
              >
                ${item.price}
              </span>
            </div>

            <div className="extra content">{this.renderAdmin(item)}</div>
          </div>
        </div>

        // <div key={item.id} className="item">
        //   {item.name}/${item.price}
        //   <div className=" ui buttons right floated">
        //     {this.renderAdmin(item)}
        //     <button
        //       className="ui button primary"
        //       onClick={() => this.props.cartAdd(item)}
        //     >
        //       <i className="shopping cart icon"></i>
        //       Add to cart
        //     </button>
        //   </div>
        // </div>
      );
    });
  };
  render() {
    // console.log(this.props.sortAndFilterFormValue);
    if (
      Object.keys(this.props.items).length === 0 &&
      !this.props.sortAndFilterFormValue
    ) {
      return (
        <div className="ui fluid container ">
          <div className="ui segment">
            <div className="ui active dimmer" style={{ height: "100vh" }}>
              <div className="ui massive text loader">Loading...</div>
            </div>
            <p></p>
            <p></p>
            <p></p>
          </div>
        </div>
      );
    } else
      return (
        <div className="ui fluid container  " style={{ marginTop: "5px" }}>
          <SortAndFilter></SortAndFilter>
          <div className="ui special cards centered">{this.renderList()}</div>
        </div>
      );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    currentUserId: state.auth.userId,
    sortAndFilterFormValue: state.form.SortAndFilterForm
  };
};
export default connect(mapStateToProps, { itemsFetch, cartAdd })(ItemList);

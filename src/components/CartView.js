import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";//import { Link } from "react-router-dom";
import { cartRemove, cartFetch } from "../actions/cartActions";
import MyPaypalButton from "./MyPaypalButton";
import LoginRequiteBanner from "./LoginRequiteBanner";
import "../css/CartView.css";
import { shortString } from "./Utility";
export class CartView extends Component {
  state = {
    total: 0,
  };

  componentDidMount() {
    this.props.cartFetch();
  }
  renderList = (items) => {
    return items.map((item) => {
      return (
        <div key={item.id} className="three column row itemContainerCart">
          <div class="four wide column ">
            <img
              className="ui tiny image centered"
              src={
                !item.images
                  ? "https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28"
                  : item.images
              }
              alt={item.name}
            ></img>
          </div>
          <div class="eight wide column ">
            <span className="myItemNameCart ">
              {shortString(item.name, 55)}
            </span>
          </div>
          <div class="four wide column">
            <div className="myCartViewPrice ">/${item.price}</div>
            <button
              onClick={() => this.props.cartRemove(item.id)}
              className="ui  mini  button myRemoveButton  "
            >
              Remove
            </button>
          </div>
          <hr></hr>
        </div>
      );
    });
  };
  renderTotal = () => {
    var totalprice = 0;
    if (this.props.cart !== null) {
      Object.values(this.props.cart).map((item) => {
        return (totalprice += parseInt(item.price));
      });
    }

    return <span className="myTotalAmount"> ${totalprice}</span>;
  };
  countTotal = () => {
    let totalprice = 0;
    Object.values(this.props.cart).map((item) => {
      return (totalprice += parseInt(item.price));
    });
    return totalprice;
  };
  renderWarningPanelForlAnonymoust = () => {
    if (this.props.isAnonymous)
      return (
        <LoginRequiteBanner
          banner="Please Login"
          content={`You Are Shopping As Guest User!
          Please Login To Have Better Service.`}
        ></LoginRequiteBanner>
      );
  };
  renderTotalAndPaypal = () => {
    return (
      <div className="ui container totalAmountAndPaypalContainer">
        <h3>
          Subtotal ({Object.keys(this.props.cart).length} item):
          {this.renderTotal()}
        </h3>
        <div className="myPaypalContainer">
          <MyPaypalButton
            description="Paypal Buttons"
            price={this.countTotal()}
          ></MyPaypalButton>
        </div>
      </div>
    );
  };
  render() {
    if (this.props.isSignedIn) {
      if (this.props.cart !== null) {
        return (
          <div
            className="ui container segment"
            style={{ justifyContent: "center" }}
          >
            {this.renderWarningPanelForlAnonymoust()}
            <div className="ui grid">
              {this.renderList(Object.values(this.props.cart))}
            </div>

            {this.countTotal() !== 0 ? this.renderTotalAndPaypal() : ""}
          </div>
        );
      } else return <div>Your Cart is empty !</div>;
    } else {
      return (
        <LoginRequiteBanner
          banner="Please Login"
          content="To Start Shopping"
        ></LoginRequiteBanner>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous,
  };
};
export default connect(mapStateToProps, { cartRemove, cartFetch })(CartView);

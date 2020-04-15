import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";//import { Link } from "react-router-dom";
import { cartRemove, cartFetch } from "../actions/cartActions";
import MyPaypalButton from "./MyPaypalButton";
import LoginRequiteBanner from "./LoginRequiteBanner";
import "../css/CartView.css";
import { shortString } from "./Utility";
export class CartView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.cartFetch();
  }
  renderList = (items) => {
    return items.map((item) => {
      return (
        <div key={item.id} className="three column row itemContainerCart">
          <div className="four wide column ">
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
          <div className="eight wide column ">
            <span className="myItemNameCart ">
              {shortString(item.name, 55)}
            </span>
          </div>
          <div className="four wide column">
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

  countTotal = (cartItems) => {
    if (cartItems) {
      let totalAmount = 0;
      Object.values(cartItems).map((item) => {
        return (totalAmount += parseFloat(item.price));
      });
      return totalAmount.toFixed(2);
    } else return 0;
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
  renderTotalAndPaypal = (cartItems) => {
    const totalAmount = this.countTotal(cartItems);
    if (totalAmount > 0)
      return (
        <div className="ui container totalAmountAndPaypalContainer">
          <h3>
            Subtotal ({Object.keys(cartItems).length} item):
            <span className="myTotalAmount"> ${totalAmount}</span>
          </h3>
          <div className="myPaypalContainer">
            <MyPaypalButton
              description="Paypal Buttons"
              price={totalAmount}
            ></MyPaypalButton>
          </div>
        </div>
      );
  };
  render() {
    if (this.props.isSignedIn && this.props.cart) {
      if (Object.values(this.props.cart).length > 0) {
        return (
          <div
            className="ui container segment"
            style={{ justifyContent: "center" }}
          >
            {this.renderWarningPanelForlAnonymoust()}
            <div className="ui grid">
              {this.renderList(Object.values(this.props.cart))}
            </div>

            {this.renderTotalAndPaypal(this.props.cart)}
          </div>
        );
      } else
        return (
          <div>
            <h1 style={{ textAlign: "center" }}>Your Cart is empty !</h1>
          </div>
        );
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

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
//import { Link } from "react-router-dom";
import { cartRemove, cartFetch } from "../actions/cartActions";
import PaypalButton from "./PaypalButton";
import LoginRequiteBanner from "./LoginRequiteBanner";
export class CartView extends Component {
  state = {
    total: 0
  };

  componentDidMount() {
    this.props.cartFetch();
  }
  renderList = () => {
    return Object.values(this.props.cart).map(item => {
      return (
        <div key={item.id} className="item">
          {/* {item.name}/${item.price} */}
          <div style={{ color: "#FF9200", float: "right" }}>/${item.price}</div>
          <img
            className="ui avatar image"
            src={item.images}
            alt={item.name}
          ></img>

          <div className="content">
            <div
              className="header"
              style={{ color: "#0167C0", textTransform: "capitalize" }}
            >
              {item.name}
            </div>
            <button
              onClick={() => this.props.cartRemove(item.id)}
              className="ui  mini  button "
            >
              Remove
            </button>
          </div>
        </div>
      );
    });
  };
  renderTotal = () => {
    var totalprice = 0;
    if (this.props.cart !== null) {
      Object.values(this.props.cart).map(item => {
        return (totalprice += parseInt(item.price));
      });
    }

    return (
      <span style={{ color: "#FF9200", fontSize: "30px" }}> ${totalprice}</span>
    );
  };
  countTotal = () => {
    let totalprice = 0;
    Object.values(this.props.cart).map(item => {
      return (totalprice += parseInt(item.price));
    });
    return totalprice;
  };
  LoginRequiteContent = () => {
    return (
      <div>
        Please{" "}
        {
          <Link className="ui teal button" to="/shoppingcart/login">
            Login
          </Link>
        }{" "}
        To Start Shopping!
      </div>
    );
  };
  render() {
    if (this.props.isSignedIn) {
      if (this.props.cart !== null) {
        return (
          <div className="ui container" style={{ justifyContent: "center" }}>
            <div className="ui celled massive list">{this.renderList()}</div>

            <div className="ui container " style={{ width: "500px" }}>
              {" "}
              <h3>
                Subtotal ({Object.keys(this.props.cart).length} item):
                {this.renderTotal()}
              </h3>
              {this.countTotal() !== 0 ? (
                <PaypalButton
                  description="item cui bap"
                  price={this.countTotal()}
                ></PaypalButton>
              ) : (
                ""
              )}
            </div>
          </div>
        );
      } else return <div>Your Cart is empty !</div>;
    } else {
      return (
        <LoginRequiteBanner
          banner="Please Login"
          content={this.LoginRequiteContent()}
        ></LoginRequiteBanner>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    isSignedIn: state.auth.isSignedIn
  };
};
export default connect(mapStateToProps, { cartRemove, cartFetch })(CartView);

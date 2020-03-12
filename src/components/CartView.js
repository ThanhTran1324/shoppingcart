import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";//import { Link } from "react-router-dom";
import { cartRemove, cartFetch } from "../actions/cartActions";
import MyPaypalButton from "./MyPaypalButton";
import LoginRequiteBanner from "./LoginRequiteBanner";
export class CartView extends Component {
  state = {
    total: 0
  };

  componentDidMount() {
    this.props.cartFetch();
  }
  renderList = items => {
    return items.map(item => {
      return (
        <div key={item.id} className="item">
          {/* {item.name}/${item.price} */}
          <div style={{ color: "#FF9200", float: "right" }}>/${item.price}</div>
          <img
            className="ui avatar image"
            src={
              !item.images
                ? "https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28"
                : item.images
            }
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
  render() {
    if (this.props.isSignedIn) {
      if (this.props.cart !== null) {
        return (
          <div className="ui container" style={{ justifyContent: "center" }}>
            {this.renderWarningPanelForlAnonymoust()}
            <div className="ui celled massive list">
              {this.renderList(Object.values(this.props.cart))}
            </div>

            <div className="ui container " style={{ width: "500px" }}>
              {" "}
              <h3>
                Subtotal ({Object.keys(this.props.cart).length} item):
                {this.renderTotal()}
              </h3>
              {this.countTotal() !== 0 ? (
                <MyPaypalButton
                  description="item cui bap"
                  price={this.countTotal()}
                ></MyPaypalButton>
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
          content="To Start Shopping"
        ></LoginRequiteBanner>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous
  };
};
export default connect(mapStateToProps, { cartRemove, cartFetch })(CartView);

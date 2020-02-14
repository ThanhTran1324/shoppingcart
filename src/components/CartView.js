import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { cartRemove, cartFetch } from "../actions/cartActions";
export class CartView extends Component {
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
  total = () => {
    var totalprice = 0;
    if (this.props.cart !== null)
      Object.values(this.props.cart).map(item => {
        return (totalprice += parseInt(item.price));
      });
    return (
      <span style={{ color: "#FF9200", fontSize: "30px" }}> ${totalprice}</span>
    );
  };

  render() {
    if (this.props.cart !== null) {
      return (
        <div className="ui container">
          <div className="ui celled massive list">{this.renderList()}</div>

          <h3 style={{ display: "inline" }}>
            Subtotal ({Object.keys(this.props.cart).length} item):
          </h3>
          {this.total()}

          <button className="fluid ui button positive ">Pay</button>
        </div>
      );
    } else return <div>Your Cart is empty !</div>;
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps, { cartRemove, cartFetch })(CartView);

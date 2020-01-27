import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import GoogleAuth from "./GoogleAuth";

import { cartsFetch } from "../actions/cartActions";
class Header extends React.Component {
  componentDidMount() {
    this.props.cartsFetch();
  }
  render() {
    return (
      <div className="ui teal four item inverted menu">
        <Link to="/shoppingcart/" className="active item">
          Home
        </Link>
        <Link to="/shoppingcart/items/new" className="item">
          Create Item
        </Link>
        <Link id="cart" to="/shoppingcart/cart/view" className="item">
          Cart <i className=" icon shopping cart" />
          <span className="badge">{` ( ${
            Object.values(this.props.cart).length
          })`}</span>
        </Link>
        <GoogleAuth className="item" />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps, { cartsFetch })(Header);

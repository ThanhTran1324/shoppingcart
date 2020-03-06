import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseConnect } from "../apis/firebaseShoppingCart";
import { cartFetch } from "../actions/cartActions";
import { signIn, signOut } from "../actions/";
class Header extends React.Component {
  componentDidMount = async () => {
    await firebaseConnect.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.signIn(user.uid, user.isAnonymous);
        this.props.cartFetch();
      }
    });
  };
  renderCartBadge = () => {
    let number = "0";

    if (this.props.cart) number = Object.values(this.props.cart).length;
    return (
      <div>
        Cart <i className=" icon shopping cart" />
        <span className="badge">{` ( ${number})`}</span>
      </div>
    );
  };
  renderAuthButton = () => {
    if (this.props.isSignedIn && !this.props.isAnonymous)
      return (
        <Link to="/shoppingcart" onClick={this.props.signOut} className="item ">
          Logout
        </Link>
      );
    else
      return (
        <Link to="/shoppingcart/login/" className="item">
          Login
        </Link>
      );
  };
  render() {
    return (
      <div className="ui container">
        <div className="ui teal four item inverted menu">
          <Link to="/shoppingcart/" className=" item">
            Home
          </Link>
          <Link to="/shoppingcart/items/new" className="item">
            Create Item
          </Link>
          <Link id="cart" to="/shoppingcart/cart/view" className="item">
            {this.renderCartBadge()}
          </Link>
          {this.renderAuthButton()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart,
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous
  };
};
export default connect(mapStateToProps, { cartFetch, signIn, signOut })(Header);
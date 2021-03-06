import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { firebaseConnect } from "../apis/firebaseShoppingCart";
import { cartFetch } from "../actions/cartActions";
import { signIn, signOut } from "../actions/";
import thanh_logo from "../images/thanh_logo.jpg";
import "../css/Header.css";
class Header extends React.Component {
  componentDidMount = async () => {
    firebaseConnect.analytics();
    await firebaseConnect.auth().onAuthStateChanged((user) => {
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
        <Link to="/" onClick={this.props.signOut} className="item ">
          Logout
        </Link>
      );
    else
      return (
        //test logout
        // <div>
        //   <Link to="/login/" className="item">
        //     Login
        //   </Link>
        //   <Link
        //     to="/"
        //     onClick={this.props.signOut}
        //     className="item "
        //   >
        //     Logout
        //   </Link>
        // </div>

        <Link to="/login/" className="item">
          Login
        </Link>
      );
  };
  render() {
    return (
      <div className="myNavBar">
        <div className="ui teal four item inverted menu myNavBarLink">
          <Link to="/" className=" item">
            <img
              src={thanh_logo}
              alt="thanh_logo"
              className="  thanhLogo"
            ></img>
            Home
          </Link>
          <Link to="/items/new" className="item">
            Create Item
          </Link>
          <Link id="cart" to="/cart/view" className="item">
            {this.renderCartBadge()}
          </Link>
          {this.renderAuthButton()}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    cart: state.cart,
    isSignedIn: state.auth.isSignedIn,
    isAnonymous: state.auth.isAnonymous,
  };
};
export default connect(mapStateToProps, { cartFetch, signIn, signOut })(Header);

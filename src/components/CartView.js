import React, { Component } from "react";
import { connect } from "react-redux";
//import { Link } from "react-router-dom";
import { cartRemove, cartFetch } from "../actions/cartActions";
export class CartView extends Component {
  componentDidMount() {
    this.props.cartFetch();
  }
  renderList = () => {
    if (this.props.cart !== null)
      return Object.values(this.props.cart).map(item => {
        return (
          <div key={item.id} className="item">
            {item.name}/${item.price}
            <div className=" ui buttons right floated">
              <button
                onClick={() => this.props.cartRemove(item.id)}
                className="ui negative button right floated"
              >
                Remove
              </button>
            </div>
          </div>
        );
      });
    else return <div>Your Cart is empty !</div>;
  };
  total = () => {
    var total = 0;
    if (this.props.cart !== null)
      Object.values(this.props.cart).map(item => {
        return (total += parseInt(item.price));
      });
    return total;
  };

  render() {
    return (
      <div>
        <div className="ui celled list">{this.renderList()}</div>
        <div className="ui right floated">
          <h3> Total: ${this.total()}</h3>
          <button className="fluid ui button positive ">Pay</button>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};
export default connect(mapStateToProps, { cartRemove, cartFetch })(CartView);

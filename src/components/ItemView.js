import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
import history from "../history";
import { itemFetch, signInAsAnonymous } from "../actions";
import { cartAdd } from "../actions/cartActions";
import Loading from "./Loading";
import "../css/ItemView.css";
class ItemView extends Component {
  componentDidMount() {
    this.props.itemFetch(this.props.match.params.id);
  }
  addToCartHandler = (item) => {
    this.props.signInAsAnonymous();
    this.props.cartAdd(item);
    history.goBack();
  };

  actions = () => {
    return (
      <React.Fragment>
        <button onClick={() => history.goBack()} className="ui button">
          Cancel
        </button>
        <button
          className="ui button primary"
          onClick={() => this.addToCartHandler(this.props.item)}
        >
          Add To Cart
        </button>
      </React.Fragment>
    );
  };
  renderItemInfo = (item) => {
    return (
      <div className="ui grid">
        <div class="six wide column">
          <img
            className="ui large image"
            src={item.images}
            alt={item.name + "photo"}
          ></img>
        </div>
        <div class="ten wide column">
          <p className="myItemViewPrice">$ {item.price}</p> & FREE Shipping
          <h2 style={{ margin: 0 }}>Product Information</h2>
          <p className="myItemInfo">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
            expedita dolores, debitis animi sequi ullam blanditiis. Et tenetur,
            temporibus beatae dolores illo accusantium excepturi recusandae
            rerum laborum necessitatibus deserunt.
          </p>
        </div>
      </div>
    );
  };
  render() {
    //console.log(this.props.item);

    if (this.props.item) {
      const item = this.props.item;

      return (
        <div>
          <Modal
            actions={this.actions()}
            header={item.name}
            content={this.renderItemInfo(item)}
          ></Modal>
        </div>
      );
    } else return <Loading />;
  }
}
const mapStateToProps = (state, ownProps) => {
  return {
    item: state.items[ownProps.match.params.id],
  };
};
export default connect(mapStateToProps, {
  itemFetch,
  cartAdd,
  signInAsAnonymous,
})(ItemView);

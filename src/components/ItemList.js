import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { itemsFetch, signInAsAnonymous } from "../actions";
import { cartAdd } from "../actions/cartActions";
import SortAndFilter from "./SortAndFilter";
import Loading from "./Loading";

import { shortString } from "./Utility";
import history from "../history";
import "../css/ItemList.css";

export class ItemList extends Component {
  componentDidMount() {
    this.props.itemsFetch();
  }
  renderAdmin = (item) => {
    if (item.userId === this.props.currentUserId)
      return (
        <div>
          <hr></hr>
          <div className="ui large two buttons">
            <Link
              to={`/items/delete/${item.id}`}
              className="ui inverted red button "
              // style={{ whiteSpace: "nowrap" }}
            >
              <i className="icon trash alternate" />
              Delete
            </Link>
            <div className="or"></div>
            <Link
              to={`/items/edit/${item.id}`}
              className="ui inverted blue button "
            >
              <i className="edit icon"></i>Edit
            </Link>
          </div>
        </div>
      );
  };
  addToCartHandler = (item) => {
    if (this.props.isSignedIn) this.props.cartAdd(item);
    else history.push("/loginprompt");
  };
  // shortString = (str, num) => {
  //   if (str.length <= num) return str;
  //   return str.slice(0, num) + "...";
  // };

  renderList = (items) => {
    if (items.length === 0) {
      return <h1>Sorry, We don't have the Item you need !!!</h1>;
    } else
      return items.map((item) => {
        return (
          <div className="card  " key={item.id}>
            <div
              // className="blurring dimmable image "
              className="myImageContainer"
              style={{ backgroundColor: "white" }}
            >
              <Link to={`/item/view/${item.id}`}>
                <img
                  className="imageCartList  myImageCardList"
                  src={
                    !item.images
                      ? "https://firebasestorage.googleapis.com/v0/b/shoppingcart-f5bc6.appspot.com/o/donut.jpg?alt=media&token=dae66b8a-f9dd-451b-b13d-3ff658e6dd28"
                      : item.images
                  }
                  alt="hinh"
                ></img>
              </Link>
              <button
                className="ui button primary myAddButton"
                onClick={() => this.addToCartHandler(item)}
              >
                <i className="shopping cart icon"></i>
                Add
              </button>
            </div>

            <div className="content">
              {/* <div className=" ui buttons right floated"> */}

              {/* </div> */}
              <div className="header myItemName">
                <Link to={`/item/view/${item.id}`}>
                  {shortString(item.name, 50)}
                </Link>
              </div>
              <div className="meta">
                <p className="myPrice">${item.price}</p>
              </div>

              <div className="extra content">{this.renderAdmin(item)}</div>
            </div>
          </div>

          // <div key={item.id} className="item">
          //   {item.name}/${item.price}
          //   <div className=" ui buttons right floated">
          //     {this.renderAdmin(item)}
          //     <button
          //       className="ui button primary"
          //       onClick={() => this.props.cartAdd(item)}
          //     >
          //       <i className="shopping cart icon"></i>
          //       Add to cart
          //     </button>
          //   </div>
          // </div>
        );
      });
  };
  myFilter = (items) => {
    if (this.props.isSearching) {
      return items.filter((item) => {
        return item.name
          .toLowerCase()
          .includes(this.props.searchKey.toLowerCase());
      });
    } else return items;
  };
  render() {
    if (Object.keys(this.props.items).length === 0) {
      return <Loading />;
    } else {
      return (
        <div className="ui fluid container ">
          <SortAndFilter
            initialValues={{ search: this.props.searchKey }}
          ></SortAndFilter>
          <div className="ui special cards centered">
            {this.renderList(this.myFilter(Object.values(this.props.items)))}
          </div>
          <button onClick={() => history.push("/shoppingcart/items/new")}>
            Testing
          </button>
        </div>
      );
    }
  }
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
    searchform: state.form.SortAndFilterForm,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    isSearching: state.filter.isSearching,
    searchKey: state.filter.searchKey,
  };
};
export default connect(mapStateToProps, {
  itemsFetch,
  cartAdd,
  signInAsAnonymous,
})(ItemList);

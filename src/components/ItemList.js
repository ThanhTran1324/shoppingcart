import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { itemsFetch } from "../actions";
import { cartAdd } from "../actions/cartActions";

export class ItemList extends Component {
  componentDidMount() {
    this.props.itemsFetch();
  }
  renderAdmin = item => {
    if (item.userId === this.props.currentUserId)
      return (
        <div>
          <hr></hr>
          <div className="ui large two buttons">
            <Link
              to={`/items/delete/${item.id}`}
              className="ui  negative button "
              style={{ whiteSpace: "nowrap" }}
            >
              <i className="icon trash alternate" />
              Delete
            </Link>
            <div className="or"></div>
            <Link
              to={`/items/edit/${item.id}`}
              className="ui  positive button "
            >
              <i className="edit icon"></i>Edit
            </Link>
          </div>
        </div>
      );
  };
  renderList = () => {
    return Object.values(this.props.items).map(item => {
      return (
        <div className="card  " key={item.id}>
          <div className="blurring dimmable image">
            <img
              src="https://www.mercurynews.com/wp-content/uploads/2019/06/SJM-L-EDPRAIL16-0616-03.jpg?w=403"
              alt="hinh"
            ></img>
          </div>
          <div className="content">
            <div className=" ui buttons right floated">
              <button
                className="ui button primary"
                onClick={() => this.props.cartAdd(item)}
              >
                <i className="shopping cart icon"></i>
                Add to cart
              </button>
            </div>
            <div className="header" style={{ overflow: "hidden" }}>
              {item.name}
            </div>
            <div className="meta">
              <span className="price">${item.price}</span>
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
  render() {
    return (
      <div className="ui container  ">
        <div className="ui special centered cards ">{this.renderList()}</div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    items: state.items,
    currentUserId: state.auth.userId
  };
};
export default connect(mapStateToProps, { itemsFetch, cartAdd })(ItemList);

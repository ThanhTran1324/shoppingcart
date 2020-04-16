import React, { Component } from "react";
import Modal from "./Modal";
import { connect } from "react-redux";

import RenderButtonLoginAsGuestUser from "./RenderButtonLoginAsGuestUser";
import { signInAsAnonymous } from "../actions";
class LoginPrompt extends Component {
  componentDidMount() {}
  actions = () => {
    return (
      <div className="ui equal width grid">
        <div className="equal width row">
          <div className="column">
            <button className="ui teal google button my-google-login">
              <i
                className="user icon"
                style={{ fontSize: "25px", color: "green" }}
              ></i>
              Login
            </button>
          </div>
          <div className="column">
            <RenderButtonLoginAsGuestUser />
          </div>
        </div>
      </div>
    );
  };
  content = () => {
    return <h4 style={{ textAlign: "center" }}>Do you want to Login ?</h4>;
  };
  render() {
    //console.log(this.props.item);
    return (
      <div>
        <Modal
          actions={this.actions()}
          header="Login Requite: "
          content={this.content()}
        ></Modal>
      </div>
    );
  }
}
// const mapStateToProps = (state, ownProps) => {
//   return {
//     item: state.items[ownProps.match.params.id],
//   };
// };
export default connect(null, { signInAsAnonymous })(LoginPrompt);

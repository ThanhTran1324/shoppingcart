import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const NotificateModal = ({ header, content, time, linkTo }) => {
  //
  setTimeout(function() {
    // history.push("/shoppingcart");
  }, time);
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/shoppingcart")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={e => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{header}</div>
        <div className="content"> {content}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default NotificateModal;

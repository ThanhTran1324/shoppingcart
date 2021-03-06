import React from "react";
import ReactDOM from "react-dom";
import history from "../history";
const sNotificateModal = ({ header, content, time, linkTo }) => {
  //
  setTimeout(function () {
    // history.push("/");
  }, time);
  return ReactDOM.createPortal(
    <div
      onClick={() => history.push("/")}
      className="ui dimmer modals visible active"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="ui standard modal visible active"
      >
        <div className="header">{header}</div>
        <div className="content"> {content}</div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default sNotificateModal;

/* eslint-disable react/react-in-jsx-scope */
import { PayPalButton } from "react-paypal-button";
import React from "react";
export default function MyPaypalButton(props) {
  const paypalOptions = {
    clientId: process.env.REACT_APP_API_PAYPALKEY,
    intent: "capture"
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "rect"
  };
  // console.log(props.price);
  return (
    <PayPalButton
      paypalOptions={paypalOptions}
      buttonStyles={buttonStyles}
      amount={props.price}
    />
  );
}

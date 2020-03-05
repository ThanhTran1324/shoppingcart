/* eslint-disable react/react-in-jsx-scope */
import { PayPalButton } from "react-paypal-button";
import React from "react";
export default function MyPaypalButton(props) {
  const paypalOptions = {
    clientId:
      "AYI5Th6t7An5aFVx5rkUvvbo68XhT-ol3iXLVdyBbkiTzYUo9RaNZJoCcpVUKv3fGNQnGXzpF3J_Bd4a",
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

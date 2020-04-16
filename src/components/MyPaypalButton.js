import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";

export default class MyPaypalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PayPalButton
        amount={this.props.price}
        currency="USD"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        onSuccess={(details, data) => {
          alert("Transaction completed by " + details.payer.name.given_name);

          // OPTIONAL: Call your server to save the transaction
          return fetch("/paypal-transaction-complete", {
            method: "post",
            body: JSON.stringify({
              orderId: data.orderID,
            }),
          });
        }}
        options={{
          clientId: process.env.REACT_APP_API_PAYPALKEY,
        }}
      />
    );
  }
}

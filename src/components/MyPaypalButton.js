import React, { Component } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { cartClean } from "../actions/cartActions";
import { transactionSuccess } from "../actions";
import { connect } from "react-redux";
// import { NotificationManager } from "react-notifications";
class MyPaypalButton extends Component {
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
        catchError={(err) => {
          console.log(err);
          // NotificationManager.error({}, "Warning", 2000);
        }}
        onSuccess={(details, data) => {
          // console.log("details: ", details);
          // console.log("data: ", data);
          this.props.transactionSuccess(details, data);
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

export default connect(null, { cartClean, transactionSuccess })(MyPaypalButton);

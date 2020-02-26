import React, { Component } from "react";

export class PaypalButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paidFor: false,
      loaded: false
    };
  }

  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = `https://www.paypal.com/sdk/js?client-id=AYI5Th6t7An5aFVx5rkUvvbo68XhT-ol3iXLVdyBbkiTzYUo9RaNZJoCcpVUKv3fGNQnGXzpF3J_Bd4a`;
    script.addEventListener("load", () => this.setState({ loaded: true }));
    document.body.appendChild(script);

    if (this.state.loaded) {
      setTimeout(() => {
        window.paypal
          .Button({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchage_units: [
                  {
                    description: "thanh shopping item",
                    currency_code: "USD",
                    value: 1
                  }
                ]
              });
            },
            onApprove: async (data, actions) => {
              const order = await actions.order.capture();
              console.log(order);
            }
          })
          .render(`#paypal-button-container`);
      });
    }
  };
  render() {
    return <div id="paypal-button-container">asd</div>;
  }
}

export default PaypalButton;

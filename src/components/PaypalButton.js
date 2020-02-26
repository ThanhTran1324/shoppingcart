import React, { useState, useRef, useEffect } from "react";

function PaypalButton(drops) {
  console.log(drops);
  const [paidFor, setPaidFor] = useState(false);
  const [error, setError] = useState(null);
  const paypalRef = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: drops.description,
                amount: {
                  currency_code: "USD",
                  value: drops.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          setPaidFor(true);
          console.log(order);
        },
        onError: err => {
          setError(err);
          console.error(err);
        }
      })
      .render(paypalRef.current);
  }, [drops.description, drops.price]);

  if (paidFor) {
    return (
      <div>
        <h1>Congrats, you just bought {drops.name}!</h1>
      </div>
    );
  }

  return (
    <div>
      {error && <div>Uh oh, an error occurred! {error.message}</div>}

      <div ref={paypalRef} />
    </div>
  );
}

export default PaypalButton;

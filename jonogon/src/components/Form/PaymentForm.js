import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useState } from "react";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000000",
      color: "#000000",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000000" },
      "::placeholder": { color: "#000000" },
    },
    invalid: {
      iconColor: "red",
      color: "red",
    },
  },
};

export default function PaymentForm() {
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("http://localhost:5000/payment", {
          amount: 1000,
          description: "Somthing Product",
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
        } else {
          console.log("Unsuccessful");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
    }
  };

  return (
    <>
      if(success)
      {
        <div>
          <h2>Purchased</h2>
        </div>
      }
      else
      {
        <form onSubmit={handleSubmit}>
          <div>
            <CardElement options={CARD_OPTIONS} />
          </div>
          <button>Pay</button>
        </form>
      }
    </>
  );
}
import React, { useEffect, useState } from "react";
import "./Pay.scss";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from "../../utils/newRequest";
import { useParams } from "react-router-dom";
import CheckoutForm from "../../components/checkoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51OQTzsSDw6ejsKX1fPMBmUxgZxYK6yX1V2sZlkIAAoOzzQLCj12HWmuYSQOXRpyJpTB77xHC3EMkCd84fUxRPE8N002wkbxTPQ"
);

const Pay = () => {
  // const [clientSecret, setClientSecret] = useState("");

  const { id } = useParams();

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       console.log("pay4");
  //       const res = await newRequest.post(
  //         `/orders/create-payment-intent/${id}`
  //       );

  //       setClientSecret(res.data.clientSecret);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   makeRequest();
  // }, []);

  // const appearance = {
  //   theme: "stripe",
  // };
  // const options = {
  //   clientSecret,
  //   appearance,
  // };

  // return (
  //   <div className="pay">
  //     {clientSecret && (
  //       <Elements options={options} stripe={stripePromise}>
  //         <CheckoutForm />
  //       </Elements>
  //     )}
  //   </div>
  // );

  const [message, setMessage] = useState("");

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
};

export default Pay;

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

const ProductDisplay = () => {
  const { id } = useParams();

  const fun = async () => {
    const res = await fetch(
      "http://localhost:8800/create-payment-intent/" + id,
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <section>
      <div className="product">
        <img
          src="https://i.imgur.com/EHyR2nP.png"
          alt="The cover of Stubborn Attachments"
        />
        <div className="description">
          <h3>Stubborn Attachments</h3>
          <h5>$20.00</h5>
        </div>
      </div>
      <form onSubmit={fun}>
        <button type="submit">Checkout</button>
      </form>
    </section>
  );
};

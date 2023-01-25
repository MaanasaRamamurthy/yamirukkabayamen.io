import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Header from "./Header";
import CheckoutForm from "./CheckoutForm";
import { Axios } from "axios";
 import "../css/checkout.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51MR8gpSGsWUwmou9t8NoOLy2nKhk8UIn1gNpJZ0UN9Ds5RzFrBY05OHyBpinCcap45ZzvDWYKGImYR7yn0wPS8Bq00HWWV30GY");

export default function ReturnCheckout(props) {
  const [clientSecret, setClientSecret] = useState("");

 
  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
  //   let amt = 0
  // for(let i = 0; i<props.Cat.length; i++){
  //   if(props.Cat[i].toggle === true){
  //         amt = props.Cat[i].cost
          
  //   }
    
  // }
    fetch("http://localhost:80/api/create.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: {amount: 50000} }),
      })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  
  // Axios({
  //   method: 'POST',
  //   headers: { "Content-Type": "application/json" },
  //   url: 'http://localhost:80/api/index.php',
  //   data: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  // }) .then((res) => res.json())
  // .then((data) => setClientSecret(data.clientSecret));

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="category">
          <h3>Your Cart</h3>
          <div className="item">
          <h2>{localStorage.getItem("Category")}</h2>
          <h4>{localStorage.getItem("Description")}</h4>
          <h3>{localStorage.getItem("Cost")}</h3>
          </div>

        </div>
      <div>
      {clientSecret && (
        <Elements 
        options={options} 
        stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
      </div>
 
    </div>
   
  );
}
import React from "react";

const Confirmation = ({ confirmation }) => {
  return (
    <div>
      <h1>Thank you for your order.</h1>
      <p>Your order id: "{confirmation}"</p>
    </div>
  );
};

export default Confirmation;

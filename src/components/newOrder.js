import React from "react";
import { newOrder } from "../utils";

const NewOrder = ({ jwtToken }) => {
  const newOrderHandler = async (e) => {
    try {
      await newOrder(jwtToken);
      window.alert(`Order placed`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="new-order-container">
      <h1>Place a new order below</h1>

      <button type="submit" onClick={newOrderHandler}>
        Place Order
      </button>
    </div>
  );
};

export default NewOrder;

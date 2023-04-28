import React from "react";
import { useState } from "react";
import {newOrder} from"../utils";


const NewOrder = ({jwtToken}) => {
  const [order, setOrder] = useState();
  const newOrderHandler = async (e) => {
    console.log("!!!newOrderjs token!!!");
    console.log(jwtToken);
    console.log("!!!^^^^^^^^^newOrderjs token^^^^^^^^^^!!!");
    await newOrder(jwtToken);
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
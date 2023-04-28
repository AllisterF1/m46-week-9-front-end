import React from "react";
import { useState } from "react";
import { getAllOrders } from "../utils";

const GetOrders = ({ jwtToken }) => {
  const [orders, setOrders] = useState([]);

  const handleGetOrders = async () => {
    try {
      const data = await getAllOrders(jwtToken);
      setOrders(data.orders);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="get-container">
      <h1>Get Request</h1>
      <button onClick={handleGetOrders}>See your orders</button>
      <ul>
        {orders.map((orders) => (
          <li key={orders.id}>{orders.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default GetOrders;

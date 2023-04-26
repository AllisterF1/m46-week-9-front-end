import React from "react";
import { useState } from "react";
import { getAllUsers } from "../utils";

const Get = ({ jwtToken }) => {
  const [users, setUsers] = useState([]);

  const handleGetAllUsers = async () => {
    try {
      const data = await getAllUsers(jwtToken);
      setUsers(data.users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="get-container">
      <h1>Get Request</h1>
      <button onClick={handleGetAllUsers}>Get All Users</button>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Get;
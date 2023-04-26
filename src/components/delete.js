import React from "react";
import { useState } from "react";
import { deleteUser } from"../utils";

const Delete = ({ jwtToken }) => {
  const [username, setUsername] = useState();


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username);

    await deleteUser(username)
  };

  return (
    <div className="delete-container">
      <h1>Delete Request</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>

        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="username"
          name="username"
          required
        />

       

        <button type="submit">Delete User</button>
      </form>
    </div>
  );
};

export default Delete;
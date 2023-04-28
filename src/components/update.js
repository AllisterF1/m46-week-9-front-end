import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const Update = ({ jwtToken }) => {
  const [username, setUsername] = useState();
  const [updateKey, setUpdateKey] = useState();
  const [updateValue, setUpdateValue] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username);

    await updateUser(username, updateKey, updateValue, jwtToken);
  };

  return (
    <div className="update-container">
      <h1>Update Request</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>

        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="update-username"
          name="username"
          required
        />

        <label htmlFor="update-key">Update Key:</label>
        <select id="update-key" onChange={(e) => setUpdateKey(e.target.value)}>
          <option value="email">Email</option>
          <option value="username">Username</option>
          <option value="password">Password</option>
        </select>

        <label htmlFor="update-value">Update Value:</label>
        <input
          onChange={(e) => setUpdateValue(e.target.value)}
          type="text"
          id="update-value"
          name="username"
        />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;

import React from "react";
import { useState } from "react";
import { updateUser } from "../utils";

const Update = ({ jwtToken }) => {
  const [username, setUsername] = useState();
  const [newUsername, setNewUsername] = useState();
  const [newEmail, setNewEmail] = useState();
  const [newPassword, setNewPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username);

    await updateUser(username);
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

<label htmlFor="new-username">New Username:</label>
        <input
          onChange={(e) => setNewUsername(e.target.value)}
          type="text"
          id="new-username"
          name="username"
        />

<label htmlFor="new-email">New email:</label>
        <input
          onChange={(e) => setNewEmail(e.target.value)}
          type="text"
          id="-new-email"
          name="username"
        />

<label htmlFor="new-password">New password:</label>
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          id="new-password"
          name="password"
        />

        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default Update;

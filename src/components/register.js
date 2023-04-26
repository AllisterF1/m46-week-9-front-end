import React from "react";
import { useState } from "react";
import {registerUser} from"../utils";

const Register = () => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(username);
    console.log(email);
    console.log(password);
    await registerUser(username, email, password)
  };

  return (
    <div className="register-container">
      <h1>Register Below</h1>

      <form onSubmit={submitHandler}>
        <label htmlFor="username">Username:</label>

        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          id="reg-username"
          name="username"
          required
        />

        <label htmlFor="email">email:</label>

        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          id="reg-email"
          name="email"
          required
        />

        <label htmlFor="password">Password:</label>

        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="reg-password"
          name="password"
          required
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
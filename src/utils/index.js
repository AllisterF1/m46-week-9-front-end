import { writeCookie } from "../common";

export const loginUser = async (username, email, password, newUser) => {
  try {
    const response = await fetch("http://localhost:5001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    newUser(data.user.username);
    writeCookie("jwt_token", data.user.token, 7);
    writeCookie("userId", data.user.username, 7);
  } catch (error) {
    console.log(error);
  }
};

export const registerUser = async (username, email, password, newUser) => {
  try {
    const response = await fetch("http://localhost:5001/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });
    const data = await response.json();
    console.log(data);
    //   newUser(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const authCheck = async (jwtToken) => {
  try {
    const response = await fetch("http://localhost:5001/users/authcheck", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data.user.username;
  } catch (error) {
    console.log(error);
  }
};

export const getAllUsers = async (jwtToken) => {
  try {
    const response = await fetch("http://localhost:5001/users/getallusers", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteUser = async (username, jwtToken) => {
  try {
    const response = await fetch("http://localhost:5001/users/deleteuser", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        username: username,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateUser = async (
  username,
  updateKey,
  updateValue,
  jwtToken
) => {
  try {
    const response = await fetch("http://localhost:5001/users/updateuser", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
      body: JSON.stringify({
        username: username,
        updateKey: updateKey,
        updateValue: updateValue,
      }),
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const newOrder = async (jwtToken) => {
  console.log(jwtToken);

  try {
    const response = await fetch("http://localhost:5001/orders/new", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const data = await response.json();
    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getAllOrders = async (jwtToken) => {
  try {
    const response = await fetch("http://localhost:5001/orders/getorders", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwtToken}`,
      },
    });
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

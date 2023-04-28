import Login from "./components/login";
import Register from "./components/register";
import Get from "./components/get";
import Delete from "./components/delete";
import "./App.css";
import { useState, useEffect } from "react";

import { getCookie } from "./common";
import { authCheck } from "./utils";
import Update from "./components/update";

function App() {
  const [user, setUser] = useState();

  const [jwt, setJwt] = useState();

  useEffect(() => {
    let jwt = getCookie("jwt_token");
    console.log(jwt);

    if (jwt !== false) {
      loginWithToken(jwt);
    }
  }, []);

  const loginWithToken = async (jwt) => {
    const user = await authCheck(jwt);
    setUser(user);
    setJwt(jwt);
  };

  return (
    <div className="App">
      <Login newUser={setUser} />
      {user ? (
        <div className="logged-in">
          <h2>Hello Welcome {user} you have logged in</h2>
          <Get jwtToken={jwt} />
          <Update />
          <Delete />
        </div>
      ) : (
        <div className="welcome">
          <h2>Please log in or register below</h2>
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;

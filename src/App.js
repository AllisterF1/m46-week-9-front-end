import Login from "./components/login";
import Register from "./components/register";
import Get from "./components/get";
import Delete from "./components/delete";
import Update from "./components/update";
import NewOrder from "./components/newOrder";
import GetOrders from "./components/orders";
import "./App.css";
import { useState, useEffect } from "react";
import ReactModal from "react-modal";

import { getCookie } from "./common";
import { authCheck } from "./utils";

ReactModal.setAppElement("#root");

function App() {
  const [user, setUser] = useState();
  const [getModalIsOpen, setGetModalIsOpen] = useState(false);
  const [updateModalIsOpen, setUpdateModalIsOpen] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [ordersModalIsOpen, setOrdersModalIsOpen] = useState(false);
  const [jwt, setJwt] = useState();

  const handleOpenGetModal = () => {
    setGetModalIsOpen(true);
  };

  const handleCloseGetModal = () => {
    setGetModalIsOpen(false);
  };

  const handleOpenUpdateModal = () => {
    setUpdateModalIsOpen(true);
  };

  const handleCloseUpdateModal = () => {
    setUpdateModalIsOpen(false);
  };

  const handleOpenDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const handleOpenOrdersModal = () => {
    setOrdersModalIsOpen(true);
  };

  const handleCloseOrdersModal = () => {
    setOrdersModalIsOpen(false);
  };

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
      {user ? (
        <div className="logged-in">
          <h2>Hello Welcome {user} you have logged in</h2>
          <div>
            <button onClick={handleOpenGetModal}>Get all Users</button>
            <ReactModal
              isOpen={getModalIsOpen}
              onRequestClose={handleCloseGetModal}
            >
              <Get jwtToken={jwt} />
              <button onClick={handleCloseGetModal}>Close</button>
            </ReactModal>
          </div>

          <div>
            <button onClick={handleOpenUpdateModal}>Update user details</button>
            <ReactModal
              isOpen={updateModalIsOpen}
              onRequestClose={handleCloseUpdateModal}
            >
              <Update />
              <button onClick={handleCloseUpdateModal}>Close</button>
            </ReactModal>
          </div>
          <div>
            <button onClick={handleOpenDeleteModal}>Delete a user</button>
            <ReactModal
              isOpen={deleteModalIsOpen}
              onRequestClose={handleCloseDeleteModal}
            >
              <Delete />
              <button onClick={handleCloseDeleteModal}>Close</button>
            </ReactModal>
          </div>
          <div>
            <button onClick={handleOpenOrdersModal}>Orders</button>
            <ReactModal
              isOpen={ordersModalIsOpen}
              onRequestClose={handleCloseOrdersModal}
            >
              <GetOrders jwtToken={jwt} />
              <button onClick={handleCloseOrdersModal}>Close</button>
            </ReactModal>
          </div>

          <NewOrder jwtToken={jwt} />
        </div>
      ) : (
        <div className="welcome">
          <h2>Please log in or register below</h2>
          <Login newUser={setUser} />
          <Register />
        </div>
      )}
    </div>
  );
}

export default App;

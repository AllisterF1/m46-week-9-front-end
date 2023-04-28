// import React from "react";
// import { useState } from "react";
// import { newOrder } from "../utils";

// const GetOrders = ({ jwtToken }) => {
//   const [orders, setOrders] = useState([]);

//   const handleGetAllUsers = async () => {
//     try {
//         console.log("*******")
//         console.log(jwtToken)
//         console.log("*******")
//       const data = await getAllUsers(jwtToken);
//       setUsers(data.users);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="get-container">
//       <h1>Get Request</h1>
//       <button onClick={handleGetAllUsers}>Get All Users</button>
//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.username}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default {
//     GetOrders
// };
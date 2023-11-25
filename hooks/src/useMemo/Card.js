import React from "react";

function Card({ user }) {
  return <li>{user.name}</li>;
}

export default Card;

//   This component unnecessary gets rendered based on some 
// other component state change in Users.js"

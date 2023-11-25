import { useContext } from "react";
import UserContext from "../context/UserContext";
import Details from "./details";

const Users = () => {
  const data = useContext(UserContext);
  return (
    <div>
      <h5>Users : {data.username} </h5>
      <Details />
    </div>
  );
};

export default Users;

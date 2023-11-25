import Users from "./users";
import UserContext from "../context/UserContext";
import { useState } from "react";

const UsersDashboard = () => {
  const [user, setUser] = useState("Jai");

  const data = {
    username: user,
    updateName: setUser,
  };

  return (
    <UserContext.Provider value={data}>
      <h4>useContext Hook</h4>
      <Users />
    </UserContext.Provider>
  );
};

export default UsersDashboard;

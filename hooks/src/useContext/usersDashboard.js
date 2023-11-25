import Users from "/users";
import { useState, createContext } from "react";

const UserContext = createContext();
// export const UserContext = createContext(); we can import from App.js and provide globally.

const UsersDashboard = () => {
  const [user, setUser] = useState("Jai Shree Ram");

  return (
    <div>
      <h4>useContext Hook</h4>
      <UserContext.Provider value={user}>
        <Users />
      </UserContext.Provider>
    </div>
  );
};

export default UsersDashboard;

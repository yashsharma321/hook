import { useContext } from "react";
import UserContext from "../context/UserContext";

const Details = () => {
  const { updateName } = useContext(UserContext);

  return (
    <div>
      <h6>Details</h6>
      <button onClick={() => updateName("Jai Shree Ram")}>Update Name</button>
    </div>
  );
};

export default Details;

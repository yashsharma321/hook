import { useContext } from "react";

const Details = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h6>Details</h6>
      <p>`Hello ${user}!`</p>
    </div>
  );
};

export default Details;

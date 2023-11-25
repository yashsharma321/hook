import { useState, useMemo } from "react";
import Card from "./Card";

function Users() {
  const userlist = [
    { id: 1, name: "Ram" },
    { id: 2, name: "Shyam" },
    { id: 3, name: "Madhav" },
    { id: 4, name: "Mohan" },
    { id: 5, name: "Govind" },
  ];

  const [users, setUsers] = useState(userlist);
  const [counter, setCounter] = useState(0);

  const displaylist = useMemo(
    () =>
      users.map((user) => {
        console.log("Preparing cart...");
        return <Card key={user.id} user={user} />;
      }),
    [users]
  ); //list of dependencies

  // Now until unless our users will not have..
  // any change it will not re exaluate logic.
  // This is called memoization that we can..
  // achieve with the help of useMemo Hook in react

  const setUserDetail = (value) => {
    setUsers([
      ...users,
      {
        id: users.length + 1,
        name: value,
      },
    ]);
  };

  return (
    <div className="my-5">
      <h1>useMemo Hook</h1>
      <h3>{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <hr />
      Enter Name:
      <input
        type="text"
        onBlur={(e) => {
          setUserDetail(e.target.value);
        }}
      />
      {displaylist}
    </div>
  );
}
export default Users;

/* counter increase also prints console log message
 *  Whenever any state in the user component is updating,
 *  ideally counter has nothing to do with displaylist.
 *  Card component also gets re-rendered.
 *  So to avoid this one we can wrap function in useMemo Hook,
 *  So that our output value can be cached.
 */

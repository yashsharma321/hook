import React, { useState } from "react";
import Child from "./Child";

function Counter() {
  const [count, setCount] = useState(0);
  console.log("render");
  return (
    <div className="border-bottom">
      <h1>useCallback Hook</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increase Count
      </button>
      <Child />
    </div>
  );
}

export default Counter;

import React, { memo } from "react";

function Child() {
  console.log("Child Component");
  return (
    <div className="my-5">
      <h2>Child Component</h2>
    </div>
  );
}

export default memo(Child);

/* 
Counter's state gets updated so the component gets
rerendered. With Counter component update its child
component <Child /> also gets rerendered as we saw 
the console log.

Solution Wrap with memo(Child) while exporting.

*/

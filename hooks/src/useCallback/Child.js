import React, { memo } from "react";

function Child(props) {
  const { callback } = props;
  console.log("Child Component");
  return (
    <div className="my-5">
      <h2>Child Component</h2>
    </div>
  );
}

export default memo(Child);

/**
 * When we accept any props from parent component
 * then also child component gets rerendered even 
 * though we have used memo(Child). In such case
 * we use useCallback Hook in parent component.
 */

/* 
Counter's state gets updated so the component gets
rerendered. With Counter component update its child
component <Child /> also gets rerendered as we saw 
the console log.

Solution Wrap with memo(Child) while exporting.

*/

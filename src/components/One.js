import React from "react";
import { useSelector } from "react-redux";

const One = () => {
  const selector = useSelector((data) => data.gettingData);

  return (
    <div>
      <h1>{selector.data}</h1>
    </div>
  );
};

export default One;

// Step 5 - import { useSelector } from "react-redux"; in your components, store this with a var and catch a redux object from reducers index.
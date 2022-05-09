import React, { useState } from "react";
import { useDispatch } from "react-redux";

const Two = () => {
  const dispatch = useDispatch();
  let [data, setData] = useState("");

  let handleData = (e) => {
    setData(e.target.value);
  };

  let handleGetData = () => {
    dispatch({ type: "GET_DATA", payload: { data: data } });
  };

  return (
    <div>
      <input onChange={handleData} type="text" placeholder="Your Data" />
      <button style={{ marginLeft: "10px" }} onClick={handleGetData}>
        Get Data
      </button>
    </div>
  );
};

export default Two;

// Step 6 - import { useDispatch } from "react-redux"; in your components, store useDispatch in a variable and handle function for send data.
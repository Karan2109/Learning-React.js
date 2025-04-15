import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(1);
  // const [multipliedValue, setMultipliedValue] = useState(1);
  let multipliedValue = value * 5;

  const multiply = () => {
    // setMultipliedValue(value * 5);
    setValue(value + 1);
  };

  return (
    <>
      <h1>Main Value: {value}</h1>
      <button onClick={multiply}>Click to Multiply</button>
      <h2>Multiplied Value: {multipliedValue}</h2>
    </>
  );
};

export default App;

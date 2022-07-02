import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  return (
    <div className="body">
      <button onClick={Increment}>Increment +</button>
      <button onClick={Decrement}>Decrement -</button>
      <button onClick={reset}>Reset</button>
      <p className="para">value {count}</p>
    </div>
  );
};
export default App;

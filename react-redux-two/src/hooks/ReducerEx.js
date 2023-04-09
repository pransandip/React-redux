import { useState } from "react";
import "./App.css";

const ReducerEx = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button
        style={{
          width: "100px",
          hight: "50px",
          background: "skyblue",
          cursor: "pointer",
        }}
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <span> </span>
      <button
        style={{
          width: "100px",
          hight: "50px",
          background: "skyblue",
          cursor: "pointer",
        }}
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
};

export default ReducerEx;

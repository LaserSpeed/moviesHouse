import { useState, useEffect } from "react";
import "../style/counter.css";
function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    alert("Your have change the value to " + counter);
  }, [counter]);
  return (
    <>
      <h2>My Counter</h2>
      <div className="container">
        <button
          onClick={() => {
            setCounter((prevCount) => prevCount - 1);
          }}
        >
          -
        </button>
        <h1>{counter}</h1>
        <button
          onClick={() => {
            setCounter((prevCount) => prevCount + 1);
          }}
        >
          +
        </button>
      </div>
    </>
  );
}
export default Counter;

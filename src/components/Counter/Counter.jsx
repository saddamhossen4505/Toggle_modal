import { useState } from "react";
import "./Counter.scss";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="counter_area">
        <div className="counter">
          <h1>{counter}</h1>
          <hr />
          <button onClick={() => setCounter(counter - 1)}>--</button>
          <button onClick={() => setCounter(counter + 1)}>++</button>
          <button onClick={() => setCounter(0)}>reset</button>
        </div>
      </div>
    </>
  );
};

export default Counter;

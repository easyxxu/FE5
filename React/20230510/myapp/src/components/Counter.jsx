import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  function btnPlus() {
    setCount((prev) => {
      return prev + 1;
    });
  }
  function btnMinus() {
    setCount((prev) => {
      return prev - 1;
    });
  }
  return (
    <div>
      <h3>
        Counter: <span>{count}</span>
      </h3>
      <button onClick={btnPlus}>+1</button>
      <button onClick={btnMinus}>-1</button>
    </div>
  );
}

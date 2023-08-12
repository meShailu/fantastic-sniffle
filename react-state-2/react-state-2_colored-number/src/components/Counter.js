import ColoredNumber from "./ColoredNumber";
import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  const handleIncrement = () => {
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={counter} />
      <div className="counter__buttons-container">
        <buttononclick
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleIncrement}
        >
          +
        </buttononclick>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

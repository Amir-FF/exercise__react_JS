import { useState } from "react";

const useCounter = (value, number) => {
  const [count, setCount] = useState(value);

  const increment = () => {
    setCount(count + number);
  };
  const decrement = () => {
    setCount(count - number);
  };
  const reset = () => {
    setCount(value);
  };

  return { count, increment, decrement, reset };
};

export default useCounter;

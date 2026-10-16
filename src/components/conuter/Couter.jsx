import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../../redux/counterSlice";

const Couter = () => {
  // codes

  const value = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Redux - Redux Toolkit</h2>
      <p>Count: {value}</p>
      <button onClick={() => dispatch(increment(1))}>increment</button>
      <button onClick={() => dispatch(decrement(1))}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
    </>
  );
};

export default Couter;

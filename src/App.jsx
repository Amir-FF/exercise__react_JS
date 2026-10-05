import useCounter from "./hooks/useCounter";
import "./scss/styles.scss";

const App = () => {
  // codes

  const { count, increment, decrement, reset } = useCounter(10, 5);

  return (
    <>
      <h2>{count}</h2>
      <button onClick={decrement} type="button" className="btn btn-danger ms-2">
        Decrement
      </button>

      <button onClick={reset} type="button" className="btn btn-info ms-2">
        Reset
      </button>

      <button
        onClick={increment}
        type="button"
        className="btn btn-success ms-2"
      >
        Increment
      </button>
    </>
  );
};

export default App;

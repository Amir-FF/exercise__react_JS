import { useContext } from "react";
import UserContext from "../../context/UserContext";

const CompB = () => {
  // codes
  const { count, dispatch } = useContext(UserContext);

  return (
    <>
      <h2>CompB {count}</h2>
      <button
        onClick={() => dispatch({ type: "decrement", payload: 5 })}
        type="button"
        className="btn btn-danger ms-2"
      >
        Decrement
      </button>

      <button
        onClick={() => dispatch({ type: "reset" })}
        type="button"
        className="btn btn-info ms-2"
      >
        Reset
      </button>

      <button
        onClick={() => dispatch({ type: "increment", payload: 5 })}
        type="button"
        className="btn btn-success ms-2"
      >
        Increment
      </button>
    </>
  );
};

export default CompB;

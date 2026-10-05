import { useEffect, useRef } from "react";
import "./scss/styles.scss";

const App = () => {
  // codes

  const inputRef = useRef(null);

  useEffect(() => {
    console.log(inputRef.current);
  });

  return (
    <>
      <h2>name</h2>
      <input ref={inputRef} type="text" />
    </>
  );
};

export default App;

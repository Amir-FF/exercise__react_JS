// import React from "react";
import { useState } from "react";
import "./scss/styles.scss";

const App = () => {
  // codes
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
    setCount((prevCount) => prevCount + 1);
  };

  const [preson, setPerson] = useState({ name: "", age: "" });

  const [items, setItems] = useState([]);
  const [name, setName] = useState("");

  const addItem = () => {
    setItems([...items, name]);
  };

  return (
    <>
      <button
        onClick={() => setCount(count - 1)}
        type="button"
        className="btn btn-danger "
      >
        -
      </button>
      <button
        onClick={handleClick}
        type="button"
        className="btn btn-success ms-2"
      >
        +
      </button>

      <br />
      <br />

      <p>Count {count}</p>

      <br />
      <br />

      <div className="mb-3 w-25">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => {
            setPerson({ ...preson, name: e.target.value });
          }}
        />

        <br />
        <p>{preson.name}</p>
      </div>

      <div className="mb-5 w-25">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Age
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          onChange={(e) => {
            setPerson({ ...items, age: e.target.value });
          }}
        />

        <br />
        <p>{preson.age}</p>
      </div>

      <div className="mb-3 w-25">
        <input
          type="text"
          className="form-control w-50 d-inline"
          id="exampleFormControlInput1"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />

        <button onClick={addItem} type="button" className="btn btn-success">
          Add item
        </button>

        <br />
        <br />

        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;

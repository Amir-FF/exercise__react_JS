// import React from "react";
import Header from "./components/Header";
import "./scss/styles.scss";

import Button from "react-bootstrap/Button";

const App = () => {
  // codes
  const listName = [
    {
      id: 0,
      name: "ali",
    },

    {
      id: 1,
      name: "hossein",
    },

    {
      id: 2,
      name: "amir",
    },
  ];

  const inlineStyle = {
    fontSize: "2rem",
  };

  const bool = 0 < 1;

  return (
    <>
      <Header />
      <div className="bg-dark">
        <h1 style={inlineStyle}>hello would</h1>
      </div>

      <ul>
        {listName.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>

      {bool ? <p>true</p> : <p>false</p>}

      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
    </>
  );
};

export default App;

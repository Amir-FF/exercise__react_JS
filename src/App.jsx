// import React from "react";
import Form from "./components/form/Form";
import Header from "./components/header/Header";
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

  const sayName = (name, event) => {
    console.log(name, event.target);
  };

  const user = {
    name: "Amir",
    age: "22",
  };

  return (
    <>
      <Header user={user} sayName={sayName}>
        <span>prop in the span</span>
      </Header>

      <div className="bg-dark">
        <h1 style={inlineStyle}>hello would</h1>
      </div>

      <ul>
        {listName.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>

      {bool ? <p>true</p> : <p>false</p>}

      <Button onClick={() => sayName("name", event)} variant="success">
        Success
      </Button>

      <hr />

      <Form />
    </>
  );
};

export default App;

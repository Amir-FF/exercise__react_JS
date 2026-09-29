// import React from "react";
import "./App.scss";

const Header = () => {
  return (
    <header>
      <h1>hello</h1>
    </header>
  );
};

const App = () => {
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

  const bool = 0 < 1;

  return (
    <>
      <Header />
      <div className="bg-dark">
        <h1>hello would</h1>
      </div>

      <ul>
        {listName.map((name) => (
          <li key={name.id}>{name.name}</li>
        ))}
      </ul>

      {bool ? <p>true</p> : <p>false</p>}

      {!bool}
    </>
  );
};

export default App;

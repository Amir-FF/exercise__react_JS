import React from "react";
import "./App.scss";

const Header = () => {
  return React.createElement(
    "header",
    null,
    React.createElement("h1", null, "hello"),
  );
};

const App = () => {
  return React.createElement(
    React.Fragment,
    null,
    React.createElement(Header),

    React.createElement(
      "div",
      null,
      React.createElement("h1", null, "hello would"),
    ),
  );
};

export default App;

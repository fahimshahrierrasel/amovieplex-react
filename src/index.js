import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

function Index(Component) {
  return <Component />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(Index(App), rootElement);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import configureStore from "./redux/configure-store";

const store = configureStore();

function Index(Component) {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
}

ReactDOM.render(Index(App), document.getElementById("root"));

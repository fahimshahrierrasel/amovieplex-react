import { createStore } from "redux";
import rootReducer from "./reducer";
import middleware from "./middleware";

export default function configureStore(preLoadedState) {
  return createStore(rootReducer, preLoadedState, middleware);
}

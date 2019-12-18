import { SET_TOKEN, SET_CURRENT_USER } from "./action-types";

const getInitialState = () => {
  return {
    token: "",
    currentUser: null
  };
};

const adminReducer = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case SET_TOKEN:
      return {
        ...state,
        token: payload
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload
      };
    default:
      return state;
  }
};

export default adminReducer;

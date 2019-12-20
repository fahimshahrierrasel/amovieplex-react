import { SET_TOKEN, SET_CURRENT_USER } from "./action-types";
import { decodeToken, checkValidity } from "../../utils/auth-helpers";
import { TOKEN_STORAGE } from "../../constants/strings";

const getInitialState = () => {
  const localStorageToken = localStorage.getItem(TOKEN_STORAGE);
  const decodedToken = decodeToken(localStorageToken);
  if (decodedToken && checkValidity(decodedToken)) {
    return {
      token: localStorageToken,
      currentUser: decodedToken.user
    };
  }
  return {
    token: "",
    currentUser: null
  };
};

const userReducer = (state = getInitialState(), { type, payload }) => {
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

export default userReducer;

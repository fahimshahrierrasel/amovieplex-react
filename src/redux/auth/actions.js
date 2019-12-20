import { SET_TOKEN, SET_CURRENT_USER } from "./action-types";
import { Login } from "../../data/api/auth";
import { TOKEN_STORAGE } from "../../constants/strings";
import { decodeToken } from "../../utils/auth-helpers";

export const userLogin = authInfo => {
  return dispatch => {
    return Login(authInfo).then(response => {
      if (!response.error) {
        let decodedToken = decodeToken(response.data.token);
        if (decodedToken) {
          dispatch({ type: SET_CURRENT_USER, payload: decodedToken.user });
          dispatch({ type: SET_TOKEN, payload: response.data.token });
          localStorage.setItem(TOKEN_STORAGE, response.data.token);
        }
      }
      return response;
    });
  };
};

export const userLogout = () => {
  return dispatch => {
    localStorage.removeItem(TOKEN_STORAGE);
    dispatch({ type: SET_CURRENT_USER, payload: null });
    dispatch({ type: SET_TOKEN, payload: "" });
    return new Promise(() => true);
  };
};

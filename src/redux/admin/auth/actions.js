import { SET_TOKEN, SET_CURRENT_USER } from "./action-types";
import { login } from "../../../data/api/admin/auth";
import decode from "jwt-decode";

export const adminLogin = authInfo => {
  return dispatch => {
    return login(authInfo).then(data => {
      console.log("Data:", data);
      dispatch({ type: SET_TOKEN, payload: data.token });
      let decodedToken = decode(data.token);
      dispatch({ type: SET_CURRENT_USER, payload: decodedToken });
    });
  };
};

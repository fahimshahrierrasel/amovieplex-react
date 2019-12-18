import { combineReducers } from "redux";
import adminReducer from "./admin/auth/reducer";

const rootReducer = combineReducers({
  admin: adminReducer
});

export default rootReducer;

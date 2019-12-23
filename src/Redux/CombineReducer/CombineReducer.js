import { combineReducers } from "redux";
import LoginReducer from "../Reducers/LoginReducers/LoginReducer";

export default combineReducers({
  login: LoginReducer
});

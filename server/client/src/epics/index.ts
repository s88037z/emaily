import { combineEpics } from "redux-observable";
import authEpics from "./auth/authEpics";
console.log("authEpics array", authEpics);
export default combineEpics(...authEpics);

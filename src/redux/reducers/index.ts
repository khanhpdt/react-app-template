import { combineReducers } from "redux";
import { RootState } from "../state";
import helloReducer from "./helloReducer";

export default combineReducers<RootState>({
  helloState: helloReducer,
});

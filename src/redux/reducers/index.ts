import { combineReducers } from "redux";
import { RootState } from "../state";
import homeReducer from "./homeReducer";

export default combineReducers<RootState>({
  homeState: homeReducer,
});

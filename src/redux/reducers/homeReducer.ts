import { HomeActions, SAY_HELLO_SUCCESS } from "../actions/homeActions";
import { Reducer } from "redux";

export interface HomeState {
  readonly serverResponse: string;
}

const initialState: HomeState = {
  serverResponse: "",
};

const homeReducer: Reducer<HomeState, HomeActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case SAY_HELLO_SUCCESS:
      return {
        ...state,
        serverResponse: action.serverResponse,
      };
    default:
      return state;
  }
};

export default homeReducer;

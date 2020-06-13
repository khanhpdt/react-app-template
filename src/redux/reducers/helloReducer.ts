import { HelloActions, SAY_HELLO_SUCCESS } from "../actions/helloActions";
import { Reducer } from "redux";

export interface HelloState {
  readonly serverResponse: string;
}

const initialState: HelloState = {
  serverResponse: "",
};

const helloReducer: Reducer<HelloState, HelloActions> = (
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

export default helloReducer;

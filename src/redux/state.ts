import { HelloState } from "./reducers/helloReducer";

export interface RootState {
  readonly helloState: HelloState;
}

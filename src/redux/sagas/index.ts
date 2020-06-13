import { all } from "redux-saga/effects";
import helloSagas from "./helloSagas";

export default function* rootSaga() {
  yield all([...helloSagas()]);
}

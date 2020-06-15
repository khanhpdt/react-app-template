import { call, put, takeLatest } from "redux-saga/effects";
import * as helloApi from "../../api/homeApi";
import {
  SAY_HELLO,
  sayHelloFailed,
  sayHelloSuccess,
} from "../actions/homeActions";

function* sayHello() {
  try {
    const res = yield call(helloApi.ping);
    yield put(sayHelloSuccess(res.data));
  } catch (err) {
    yield put(sayHelloFailed());
  }
}

function* watchSayHello() {
  yield takeLatest(SAY_HELLO, sayHello);
}

export default function homeSagas() {
  return [watchSayHello()];
}

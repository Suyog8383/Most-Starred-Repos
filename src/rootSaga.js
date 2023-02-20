//Saga effects
import { all, fork } from "redux-saga/effects";
import { watchGetProfile } from "./components/ProfileSaga";

export default function* rootSaga() {
  yield all([fork(watchGetProfile)]);
}

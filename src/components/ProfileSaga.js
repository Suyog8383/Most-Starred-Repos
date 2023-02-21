import { call, put, takeLatest } from "redux-saga/effects";
import { getProfileFailed, getProfileSuccess } from "./ProfileSlice";

function* getProfile() {
  try {
    const response = yield call(
      fetch,
      "https://api.github.com/search/repositories?q=created:>2017-02-20&sort=stars&order=desc"
    );
    const body = yield call([response, "json"]);
    console.log("saga", body);

    yield put(getProfileSuccess({ result: body }));
  } catch (err) {
    console.log(err);
    yield put(getProfileFailed({ result: [] }));
  }
}

export function* watchGetProfile() {
  yield takeLatest("profiles/getProfile", getProfile);
}

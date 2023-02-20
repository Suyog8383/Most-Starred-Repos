import { put, takeLatest } from "redux-saga/effects";
import { getProfileFailed, getProfileSuccess } from "./ProfileSlice";

function* getProfile() {
  try {
    fetch(
      "https://api.github.com/search/repositories?q=created:>2017-02-20&sort=stars&order=desc"
    )
      .then((data) => data.json())
      .then((data) => console.log("@SN ", data));

    yield put(getProfileSuccess({ result: result }));
  } catch (err) {
    console.log(err);
    yield put(getProfileFailed({ result: [] }));
  }
}

export function* watchGetProfile() {
  yield takeLatest("profile/getProfile", getProfile);
}

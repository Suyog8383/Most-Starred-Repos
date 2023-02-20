import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import ProfileSlice from "./components/ProfileSlice";
const sagaMiddleware = createSagaMiddleware();

export const reduxStore = configureStore({
  reducer: {
    profile: ProfileSlice,
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

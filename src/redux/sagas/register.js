import { takeEvery } from "redux-saga/effects";
import * as NavigationService from "../../navigation/navigation-service";

export function* watchStartRegister() {
  yield takeEvery("START_REGISTER", startRegister);
}

export function* startRegister(action) {
  NavigationService.navigate("Register");
}

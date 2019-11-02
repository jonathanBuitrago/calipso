import { all, fork } from "redux-saga/effects";
import { watchStartRegister } from "./register";
import { watchStartRestaurantFinder } from "./restaurant-finder";

// Redux Saga: Root Sagar
export function* rootSaga() {
  yield all([watchStartRegister(), watchStartRestaurantFinder()]);
}

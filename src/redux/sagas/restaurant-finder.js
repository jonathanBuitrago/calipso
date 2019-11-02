import { takeEvery, call } from "redux-saga/effects";
import * as NavigationService from "../../navigation/navigation-service";

export function* watchStartRestaurantFinder() {
  yield takeEvery("START_RESTAURANT_FINDER", startRestaurantFinder);
}

export function* startRestaurantFinder(action) {
  const cities = yield call(() =>
    fetch("http://opentable.herokuapp.com/api/cities").then(res => res.json())
  );
  NavigationService.navigate("RestaurantFinder", cities);
}

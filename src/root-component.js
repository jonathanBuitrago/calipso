import React, { Component } from "react";
import MainNavigator from "./navigation/main-navigator";
import { Provider } from "react-redux";
import store from "./config/store";

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

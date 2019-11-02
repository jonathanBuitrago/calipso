import React, { Component } from "react";
import MainNavigator from "./navigation/main-navigator";
import { Provider } from "react-redux";
import store from "./config/store";
import * as NavigationService from "./navigation/navigation-service";

export default class App extends Component {
  componentDidMount() {
    NavigationService.setNavigator(this.navigator);
  }
  render() {
    return (
      <Provider store={store}>
        <MainNavigator
          ref={nav => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}

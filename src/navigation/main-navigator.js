import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Login from "../screens/login";
import Register from "../screens/register";
import RestaurantFinder from "../screens/restaurant-finder";
import Transactions from "../screens/transactions";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  RestaurantFinder: {
    screen: RestaurantFinder
  },
  Transactions: {
    screen: Transactions
  }
});

export default createAppContainer(AppNavigator);

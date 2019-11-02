import React from "react";
import { View, Text } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { fancyHeader, emptyHeader } from "./styles";
import Login from "../screens/login";
import Register from "../screens/register";
import RestaurantFinder from "../screens/restaurant-finder";
import Transactions from "../screens/transactions";

const AppNavigator = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: ({ navigation }) => emptyHeader()
  },
  Register: {
    screen: Register,
    navigationOptions: ({ navigation }) => emptyHeader()
  },
  RestaurantFinder: {
    screen: RestaurantFinder
  },
  Transactions: {
    screen: Transactions
  }
});

export default createAppContainer(AppNavigator);

import React, { useState } from "react";
import { Image, Picker, Text, View, TouchableOpacity } from "react-native";
import logo from "../../../assets/images/logo.png";
import styles from "./styles.js";

const RestaurantFinder = ({ navigation }) => {
  const [selectedCity, setSelectedCity] = useState("");
  const [restaurants, setRestaurants] = useState("");

  const getRestaurant = async city => {
    setSelectedCity(city);
    const restaurants = await fetch(
      `http://opentable.herokuapp.com/api/restaurants?city=${city}`
    );
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calipso</Text>
      <Image source={logo} style={styles.logo} />
      <Picker
        selectedValue={selectedCity}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => getRestaurant(itemValue)}
      >
        {navigation.getParam("cities").map(item => (
          <Picker.Item label={item} value={item} />
        ))}
      </Picker>
    </View>
  );
};

export default RestaurantFinder;

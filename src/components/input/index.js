import React from "react";
import { TextInput } from "react-native";

import styles from "./styles";
const Input = props => {
  return <TextInput {...props} style={styles.input} />;
};

export default Input;

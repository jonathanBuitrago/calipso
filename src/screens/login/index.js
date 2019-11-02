import React from "react";
import { Image, Text, View } from "react-native";
import { Formik } from "formik";
import Input from "../../components/input";
import Button from "../../components/button";
import { useDispatch } from "react-redux";

import styles from "./styles.js";
import validationSchema from "./schema.js";
import logo from "../../../assets/images/logo.png";
import { TouchableOpacity } from "react-native-gesture-handler";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calipso</Text>
      <Image source={logo} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={values => dispatch({ type: "START_RESTAURANT_FINDER" })}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, touched, handleSubmit, values }) => (
          <View style={styles.form}>
            <Input
              onChangeText={handleChange("email")}
              value={values.email}
              placeholder="Email"
            />
            {errors.email && touched.email && <Text> {errors.email} </Text>}
            <Input
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Password"
              secureTextEntry={true}
            />
            {errors.password && touched.password && (
              <Text> {errors.password} </Text>
            )}
            <Button onPress={handleSubmit} title="Login" />
            <Text style={styles.registerCopy}>¿No tienes cuenta?</Text>
            <TouchableOpacity
              onPress={() => dispatch({ type: "START_REGISTER" })}
            >
              <Text style={styles.register}>Registrate aqui!</Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Login;

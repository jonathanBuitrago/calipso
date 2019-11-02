import React from "react";
import { Button, TextInput, Text, View } from "react-native";
import { Formik } from "formik";
import validationSchema from "./schema.js";
const Login = () => {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={values => alert(values.password)}
      validationSchema={validationSchema}
    >
      {({ handleChange, errors, touched, handleSubmit, values }) => (
        <View>
          <TextInput
            onChangeText={handleChange("email")}
            value={values.email}
            placeholder="Email"
          />
          {errors.email && touched.email && <Text> {errors.email} </Text>}
          <TextInput
            onChangeText={handleChange("password")}
            value={values.password}
            placeholder="Password"
            secureTextEntry={true}
          />
          {errors.password && touched.password && (
            <Text> {errors.password} </Text>
          )}
          <Button onPress={handleSubmit} title="Submit" />
        </View>
      )}
    </Formik>
  );
};

export default Login;

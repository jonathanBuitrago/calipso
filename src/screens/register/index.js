import React from "react";
import { Image, Text, View } from "react-native";
import { Formik } from "formik";
import Input from "../../components/input";
import Button from "../../components/button";
import { useDispatch } from "react-redux";

import styles from "./styles.js";
import validationSchema from "./schema.js";

const Register = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calipso</Text>
      <Text>Ingresa tus datos personales</Text>
      <Formik
        initialValues={{ nombre: "", apellido: "", email: "", password: "" }}
        onSubmit={values => alert(values.password)}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, touched, handleSubmit, values }) => (
          <View style={styles.form}>
            <Input
              onChangeText={handleChange("nombre")}
              value={values.nombre}
              placeholder="Nombre"
            />
            {errors.nombre && touched.nombre && <Text> {errors.nombre} </Text>}
            <Input
              onChangeText={handleChange("apellido")}
              value={values.apellido}
              placeholder="Apellido"
            />
            {errors.apellido && touched.apellido && (
              <Text> {errors.apellido} </Text>
            )}
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
            <Button onPress={handleSubmit} title="Registrarme" />
          </View>
        )}
      </Formik>
    </View>
  );
};

export default Register;

import React, { useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

import { Formik } from "formik";
import colors from "../config/colors";
import Button from "../components/Button";
import Text from "../components/AppText/Text";
import TextInput from "../components/TextInput";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function SignupScreen(props) {
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          setFieldValue,
          touched,
          values,
        }) => (
          <>
            <TextInput
              icon="account"
              placeholder="Name"
              autoCorrect={false}
              onBlur={() => setFieldTouched("name")}
              onChangeText={handleChange("name")}
              secureTextEntry={false}
            />
            {touched.name && <Text style={styles.error}>{errors.name}</Text>}

            <TextInput
              icon="email"
              placeholder="Email"
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              textContentType="emailAddress"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />

            {touched.email && <Text style={styles.error}>{errors.email}</Text>}

            <TextInput
              pwd={true}
              icon="form-textbox-lock"
              placeholder="Password"
              autoCompleteType="password"
              autoCapitalize="none"
              onBlur={() => setFieldTouched("password")}
              onChangeText={handleChange("password")}
            />

            {touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}

            <Button title="Sign up" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  logo: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 10,
  },
  error: { color: "red", marginLeft: 10 },
});

export default SignupScreen;

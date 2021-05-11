import React, { useState } from "react";
import { StyleSheet, Image, View, Alert } from "react-native";

import { useAuth } from "../context/AuthContext";
import { Formik } from "formik";
import * as Yup from "yup";

import AppActivityIndicator from "../components/AppActivityIndicator";
import Button from "../components/Button";
import Screen from "../components/Screen";
import Text from "../components/AppText/Text";
import TextInput from "../components/TextInput";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function LoginScreen({ navigation }) {
  const { login } = useAuth();

  const [loading, setLoading] = useState(false);

  const onHandleSubmit = async (email, password) => {
    try {
      setLoading(true);
      await login(email, password);
    } catch (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <AppActivityIndicator />
      ) : (
        <Screen style={styles.container}>
          <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />
          </View>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) =>
              onHandleSubmit(values["email"], values["password"])
            }
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
                  icon="email"
                  placeholder="Enter your email"
                  autoCapitalize="none"
                  autoCompleteType="email"
                  keyboardType="email-address"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                />

                {touched.email && (
                  <Text style={styles.error}>{errors.email}</Text>
                )}

                <TextInput
                  pwd={true}
                  icon="form-textbox-lock"
                  placeholder="Enter your password"
                  autoCompleteType="password"
                  autoCapitalize="none"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                />

                {touched.password && (
                  <Text style={styles.error}>{errors.password}</Text>
                )}
                <View style={styles.buttonContainer}>
                  <Button title="Login" onPress={handleSubmit} />
                  <Button
                    title="Sign up"
                    color="secondary"
                    onPress={() => navigation.navigate("Sign up")}
                  />
                </View>
              </>
            )}
          </Formik>
        </Screen>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  logo: {
    alignSelf: "center",
    height: 160,
    marginBottom: 10,
    width: 160,
  },
  buttonContainer: {
    marginTop: 20,
  },
  error: {
    color: "red",
    margin: -5,
    marginLeft: 10,
  },
});

export default LoginScreen;

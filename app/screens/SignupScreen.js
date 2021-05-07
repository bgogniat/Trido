import React, { useState } from "react";
import { StyleSheet, Image, View, Alert } from "react-native";
import { useAuth } from "../context/AuthContext";
import { Formik } from "formik";
import * as Yup from "yup";

import Button from "../components/Button";
import Screen from "../components/Screen";
import Text from "../components/AppText/Text";
import TextInput from "../components/TextInput";
import userAPi from "../api/user";
import AppActivityIndicator from "../components/AppActivityIndicator";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});

function SignupScreen({ navigation }) {
  const { signup } = useAuth();

  const [loading, setLoading] = useState(false);

  const onHandleSubmit = async (email, password, name) => {
    try {
      setLoading(true);
      await signup(email, password).then((data) =>
        userAPi.addUserInfo(data.user.uid, email, name)
      );
    } catch (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <AppActivityIndicator visible={loading} />
      <Screen style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={require("../assets/logo.png")} />
        </View>
        <Formik
          initialValues={{ name: "", email: "", password: "" }}
          onSubmit={(values) =>
            onHandleSubmit(values["email"], values["password"], values["name"])
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

              {touched.email && (
                <Text style={styles.error}>{errors.email}</Text>
              )}

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

              <View style={styles.buttonContainer}>
                <Button title="Sign up" onPress={handleSubmit} />
                <Button
                  title="Back to Login"
                  color="secondary"
                  onPress={() => navigation.navigate("Login")}
                />
              </View>
            </>
          )}
        </Formik>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginTop: 30,
  },

  buttonContainer: {
    marginTop: 20,
  },

  logo: {
    width: 160,
    height: 160,
    alignSelf: "center",
    marginBottom: 10,
  },
  error: {
    color: "red",
    marginLeft: 10,
    margin: -10,
  },
});

export default SignupScreen;

import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";

import { Formik } from "formik";
import colors from "../config/colors";
import Button from "../components/Button";
import AppText from "../components/AppText/Text";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});

function LoginScreen(props) {
  const [visible, setVisible] = useState(true);
  const [iconName, setIconName] = useState("eye-off");
  const passwordVisible = () => {
    if (visible) {
      setVisible(false);
      setIconName("eye");
    } else {
      setVisible(true);
      setIconName("eye-off");
    }
  };
  return (
    <Screen style={styles.container}>
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </View>
      <Formik
        initialValues={{ email: "", password: "" }}
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
            <View style={styles.input}>
              <MaterialCommunityIcons
                name={"email"}
                size={30}
                colors={colors.medium}
                style={styles.icon}
              />
              <TextInput
                style={{ width: "100%" }}
                icon="mail"
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
            </View>
            {touched.email && (
              <AppText style={{ color: "red" }}>{errors.email}</AppText>
            )}
            <View style={styles.input}>
              <MaterialCommunityIcons
                name={"form-textbox-lock"}
                size={30}
                colors={colors.medium}
                style={styles.icon}
              />
              <TextInput
                style={{ width: "75%" }}
                icon="key"
                placeholder="Enter your password"
                secureTextEntry={visible}
                autoCompleteType="password"
                autoCapitalize="none"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              <TouchableOpacity
                title="Visible"
                onPress={() => passwordVisible()}
              >
                <MaterialCommunityIcons
                  name={iconName}
                  size={30}
                  colors={colors.medium}
                />
              </TouchableOpacity>
            </View>
            {touched.password && (
              <AppText style={{ color: "red" }}>{errors.password}</AppText>
            )}
            <Button title="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  logo: {
    width: 150,
    height: 150,
    alignSelf: "center",
    bottom: 30,
  },
  input: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 25,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
});

export default LoginScreen;

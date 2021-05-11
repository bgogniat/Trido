import React from "react";
import { Image, ImageBackground, StyleSheet, View } from "react-native";

import AppText from "../components/AppText/Text";
import Button from "../components/Button";
import colors from "../config/colors";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={1}
      progressiveRenderingEnabled
      opacit
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <AppText style={styles.title}>Trido</AppText>
        <AppText style={styles.tagline}>- Give it a second chance</AppText>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Sign up"
          color="secondary"
          onPress={() => navigation.navigate("Sign up")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    bottom: 50,

    width: "80%",

    justifyContent: "center",
  },

  logo: {
    width: 200,
    height: 200,
  },
  logoContainer: {
    top: 50,
    position: "absolute",
    alignItems: "center",
  },
  title: {
    fontWeight: "bold",
    color: colors.white,
    fontSize: 35,
  },

  tagline: {
    fontSize: 20,
    fontWeight: "600",
    paddingVertical: 10,
    color: colors.white,
    fontStyle: "italic",
  },
  socialMedia: {
    top: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default WelcomeScreen;

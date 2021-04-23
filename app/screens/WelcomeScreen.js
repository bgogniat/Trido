import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../config/colors";

import Button from "../components/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText/Text";
import { useFonts } from "expo-font";

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
        <AppText style={styles.tagline}>- Give it a second change</AppText>
      </View>

      <View style={styles.buttonsContainer}>
        <Button title="Login" onPress={() => console.log("Login")} />
        <Button
          title="Register"
          color="secondary"
          onPress={() => console.log("Register")}
        />

        <View style={styles.socialMedia}>
          <TouchableOpacity onPress={() => console.log("Login with Google")}>
            <MaterialCommunityIcons name="google" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Login with Facebook")}>
            <MaterialCommunityIcons name="facebook" size={40} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Login with Twitter")}>
            <MaterialCommunityIcons name="twitter" size={40} color="white" />
          </TouchableOpacity>
        </View>
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
    fontFamily: "permanentmarker-regular",

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

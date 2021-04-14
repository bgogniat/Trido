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
        <Image
          style={styles.logo}
          source={require("../assets/logo_transparent.png")}
        />
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
            <MaterialCommunityIcons name="google" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Login with Facebook")}>
            <MaterialCommunityIcons name="facebook" size={50} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => console.log("Login with Twitter")}>
            <MaterialCommunityIcons name="twitter" size={50} color="white" />
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
    padding: 20,
    width: "80%",
  },

  logo: {
    width: 500,
    height: 500,
  },
  logoContainer: {
    position: "absolute",
    top: 10,

    alignItems: "center",
  },
  socialMedia: {
    paddingTop: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default WelcomeScreen;

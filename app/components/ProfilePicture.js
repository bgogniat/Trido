import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";
import Screen from "./Screen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ProfilePicture({ imageUrl = true, onPress }) {
  return (
    <Screen style={styles.container}>
      <TouchableOpacity>
        {imageUrl ? (
          <View style={styles.thumbnail}>
            <MaterialCommunityIcons
              name="camera"
              size={80}
              color={colors.medium}
            />
          </View>
        ) : (
          <Image
            source={require("../assets/background.jpg")}
            style={styles.image}
          />
        )}
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  thumbnail: {
    width: 200,
    height: 200,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 100,
  },
});

export default ProfilePicture;

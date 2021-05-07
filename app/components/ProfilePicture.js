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

function ProfilePicture({ imageUrl, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      {!imageUrl ? (
        <View style={styles.thumbnail}>
          <MaterialCommunityIcons
            name="camera"
            size={60}
            color={colors.medium}
          />
        </View>
      ) : (
        <Image source={{ uri: imageUrl }} style={styles.image} />
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
  },
  thumbnail: {
    width: 170,
    height: 170,
    backgroundColor: colors.light,
    justifyContent: "center",
    alignItems: "center",

    borderRadius: 100,
  },
});

export default ProfilePicture;

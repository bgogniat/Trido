import React from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";

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
    borderRadius: 100,
    height: 150,
    width: 150,
  },
  thumbnail: {
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: colors.light,
    height: 150,
    justifyContent: "center",
    width: 150,
  },
});

export default ProfilePicture;

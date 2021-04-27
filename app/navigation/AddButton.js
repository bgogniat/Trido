import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "../config/colors";

function AddButton({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.circle}>
          <Text style={styles.letter}>T</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.primary,
    borderColor: colors.white,
    borderWidth: 6,
    bottom: 25,
    borderRadius: 37.5,
    height: 75,
    width: 75,
    justifyContent: "center",
  },
  circle: {
    backgroundColor: colors.white,
    borderRadius: 20,
    height: 40,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  letter: {
    color: colors.primary,
    fontSize: 30,
    fontWeight: "bold",
  },
});
export default AddButton;

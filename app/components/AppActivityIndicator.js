import React from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";

import colors from "../config/colors";

function AppActivityIndicator({ visible = true }) {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <ActivityIndicator size="large" color={colors.primary} />
    </View>
  );
}
const styles = StyleSheet.create({
  overlay: {
    alignItems: "center",
    backgroundColor: "white",
    elevation: 1,
    height: "100%",
    justifyContent: "center",
    opacity: 0.7,
    position: "absolute",
    width: "100%",
  },
});

export default AppActivityIndicator;

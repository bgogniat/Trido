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
    position: "absolute",
    backgroundColor: "white",
    height: "100%",
    width: "100%",
    opacity: 0.7,
    elevation: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default AppActivityIndicator;

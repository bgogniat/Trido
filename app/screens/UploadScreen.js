import React from "react";
import { View, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText/Text";
import colors from "../config/colors";

function UploadScreen({ visible = true, onPress }) {
  return (
    <Modal visible={visible}>
      <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>
          <View style={styles.background}>
            <Ionicons name="cloud-done" size={150} color={colors.primary} />
            <AppText style={{ margin: 10 }}>Uploaded!</AppText>
            <AppText>Press anywhere to continue...</AppText>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    alignItems: "center",
    height: "100%",
    justifyContent: "center",
    width: "100%",
  },
});

export default UploadScreen;

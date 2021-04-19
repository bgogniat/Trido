import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";
import colors from "../config/colors";

function AppSwitch({ enable }) {
  const [isEnabled, setIsEnabled] = useState(enable);
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#767577", true: colors.primary }}
        thumbColor={isEnabled ? colors.light : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 10,
    flex: 1,

    justifyContent: "center",
  },
});

export default AppSwitch;

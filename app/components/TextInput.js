import React, { useState } from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppTextInput({
  icon,
  width = "100%",
  pwd = false,
  send = false,
  onPress,
  ...otherProps
}) {
  const [visible, setVisible] = useState(pwd);
  const [iconName, setIconName] = useState("eye");
  const passwordVisible = () => {
    if (!visible) {
      setVisible(true);
      setIconName("eye");
    } else {
      setVisible(false);
      setIconName("eye-off");
    }
  };
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={25}
          colors={defaultStyles.colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={defaultStyles.text}
        secureTextEntry={visible}
        {...otherProps}
      />

      {pwd && (
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            onPress={() => passwordVisible()}
            style={{ alignSelf: "flex-end" }}
          >
            <MaterialCommunityIcons
              name={iconName}
              size={25}
              colors={colors.medium}
            />
          </TouchableOpacity>
        </View>
      )}
      {send && (
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity onPress={onPress} style={{ alignSelf: "flex-end" }}>
            <MaterialCommunityIcons
              name={"send"}
              size={25}
              colors={colors.medium}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,

    borderRadius: 15,
    flexDirection: "row",

    padding: 15,
    marginVertical: 10,
  },

  icon: {
    marginRight: 10,
  },
});

export default AppTextInput;

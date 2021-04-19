import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import AppSwitch from "./AppSwitch";
import Icon from "./Icon";

function Settings({ list }) {
  const menuItems = [
    {
      title: "Dark mode",
      icon: { name: "format-list-bulleted", backgroundColor: Colors.primary },
      value: false,
    },
    {
      title: "Notification",
      icon: { name: "email", backgroundColor: Colors.secondary },
      targetScreen: "Messages",
    },
  ];
  return (
    <FlatList>
      <View>
        <Icon />
        <Text>{title}</Text>
        <AppSwitch enable={true} />
      </View>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default Settings;

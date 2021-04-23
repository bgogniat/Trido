import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Image,
} from "react-native";
import Screen from "../components/Screen";

import Icon from "../components/Icon";
import Text from "../components/AppText/Text";
import colors from "../config/colors";
import AppSwitch from "../components/AppSwitch";

const options = [
  {
    id: 1,
    name: "Listings",
    icon: "format-list-bulleted",
    color: colors.primary,
  },
  {
    id: 2,
    name: "Messages",
    icon: "mail",
    color: colors.secondary,
  },
  {
    id: 3,
    name: "Settings",
    icon: "cog",
    color: colors.third,
  },
];

function AccountScreen({ navigation }) {
  const [settingVisible, setSettingVisible] = useState(false);

  const showSettings = () => {
    if (settingVisible) {
      setSettingVisible(false);
    } else {
      setSettingVisible(true);
    }
  };
  return (
    <Screen style={styles.screen}>
      <TouchableHighlight underlayColor={colors.light}>
        <View style={styles.subContainer}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
          />
          <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>
              {"Bertrand"}
            </Text>
            <Text style={styles.subTitle} numberOfLines={2}>
              {"bertrand-7@hotmail.com"}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />

      <FlatList
        style={{ marginTop: 30, marginBottom: 30 }}
        data={options}
        keyExtractor={(option) => option.id.toString()}
        renderItem={({ item }) => (
          <>
            <TouchableHighlight
              underlayColor={colors.light}
              onPress={() => console.log(item.name)}
            >
              <View style={styles.subContainer}>
                <Icon name={item.icon} backgroundColor={item.color} />
                <View style={styles.detailsContainer}>
                  <Text style={styles.title}>{item.name}</Text>
                </View>
              </View>
            </TouchableHighlight>
            <View style={styles.separator} />
          </>
        )}
      />

      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Log")}
      >
        <View style={[styles.subContainer]}>
          <Icon name="logout" backgroundColor={colors.red} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{"Log out"}</Text>
          </View>
        </View>
      </TouchableHighlight>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    flex: 1,
  },
  subContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: colors.medium,
  },
  separator: {
    width: "100%",
    height: 2,
    backgroundColor: colors.light,
  },
});

export default AccountScreen;

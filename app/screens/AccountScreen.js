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
              {"Gogniat"}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />

      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Listing")}
      >
        <View style={styles.subContainer}>
          <Icon name="format-list-bulleted" backgroundColor={colors.primary} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{"Listing"}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Message")}
      >
        <View style={styles.subContainer}>
          <Icon name="email" backgroundColor={colors.secondary} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{"Message"}</Text>
          </View>
        </View>
      </TouchableHighlight>
      <View style={styles.separator} />
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => showSettings()}
      >
        <View style={styles.subContainer}>
          <Icon name="account-settings" backgroundColor={colors.third} />
          <View style={styles.detailsContainer}>
            <Text style={styles.title}>{"Settings"}</Text>
          </View>
        </View>
      </TouchableHighlight>
      {settingVisible && <AppSwitch title="Dark mode" enable={false} />}
      <View style={styles.separator} />
      <TouchableHighlight
        underlayColor={colors.light}
        onPress={() => console.log("Log")}
      >
        <View style={styles.subContainer}>
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
  },
  subContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  screen: {
    backgroundColor: colors.light,
    flex: 1,
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

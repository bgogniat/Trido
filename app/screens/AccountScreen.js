import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  TouchableHighlight,
  Image,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import Text from "../components/AppText/Text";

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
  const { currentUser, logout } = useAuth();
  const [loading, setLoading] = useState(false);
  const isLoggingOut = () => {
    Alert.alert("Log out", "Are you sure you want to log out?", [
      { text: "Yes", onPress: () => onLogOut() },
      { text: "No" },
    ]);
  };

  const onLogOut = async () => {
    try {
      setLoading(true);
      await logout();
    } catch (error) {
      Alert.alert(error.message);
    }
    setLoading(false);
  };

  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <View style={styles.account}>
        <TouchableHighlight underlayColor={colors.light}>
          <Image
            style={styles.image}
            source={require("../assets/background.jpg")}
          />
        </TouchableHighlight>
        <View style={styles.accountInfo}>
          <Text style={styles.title} numberOfLines={1}>
            {"Bertrand"}
          </Text>
          <Text style={styles.subTitle} numberOfLines={1}>
            {currentUser.email}
          </Text>
        </View>
      </View>

      <View style={styles.separator} />

      <View style={styles.container}>
        <FlatList
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
                  <MaterialCommunityIcons
                    color={colors.medium}
                    name="chevron-right"
                    size={25}
                  />
                </View>
              </TouchableHighlight>
              <View style={styles.separator} />
            </>
          )}
        />
      </View>

      <TouchableHighlight underlayColor={colors.light} onPress={isLoggingOut}>
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
    marginTop: 20,
    marginBottom: 20,
  },
  subContainer: {
    alignItems: "center",
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },

  detailsContainer: {
    marginLeft: 15,
    justifyContent: "center",
    flex: 1,
  },
  image: {
    width: 170,
    height: 170,
    borderRadius: 100,
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
  account: {
    height: 250,
    padding: 15,
    marginTop: -5,
    backgroundColor: colors.white,
    alignItems: "center",
  },
  accountInfo: {
    alignItems: "center",
  },
});

export default AccountScreen;

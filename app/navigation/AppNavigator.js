import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ListingsScreen from "../screens/ListingsScreen";
import { Text, View } from "react-native";
import AccountScreen from "../screens/AccountScreen";
import ListingNavigator from "./ListingNavigator";
import AccountNavigator from "./AccountNavigator";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AddButton from "./AddButton";

const AddListingScreen = () => (
  <View>
    <Text>AddListing screen</Text>
  </View>
);

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{ showLabel: false }}>
    <Tab.Screen
      name="Listings"
      component={ListingNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="home" color={color} size={30} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="AddListing"
      component={AddListingScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddButton onPress={() => navigation.navigate("AddListing")} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color }) => (
          <MaterialCommunityIcons name="account" color={color} size={30} />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;

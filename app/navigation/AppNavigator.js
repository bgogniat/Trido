import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AccountNavigator from "./AccountNavigator";
import AddButton from "./AddButton";
import AddListingScreen from "../screens/AddListingScreen";
import ListingNavigator from "./ListingNavigator";

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <Tab.Navigator tabBarOptions={{ showLabel: true }}>
    <Tab.Screen
      name="Listings"
      component={ListingNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    ></Tab.Screen>
    <Tab.Screen
      name="AddListingScreen"
      component={AddListingScreen}
      options={({ navigation }) => ({
        tabBarButton: () => (
          <AddButton onPress={() => navigation.navigate("AddListingScreen")} />
        ),
      })}
    />
    <Tab.Screen
      name="Account"
      component={AccountNavigator}
      options={{
        tabBarIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="account" color={color} size={size} />
        ),
      }}
    ></Tab.Screen>
  </Tab.Navigator>
);

export default AppNavigator;

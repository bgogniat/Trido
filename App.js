import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Picker, StyleSheet, Text, View } from "react-native";
import Card from "./app/components/Card";
import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AddListingScreen from "./app/screens/AddListingScreen";
import ImagePickerInput from "./app/components/ImagePickerInput";
import ListImagePicker from "./app/components/ListImagePicker";

import Screen from "./app/components/Screen";
import CategoryPicker from "./app/components/CategoryPicker";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AddListingScreen />
    </NavigationContainer>
  );
}

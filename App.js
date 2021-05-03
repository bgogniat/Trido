import {
  setStatusBarNetworkActivityIndicatorVisible,
  StatusBar,
} from "expo-status-bar";
import React, { useState } from "react";
import AppLoading from "expo-app-loading";

import AccountScreen from "./app/screens/AccountScreen";
import ListingsScreen from "./app/screens/ListingsScreen";
import LoginScreen from "./app/screens/LoginScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";

import AuthNavigator from "./app/navigation/AuthNavigator";
import AppNavigator from "./app/navigation/AppNavigator";
import navigationTheme from "./app/navigation/navigationTheme";
import AddListingScreen from "./app/screens/AddListingScreen";
import ImagePickerInput from "./app/components/ImagePickerInput";
import ListImagePicker from "./app/components/ListImagePicker";

import CategoryPicker from "./app/components/CategoryPicker";
import SignupScreen from "./app/screens/SignupScreen";

import { AuthProvider } from "./app/context/AuthContext";

import CheckUser from "./app/auth/CheckUser";
import firebase from "firebase/firestore";
import Firestore from "./app/storage/Firestore";
export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={navigationTheme}>
        <Firestore />
      </NavigationContainer>
    </AuthProvider>
  );
}

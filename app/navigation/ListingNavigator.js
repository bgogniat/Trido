import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import ListingsScreen from "../screens/ListingsScreen";

const DetailListing = () => (
  <View>
    <Text>Register screen</Text>
  </View>
);
const Stack = createStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen name="DetailListing" component={DetailListing} />
  </Stack.Navigator>
);

export default ListingNavigator;

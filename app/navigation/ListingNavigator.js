import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View } from "react-native";
import ListingsScreen from "../screens/ListingsScreen";
import DetailListingScreen from "../screens/DetailListingScreen";

const Stack = createStackNavigator();

const ListingNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="DetailListing"
      component={DetailListingScreen}
      options={{ headerShown: true }}
    />
  </Stack.Navigator>
);

export default ListingNavigator;

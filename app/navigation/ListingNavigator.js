import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DetailListingScreen from "../screens/DetailListingScreen";
import ListingsScreen from "../screens/ListingsScreen";

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

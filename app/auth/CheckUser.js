import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { useAuth } from "../context/AuthContext";
import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";

function CheckUser(props) {
  const { currentUser } = useAuth();

  return <>{currentUser ? <AppNavigator /> : <AuthNavigator />}</>;
}

const styles = StyleSheet.create({
  container: {},
});
export default CheckUser;

import React from "react";
import { AuthProvider } from "./app/context/AuthContext";
import CheckUser from "./app/auth/CheckUser";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import navigationTheme from "./app/navigation/navigationTheme";

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer theme={navigationTheme}>
        <CheckUser />
      </NavigationContainer>
    </AuthProvider>
  );
}

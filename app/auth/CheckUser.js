import React from "react";

import { useAuth } from "../context/AuthContext";
import AppNavigator from "../navigation/AppNavigator";
import AuthNavigator from "../navigation/AuthNavigator";

function CheckUser(props) {
  const { currentUser } = useAuth();

  return <>{currentUser ? <AppNavigator /> : <AuthNavigator />}</>;
}

export default CheckUser;

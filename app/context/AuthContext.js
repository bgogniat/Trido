import React, { useContext, useEffect } from "react";
import { useState } from "react";

import { auth } from "../auth/firebase";
import AppActivityIndicator from "../components/AppActivityIndicator";

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);

  function signup(email, password) {
    setLoading(true);
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function login(email, password) {
    setLoading(true);
    return auth.signInWithEmailAndPassword(email, password);
  }
  function logout() {
    setLoading(true);
    return auth.signOut();
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,

    signup,
    login,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading ? children : <AppActivityIndicator />}
    </AuthContext.Provider>
  );
}

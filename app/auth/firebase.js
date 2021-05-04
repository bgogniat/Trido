import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyB-dml9En1c5ll__doVMlv_yqvKINoEnRY",
  authDomain: "trido-1e318.firebaseapp.com",
  databaseURL: "https://trido-1e318.firebaseio.com",
  projectId: "trido-1e318",
  storageBucket: "trido-1e318.appspot.com",
  messagingSenderId: "373174772875",
});

export const auth = app.auth();

export default app;

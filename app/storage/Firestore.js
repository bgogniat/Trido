import React from "react";
import { View, StyleSheet, Text } from "react-native";
import firestore from "firebase/firestore";
import Button from "../components/Button";

function Firestore(props) {
  const getListing = async () => {
    const listing = await firestore()
      .collection("listings")
      .doc("pt6SUZ5NBgcrpC9nJSSM")
      .get();
    console.log(listing);
  };

  return (
    <View style={styles.container}>
      <Text>Yooo</Text>
      <Button title="Get listings" onPress={getListing}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
export default Firestore;

import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

const listings = [
  {
    id: 1,
    title: "New sofa",
    subTitle: "Good quality, used for 2 months",
    price: 100,
    image: require("../assets/background.jpg"),
    category: "Furniture",
  },
  {
    id: 2,
    title: "Stakeboard",
    subTitle: "Almost new",
    price: 25,
    image: require("../assets/background.jpg"),
    category: "Sport",
  },
  {
    id: 3,
    title: "Stakeboard",
    subTitle: "Almost new",
    price: 25,
    image: require("../assets/background.jpg"),
    category: "Sport",
  },
  {
    id: 4,
    title: "Stakeboard",
    subTitle: "Almost new",
    price: 25,
    image: require("../assets/background.jpg"),
    category: "Sport",
  },
];

function ListingsScreen({ navigation }) {
  return (
    <Screen style={{ backgroundColor: colors.light }}>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => navigation.navigate("DetailListing", item)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
export default ListingsScreen;

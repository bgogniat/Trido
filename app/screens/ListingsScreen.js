import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";

const listings = [
  {
    id: 1,
    title: "New sofa",
    subTitle: "Good quality, used for 2 months",
    price: 100,
    image: "../assets/background.jpg",
    category: "Furniture",
  },
  {
    id: 2,
    title: "Stakeboard",
    subTitle: "Almost new",
    price: 25,
    image: "../assets/background.jpg",
    category: "Sport",
  },
  {
    id: 3,
    title: "Stakeboard",
    subTitle: "Almost new",
    price: 25,
    image: "../assets/background.jpg",
    category: "Sport",
  },
  {
    id: 4,
    title: "Stakeboard",
    subTitle: "Almost new",
    price: 25,
    image: "../assets/background.jpg",
    category: "Sport",
  },
];

function ListingsScreen(props) {
  return (
    <Screen>
      <FlatList
        data={listings}
        keyExtractor={(listing) => listing.id.toString()}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={item.price}
            subTitle={item.subTitle}
            image={item.image}
            onPress={() => console.log("Open listing")}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {},
});
export default ListingsScreen;

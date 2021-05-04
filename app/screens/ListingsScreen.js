import React from "react";
import { View, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import colors from "../config/colors";

import listingsApi from "../api/listings";
import { useState } from "react";
import { useEffect } from "react";
import AppActivityIndicator from "../components/AppActivityIndicator";
import AppText from "../components/AppText/Text";
import Button from "../components/Button";

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
];

function ListingsScreen({ navigation }) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    listingsApi
      .getListings()
      .then((listings) => setData(listings))
      .catch((error) => {
        setError(!!error);
      });

    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <AppActivityIndicator visible={loading} />

      <Screen style={{ backgroundColor: colors.light }}>
        {error ? (
          <View style={{ margin: 15, alignItems: "center" }}>
            <AppText>Couldn't retrieve the listings.</AppText>
            <Button title="Give it a second chance" onPress={getData} />
          </View>
        ) : (
          <FlatList
            data={data}
            keyExtractor={(listing) => listing.toString()}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                price={item.price}
                description={item.description}
                imageUrl={item.images[0]}
                onPress={() => navigation.navigate("DetailListing", item)}
              />
            )}
          />
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({});
export default ListingsScreen;

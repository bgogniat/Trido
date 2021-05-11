import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  RefreshControl,
} from "react-native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppText from "../components/AppText/Text";
import Button from "../components/Button";
import Card from "../components/Card";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import Screen from "../components/Screen";

//Data example
const listings = [
  {
    id: 1,
    title: "New sofa",
    description: "Good quality, used for 2 months",
    price: 100,
    image: require("../assets/background.jpg"),
    category: "Furniture",
  },
  {
    id: 2,
    title: "Stakeboard",
    description: "Almost new",
    price: 25,
    image: require("../assets/background.jpg"),
    category: "Sport",
  },
];

function ListingsScreen({ navigation }) {
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    getData().then(() => setRefreshing(false));
  }, []);

  const getData = async () => {
    setError(false);
    setLoading(true);
    listingsApi
      .getListings()
      .then((listings) => setData(listings))
      .catch((error) => {
        setError(true);
        console.log(error);
      });

    setLoading(false);
  };

  useEffect(() => {
    let isMounted = true;
    getData();
    return () => {
      isMounted = false;
    };
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
            keyExtractor={(data) => data.id}
            renderItem={({ item }) => (
              <Card
                title={item.title}
                price={item.price}
                description={item.description}
                imageUrl={item.images[0]}
                onPress={() => navigation.navigate("DetailListing", item)}
              />
            )}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        )}
      </Screen>
    </>
  );
}

export default ListingsScreen;

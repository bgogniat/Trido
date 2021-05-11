import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useAuth } from "../context/AuthContext";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppText from "../components/AppText/Text";
import colors from "../config/colors";
import listingsApi from "../api/listings";
import userApi from "../api/user";
import Screen from "../components/Screen";

function MyListingScreen(props) {
  const { currentUser } = useAuth();
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getListings();
    return () => {
      isMounted = false;
    };
  }, []);

  const getListings = async () => {
    setLoading(true);
    await userApi
      .getListings(currentUser.uid)
      .then((listings) => setListings(listings))
      .catch((error) => console.log(error.message));
    setLoading(false);
  };
  const isDelete = (listingId) => {
    Alert.alert("Delete", "Are you sure you want to delete the listing?", [
      { text: "Yes", onPress: () => onDelete(listingId) },
      { text: "No" },
    ]);
  };

  const onDelete = async (listingId) => {
    try {
      setLoading(true);
      await listingsApi.deleteListing(listingId);
    } catch (error) {
      console.log(error.message);
    }
    setLoading(false);
    getListings();
  };
  return (
    <>
      {loading ? (
        <AppActivityIndicator />
      ) : (
        <Screen>
          {listings.length === 0 ? (
            <View style={styles.sad}>
              <AppText>No listing to display...</AppText>
              <MaterialCommunityIcons
                name="emoticon-sad-outline"
                size={60}
                color={colors.primary}
              />
            </View>
          ) : (
            <FlatList
              data={listings}
              keyExtractor={(listing) => listing.id}
              renderItem={({ item }) => (
                <View style={styles.container}>
                  <Image
                    source={{ uri: item.images[0] }}
                    style={styles.image}
                  />
                  <View style={styles.text}>
                    <AppText style={styles.title}>{item.title}</AppText>

                    <AppText style={styles.price}>{item.price} €</AppText>
                    <AppText style={styles.description}>
                      {item.description}
                    </AppText>
                  </View>
                  <TouchableOpacity onPress={() => isDelete(item.id)}>
                    <View style={styles.icon}>
                      <MaterialCommunityIcons
                        name="trash-can-outline"
                        size={30}
                        color="black"
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
        </Screen>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 10,
  },
  image: {
    borderRadius: 15,
    height: 100,
    marginRight: 15,
    width: 100,
  },
  icon: {
    alignSelf: "flex-start",
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  text: {
    flex: 1,
  },
  title: {
    color: colors.primary,
  },
  description: {
    color: colors.secondary,
    fontSize: 15,
  },
  price: {
    fontSize: 15,
    marginVertical: 5,
  },
  sad: {
    alignItems: "center",
    flex: 1,
  },
});
export default MyListingScreen;

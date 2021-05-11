import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import userApi from "../api/user";
import AppText from "../components/AppText/Text";
import Screen from "../components/Screen";
import colors from "../config/colors";
import { useAuth } from "../context/AuthContext";
import AppActivityIndicator from "../components/AppActivityIndicator";
import listingsApi from "../api/listings";
import { color } from "react-native-reanimated";
import AppTextInput from "../components/TextInput";

function MyListingScreen(props) {
  const { currentUser } = useAuth();
  const [listings, setListings] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getListings();
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
    Alert.alert("Log out", "Are you sure you want to delete the listing?", [
      { text: "Yes", onPress: () => onDelete(listingId) },
      { text: "No" },
    ]);
  };

  const onDelete = async (listingId) => {
    try {
      setLoading(true);
      //console.log(listingId);
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
          {listings ? (
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
    backgroundColor: colors.light,
    flexDirection: "row",
    margin: 10,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-between",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
    marginRight: 15,
  },
  icon: {
    alignSelf: "flex-start",
    flex: 1,
    justifyContent: "center",

    paddingHorizontal: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
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
    flex: 1,
    alignItems: "center",
  },
});
export default MyListingScreen;

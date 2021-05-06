import ViewPager from "@react-native-community/viewpager";
import React from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { FlatList } from "react-native-gesture-handler";
import AppText from "../components/AppText/Text";

import Screen from "../components/Screen";
import AppTextInput from "../components/TextInput";
import colors from "../config/colors";

function DetailListingScreen({ route }) {
  const listing = {
    id: 1,
    title: "New sofa",
    description: "Good quality, used for 2 months",
    price: 100,
    images: [
      require("../assets/background.jpg"),
      require("../assets/logo_transparent.png"),
    ],
    category: "Furniture",
    date: new Date(),
  };
  return (
    <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={150}>
      <View style={styles.imageViewer}>
        <ViewPager style={styles.viewPager} initialPage={0}>
          {listing.images.map((uri) => (
            <View key={uri} style={styles.page}>
              <Image source={uri} key={uri} style={styles.image} />
            </View>
          ))}
        </ViewPager>
      </View>
      <View style={styles.detailsContainer}>
        <View style={styles.subDetailsContainer}>
          <AppText style={styles.title}>{listing.title}</AppText>
          <AppText style={styles.date}>
            {listing.date.toLocaleDateString()}
          </AppText>
        </View>
        <AppText style={styles.price}>{listing.price} €</AppText>
        <AppText style={styles.description}>{listing.description}</AppText>
      </View>
      <View style={styles.profilInfo}>
        <Image style={styles.profil} source={listing.images[0]} />
        <View>
          <AppText style={styles.profilText}>Bertrand </AppText>
          <AppText style={styles.profilText}>bertrand-7@hotmail.com</AppText>
        </View>
      </View>
      <View style={{ marginHorizontal: 10 }}>
        <AppTextInput
          icon="message-minus-outline"
          placeholder="Interested? Send a message..."
          send
          onPress={() => console.log("Message send")}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageViewer: {
    justifyContent: "center",
    height: 300,
  },
  date: {
    color: colors.third,
  },
  detailsContainer: {
    backgroundColor: colors.light,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  viewPager: {
    flex: 1,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: { width: "100%", height: 300, borderRadius: 15 },
  title: {
    color: colors.primary,
    marginBottom: 10,
  },
  description: {
    color: colors.secondary,
  },
  subDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profil: {
    width: 80,
    height: 80,
    borderRadius: 40,
    margin: 10,
  },
  profilInfo: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 15,
    marginHorizontal: 10,
  },
});

export default DetailListingScreen;

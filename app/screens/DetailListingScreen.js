import ViewPager from "@react-native-community/viewpager";
import React from "react";
import { useState, useEffect } from "react";
import { View, StyleSheet, Image, KeyboardAvoidingView } from "react-native";

import AppActivityIndicator from "../components/AppActivityIndicator";
import AppText from "../components/AppText/Text";

import AppTextInput from "../components/TextInput";
import colors from "../config/colors";
import userApi from "../api/user";

function DetailListingScreen({ route }) {
  const listing = route.params;
  const [loading, setLoading] = useState(true);
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    let isMounted = true;
    getInfo();
    return () => {
      isMounted = false;
    };
  }, []);

  const getInfo = async () => {
    setLoading(true);
    try {
      await userApi
        .getUserInfo(listing.publisher)
        .then((doc) => setUserInfo(doc.data()));
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    // console.log(userInfo);
  };
  return (
    <>
      {loading ? (
        <AppActivityIndicator />
      ) : (
        <KeyboardAvoidingView behavior="position" keyboardVerticalOffset={150}>
          <View style={styles.imageViewer}>
            <ViewPager style={styles.viewPager} initialPage={0}>
              {listing.images.map((uri) => (
                <View key={uri} style={styles.page}>
                  <Image source={{ uri: uri }} key={uri} style={styles.image} />
                </View>
              ))}
            </ViewPager>
          </View>
          <View style={styles.detailsContainer}>
            <View style={styles.subDetailsContainer}>
              <AppText style={styles.title}>{listing.title}</AppText>
              <AppText style={styles.datePublication}>
                {listing.createdAt.toDate().toLocaleDateString()}
              </AppText>
            </View>
            <AppText style={styles.price}>{listing.price} €</AppText>
            <AppText style={styles.description}>{listing.description}</AppText>
          </View>
          <View style={styles.profilInfo}>
            <Image
              style={styles.profil}
              source={{ uri: userInfo.profilPicture }}
            />
            <View>
              <AppText style={styles.name}>{userInfo.name} </AppText>
              <AppText style={styles.email}>{userInfo.email}</AppText>
              <AppText style={styles.date}>
                Member since {userInfo.registerAt.toDate().toLocaleDateString()}
              </AppText>
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
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  imageViewer: {
    justifyContent: "center",
    height: 300,
  },
  datePublication: {
    color: colors.third,
  },
  detailsContainer: {
    backgroundColor: colors.light,
    margin: 10,
    padding: 10,
    borderRadius: 15,
  },
  page: {
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  image: { width: "100%", height: 300, borderRadius: 15 },
  title: {
    color: colors.primary,
    marginBottom: 5,
    fontWeight: "bold",
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
  name: {
    fontWeight: "500",
  },
  email: {
    color: colors.medium,
  },
  date: {
    marginTop: 1,
    fontSize: 15,
  },
  viewPager: {
    flex: 1,
  },
});

export default DetailListingScreen;

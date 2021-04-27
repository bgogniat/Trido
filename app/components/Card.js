import React from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Image,
} from "react-native";

import AppText from "./AppText/Text";
import colors from "../config/colors";
import Screen from "./Screen";
import Icon from "./Icon";

function Card({ title, subTitle, price, image, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.price}>{price} €</AppText>
          <AppText style={styles.subTitle}>{subTitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    marginTop: 20,
    marginHorizontal: 20,
    backgroundColor: colors.white,
    borderWidth: 4,
    borderColor: colors.light,

    overflow: "hidden",
  },

  detailsContainer: {
    padding: 10,
  },
  image: {
    width: "100%",
    height: 200,
  },
  price: {
    fontWeight: "bold",
    marginBottom: 7,
  },
  subTitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    color: colors.primary,
    marginBottom: 7,
  },
});

export default Card;

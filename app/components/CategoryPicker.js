import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppText from "./AppText/Text";
import colors from "../config/colors";
import Icon from "./Icon";

function CategoryPicker({
  placeholder = "Category",
  selectedItem,
  onSelectItem,
  width = "60%",
}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [internItem, setInternItem] = useState();

  const items = [
    {
      backgroundColor: "#fc5c65",
      icon: "floor-lamp",
      label: "Furniture",
      value: 1,
    },
    {
      backgroundColor: "#fd9644",
      icon: "car",
      label: "Cars",
      value: 2,
    },
    {
      backgroundColor: "#fed330",
      icon: "camera",
      label: "Cameras",
      value: 3,
    },
    {
      backgroundColor: "#26de81",
      icon: "cards",
      label: "Games",
      value: 4,
    },
    {
      backgroundColor: "#2bcbba",
      icon: "shoe-heel",
      label: "Clothing",
      value: 5,
    },
    {
      backgroundColor: "#45aaf2",
      icon: "basketball",
      label: "Sports",
      value: 6,
    },
    {
      backgroundColor: "#4b7bec",
      icon: "headphones",
      label: "Movies & Music",
      value: 7,
    },
    {
      backgroundColor: "#a55eea",
      icon: "book-open-variant",
      label: "Books",
      value: 8,
    },
    {
      backgroundColor: "#778ca3",
      icon: "application",
      label: "Other",
      value: 9,
    },
  ];
  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
          {selectedItem ? (
            <>
              <Icon
                backgroundColor={internItem.backgroundColor}
                name={internItem.icon}
                size={30}
              />
              <AppText style={styles.text}>{selectedItem}</AppText>
            </>
          ) : (
            <>
              <MaterialCommunityIcons
                name="widgets-outline"
                size={30}
                color={colors.black}
                style={styles.icon}
              />
              <AppText style={styles.placeholder}>{placeholder}</AppText>
            </>
          )}
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            colors={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        visible={modalVisible}
        transparent={true}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.screenBackground}
          onPress={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.modalContainer}>
            <SafeAreaView>
              <FlatList
                data={items}
                keyExtractor={(item) => item.value.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      onSelectItem(item);
                      setInternItem(item);
                    }}
                  >
                    <View style={styles.subContainer}>
                      <Icon
                        backgroundColor={item.backgroundColor}
                        name={item.icon}
                        size={50}
                        style={styles.icon}
                      />

                      <AppText style={styles.label}>{item.label}</AppText>
                    </View>
                  </TouchableOpacity>
                )}
              />
            </SafeAreaView>
          </View>
        </TouchableOpacity>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    marginVertical: 5,
  },

  icon: {
    marginRight: 10,
  },
  placeholder: {
    color: colors.medium,
    flex: 1,
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  textModal: {
    padding: 20,
  },
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.light,
    height: 268,
    width: 300,
    borderRadius: 25,
    padding: 15,
    position: "absolute",
    bottom: 100,
    borderWidth: 5,
    borderColor: colors.white,
  },
  screenBackground: {
    flex: 1,
    alignItems: "center",

    width: "100%",
  },
  subContainer: {
    borderRadius: 25,
    flexDirection: "row",
    marginBottom: 8,
    alignItems: "center",

    marginHorizontal: 50,
  },
  label: {
    marginLeft: 20,
  },
});

export default CategoryPicker;

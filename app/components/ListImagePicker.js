import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, Text } from "react-native";
import ImagePickerInput from "./ImagePickerInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

function ListImagePicker({ imageUris = [], onRemoveImage, onAddImage }) {
  const scrollView = useRef();
  return (
    <View style={styles.screen}>
      <ScrollView
        horizontal
        ref={scrollView}
        onContentSizeChange={() => scrollView.current.scrollToEnd()}
      >
        <View style={styles.container}>
          {imageUris.length == 0 ? (
            <View style={styles.example}>
              <MaterialCommunityIcons
                name="camera"
                size={40}
                color={colors.black}
              />
            </View>
          ) : (
            <>
              {imageUris.map((uri) => (
                <View key={uri} style={styles.image}>
                  <ImagePickerInput
                    imageUri={uri}
                    key={uri}
                    onChangeImage={() => onRemoveImage(uri)}
                  />
                </View>
              ))}
            </>
          )}
        </View>
      </ScrollView>
      <View style={styles.add}>
        <ImagePickerInput onChangeImage={(uri) => onAddImage(uri)} size={60} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
    margin: 10,
  },
  container: {
    flexDirection: "row",
    width: "100%",
    height: 150,
  },
  image: {
    marginRight: 5,
  },
  add: {
    marginTop: 10,
  },
  example: {
    backgroundColor: colors.light,
    height: 150,
    width: 150,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default ListImagePicker;

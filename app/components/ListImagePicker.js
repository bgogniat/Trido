import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import ImagePickerInput from "./ImagePickerInput";

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
                color={colors.medium}
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
        <ImagePickerInput onChangeImage={(uri) => onAddImage(uri)} size={45} />
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
    height: 130,
    width: "100%",
  },
  image: {
    marginRight: 5,
  },
  add: {
    marginTop: 10,
  },
  example: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 15,
    height: 130,
    justifyContent: "center",
    width: 130,
  },
});
export default ListImagePicker;

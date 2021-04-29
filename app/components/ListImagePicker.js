import React, { useRef } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
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
          {imageUris.map((uri) => (
            <View key={uri} style={styles.image}>
              <ImagePickerInput
                imageUri={uri}
                key={uri}
                onChangeImage={() => onRemoveImage(uri)}
              />
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.add}>
        <ImagePickerInput onChangeImage={(uri) => onAddImage(uri)} size={100} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    alignItems: "center",
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
});
export default ListImagePicker;

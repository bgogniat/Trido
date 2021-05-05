import React, { useEffect } from "react";
import {
  Image,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImagePickerInput({ imageUri, onChangeImage, size = 150 }) {
  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!granted) alert("You need permission");
  };

  const handlePress = () => {
    if (!imageUri) pickImage();
    else
      Alert.alert("Delete", "Are you sure to delete this image?", [
        { text: "Yes", onPress: () => onChangeImage(null) },
        { text: "No" },
      ]);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.ALL,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      onChangeImage(result.uri);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={[styles.container, { height: size, width: size }]}>
        {!imageUri && (
          <MaterialCommunityIcons name="plus" size={40} color={colors.white} />
        )}
        {imageUri && <Image source={{ uri: imageUri }} style={styles.image} />}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",

    backgroundColor: colors.lightblue,
    borderRadius: 15,
    overflow: "hidden",
  },

  image: {
    height: "100%",
    width: "100%",
  },
});
export default ImagePickerInput;

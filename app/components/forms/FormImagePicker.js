import React from "react";
import { useFormikContext } from "formik";
import { StyleSheet } from "react-native";
import Text from "../AppText/Text";
import ListImagePicker from "../ListImagePicker";

function FormImagePicker({ name, errors, setFieldValue, touched, values }) {
  const imageUris = values[name];

  const handleAdd = (uri) => {
    setFieldValue(name, [...imageUris, uri]);
  };

  const handleRemove = (uri) => {
    setFieldValue(
      name,
      imageUris.filter((imageUri) => imageUri !== uri)
    );
  };

  return (
    <>
      <ListImagePicker
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
      {touched[name] && <Text style={{ color: "red" }}>{errors[name]}</Text>}
    </>
  );
}

export default FormImagePicker;

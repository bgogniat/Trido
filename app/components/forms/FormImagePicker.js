import React from "react";

import ListImagePicker from "../ListImagePicker";
import Text from "../AppText/Text";

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
      {touched[name] && (
        <Text style={{ color: "red", margin: -12, marginLeft: 10 }}>
          {errors[name]}
        </Text>
      )}
    </>
  );
}

export default FormImagePicker;

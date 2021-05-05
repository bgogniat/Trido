import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";

import AppActivityIndicator from "../components/AppActivityIndicator";
import Button from "../components/Button";
import CategoryPicker from "../components/CategoryPicker";
import FormImagePicker from "../components/forms/FormImagePicker";
import Text from "../components/AppText/Text";
import TextInput from "../components/TextInput";
import Screen from "../components/Screen";
import UploadScreen from "./UploadScreen";

import listingsApi from "../api/listings";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().required().min(1).label("Description"),
  category: Yup.string().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

function AddListingScreen(props) {
  const [isUploading, setIsUploading] = useState(false);
  const [done, setDone] = useState(false);
  const handleSubmit = async (listing, { resetForm }) => {
    setIsUploading(true);
    listingsApi
      .uploadListing(listing)
      .then(() => setIsUploading(false))
      .then(() => setDone(true))
      .catch((error) => Alert.alert(error.message));
    resetForm();
  };

  return (
    <>
      <AppActivityIndicator visible={isUploading} />
      <UploadScreen visible={done} onPress={() => setDone(false)} />
      <Screen style={styles.container}>
        <Formik
          initialValues={{
            title: "",
            price: "",
            description: "",
            category: null,
            images: [],
          }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
            handleChange,
            handleSubmit,
            errors,
            setFieldTouched,
            setFieldValue,
            touched,
            values,
          }) => (
            <>
              <TextInput
                placeholder="Title"
                autoCorrect={false}
                value={values["title"]}
                onBlur={() => setFieldTouched("title")}
                onChangeText={handleChange("title")}
              />
              {touched.title && (
                <Text style={styles.error}>{errors.title}</Text>
              )}
              <CategoryPicker
                selectedItem={values["category"]}
                onSelectItem={(item) => setFieldValue("category", item.label)}
                value={values["category"]}
              />
              {touched.category && (
                <Text style={styles.error}>{errors.category}</Text>
              )}

              <TextInput
                width="30%"
                placeholder="Price"
                value={values["price"]}
                maxLength={8}
                keyboardType="numeric"
                onBlur={() => setFieldTouched("price")}
                onChangeText={handleChange("price")}
              />
              {touched.price && (
                <Text style={styles.error}>{errors.price}</Text>
              )}
              <TextInput
                placeholder="Description"
                value={values["description"]}
                maxLength={40}
                onBlur={() => setFieldTouched("description")}
                onChangeText={handleChange("description")}
              />
              {touched.description && (
                <Text style={styles.error}>{errors.description}</Text>
              )}
              <FormImagePicker
                name="images"
                errors={errors}
                setFieldValue={setFieldValue}
                touched={touched}
                values={values}
              />
              <View style={{ marginVertical: 15 }}>
                <Button title="Publish" onPress={handleSubmit} />
              </View>
            </>
          )}
        </Formik>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  error: {
    color: "red",
    marginLeft: 10,
    margin: -10,
  },
});

export default AddListingScreen;

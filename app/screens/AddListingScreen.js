import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import Screen from "../components/Screen";
import TextInput from "../components/TextInput";
import AppText from "../components/AppText/Text";
import * as Yup from "yup";

import FormImagePicker from "../components/forms/FormImagePicker";
import colors from "../config/colors";
import CategoryPicker from "../components/CategoryPicker";
import Button from "../components/Button";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image"),
});

function AddListingScreen(props) {
  const handleSubmit = async ({ resetForm }) => {
    console.log("Success");
    resetForm();
  };

  return (
    <Screen style={styles.container}>
      <Formik
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        onSubmit={(values) => console.log(values)}
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
              placeholder="Titre"
              autoCorrect={false}
              name="title"
              onBlur={() => setFieldTouched("title")}
              onChangeText={handleChange("title")}
            />
            {touched.title && (
              <AppText style={{ color: "red" }}>{errors.title}</AppText>
            )}
            <CategoryPicker
              selectedItem={values["category"]}
              onSelectItem={(item) => setFieldValue("category", item)}
            />

            <TextInput
              width="30%"
              placeholder="Price"
              maxLength={8}
              keyboardType="numeric"
              onBlur={() => setFieldTouched("price")}
              onChangeText={handleChange("price")}
            />
            <TextInput
              placeholder="Description"
              maxLength={40}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              onBlur={() => setFieldTouched("email")}
              onChangeText={handleChange("email")}
            />
            <FormImagePicker
              name="images"
              errors={errors}
              setFieldValue={setFieldValue}
              touched={touched}
              values={values}
            />
            <Button title="Publish" onPress={handleSubmit} />
          </>
        )}
      </Formik>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});

export default AddListingScreen;

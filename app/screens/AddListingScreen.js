import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Image,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Formik } from "formik";
import Screen from "../components/Screen";

import * as Yup from "yup";

import FormImagePicker from "../components/forms/FormImagePicker";
import colors from "../config/colors";

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
            <FormImagePicker
              name="images"
              errors={errors}
              setFieldValue={setFieldValue}
              touched={touched}
              values={values}
            />
            <View style={styles.input}>
              <MaterialCommunityIcons
                name={"email"}
                size={30}
                colors={colors.medium}
                style={styles.icon}
              />
              <TextInput
                style={{ width: "100%" }}
                icon="mail"
                placeholder="Enter your email"
                autoCapitalize="none"
                autoCompleteType="email"
                keyboardType="email-address"
                onBlur={() => setFieldTouched("email")}
                onChangeText={handleChange("email")}
              />
            </View>
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
  input: {
    flexDirection: "row",
    backgroundColor: colors.light,
    borderRadius: 15,
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
});

export default AddListingScreen;

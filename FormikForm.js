import { Formik } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";
import {
  View,
  TextInput,
  Text,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";

const style = styles();

export const FormikRegForm = ({ setUserName, setUserMail, setAvatarUri }) => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formikValidationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too Short!")
      .max(50, "Too Long!")
      .required("Name is required"),
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email address is required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validationSchema={formikValidationSchema}
      onSubmit={(values) => {
        setUserName(values.name);
        setUserMail(values.email);
        setAvatarUri();
        return navigation.navigate("Home");
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <>
          <TextInput
            name="name"
            style={style.input}
            onChangeText={handleChange("name")}
            value={values.name}
            placeholder="Ваше ім'я"
          />
          <Text style={style.error}>{errors.name}</Text>
          <TextInput
            name="email"
            style={style.input}
            placeholder="Адреса електронної пошти"
            onChangeText={handleChange("email")}
            value={values.email}
          />
          <Text style={style.error}>{errors.email}</Text>
          <View>
            <TextInput
              name="password"
              style={style.input}
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Пароль"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={style.iconContainer}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={style.error}>{errors.password}</Text>
          <TouchableHighlight style={style.button} onPress={handleSubmit}>
            <Text style={style.btnText}>Зареєстуватися</Text>
          </TouchableHighlight>
        </>
      )}
    </Formik>
  );
};

export const FormikLogForm = () => {
  const navigation = useNavigation();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const formikValidationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Please enter a valid email")
      .required("Email address is required"),
    password: Yup.string()
      .min(6, "Too Short!")
      .required("Password is required"),
  });

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={formikValidationSchema}
      onSubmit={(values) => {
        console.log(values);
        return navigation.navigate("Home");
      }}
    >
      {({ handleSubmit, handleChange, values, errors }) => (
        <>
          <TextInput
            name="email"
            style={style.input}
            placeholder="Адреса електронної пошти"
            onChangeText={handleChange("email")}
            value={values.email}
          />
          <Text style={style.error}>{errors.email}</Text>
          <View>
            <TextInput
              name="password"
              style={style.input}
              onChangeText={handleChange("password")}
              value={values.password}
              placeholder="Пароль"
              secureTextEntry={!passwordVisible}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={style.iconContainer}
            >
              <Ionicons
                name={passwordVisible ? "eye-off" : "eye"}
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </View>
          <Text style={style.error}>{errors.password}</Text>
          <TouchableHighlight style={style.button} onPress={handleSubmit}>
            <Text style={style.btnText}>Увійти</Text>
          </TouchableHighlight>
        </>
      )}
    </Formik>
  );
};

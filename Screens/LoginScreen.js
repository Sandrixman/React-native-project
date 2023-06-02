import { useFonts } from "expo-font";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";

export default function Login() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Thin.otf"),
  });

  const [mailInpyt, setMailInpyt] = useState("");
  const [passwordInpyt, setPasswordInpyt] = useState("");

  const navigation = useNavigation();

  const keyboardAvoidingContainer = 2;
  const formPadding = 20;
  const loginStyle = styles(keyboardAvoidingContainer, formPadding);

  if (!fontsLoaded) {
    return null;
  }

  const onEntry = () => {
    console.log(`Name: ${mailInpyt}, mail: ${passwordInpyt}`);
    return navigation.navigate("Home");
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/PhotoBG.jpg")}
      resizeMode="cover"
    >
      <View style={{ flex: 1.4 }}></View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : null}
        style={loginStyle.keyboardAvoidingContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={loginStyle.form}>
            <Text style={loginStyle.title}>Увійти</Text>
            <TextInput
              style={loginStyle.input}
              onChangeText={setMailInpyt}
              value={mailInpyt}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={loginStyle.input}
              onChangeText={setPasswordInpyt}
              value={passwordInpyt}
              placeholder="Пароль"
            />
            <TouchableOpacity style={loginStyle.button} onPress={onEntry}>
              <Text style={loginStyle.btnText}>Увійти</Text>
            </TouchableOpacity>
            <Text
              style={{ textAlign: "center", marginTop: 30 }}
              onPress={() => navigation.navigate("Registration")}
            >
              Немає акаунту? Зареєструватися
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

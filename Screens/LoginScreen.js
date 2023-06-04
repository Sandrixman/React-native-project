import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FormikLogForm } from "../FormikForm";

export default function Login() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Thin.otf"),
  });

  const navigation = useNavigation();

  const keyboardAvoidingContainer = 2;
  const formPadding = 20;
  const loginStyle = styles(keyboardAvoidingContainer, formPadding);

  if (!fontsLoaded) {
    return null;
  }

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
            <FormikLogForm />
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

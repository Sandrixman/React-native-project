import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Thin.otf"),
  });

  const [mailInpyt, setMailInpyt] = useState("");
  const [passwordInpyt, setPasswordInpyt] = useState("");

  const navigation = useNavigation();

  if (!fontsLoaded) {
    return null;
  }

  const onButton = () => {
    console.log(`Name: ${mailInpyt}, mail: ${passwordInpyt}`);
  };

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/PhotoBG.jpg")}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}></View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : null}
        style={styles.keyboardAvoidingContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.form}>
            <View style={styles.absoluteBox}>
              <View style={styles.avatar}></View>
            </View>
            <Text style={styles.title}>Вхід</Text>
            <TextInput
              style={styles.input}
              onChangeText={setMailInpyt}
              value={mailInpyt}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={styles.input}
              onChangeText={setPasswordInpyt}
              value={passwordInpyt}
              placeholder="Пароль"
            />
            <TouchableOpacity style={styles.button} onPress={onButton}>
              <Text style={styles.btnText}>Увійти</Text>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  keyboardAvoidingContainer: {
    flex: 2,
  },
  form: {
    flex: 2,
    paddingTop: 80,
    paddingHorizontal: 16,
    backgroundColor: "white",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  absoluteBox: {
    position: "absolute",
    left: 0,
    top: -60,
    width: "100%",
  },
  avatar: {
    alignSelf: "center",
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: "#F6F6F6",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    marginTop: 20,
  },
  input: {
    height: 40,
    marginVertical: 8,
    padding: 10,
    borderColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#F6F6F6",
  },
  button: {
    width: "100%",
    height: 50,
    borderRadius: 50,
    marginTop: 30,
    backgroundColor: "#FF6C00",
    justifyContent: "center",
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

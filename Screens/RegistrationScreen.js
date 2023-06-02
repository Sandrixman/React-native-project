import { useFonts } from "expo-font";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import { chooseAvatar } from "../utils/imagePicker";
import { AntDesign } from "@expo/vector-icons";
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
  Image,
} from "react-native";

export default function Registration() {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Thin.otf"),
  });

  const [nameInpyt, setNameInpyt] = useState("");
  const [mailInpyt, setMailInpyt] = useState("");
  const [passwordInpyt, setPasswordInpyt] = useState("");
  const [avatarUri, setAvatarUri] = useState(null);

  const navigation = useNavigation();

  const keyboardAvoidingContainer = 3.5;
  const formPadding = 60;
  const regStyle = styles(keyboardAvoidingContainer, formPadding);

  if (!fontsLoaded) {
    return null;
  }

  const onEntry = () => {
    console.log(`Name: ${mailInpyt}, mail: ${passwordInpyt}`);
    return navigation.navigate("Home");
  };

  const removeAvatar = () => {
    setAvatarUri(null);
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/PhotoBG.jpg")}
      resizeMode="cover"
    >
      <View style={{ flex: 1 }}></View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : null}
        style={regStyle.keyboardAvoidingContainer}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={regStyle.form}>
            <View style={regStyle.absoluteBox}>
              <Image style={regStyle.avatar} source={{ uri: avatarUri }} />
              {avatarUri ? (
                <TouchableOpacity onPress={removeAvatar}>
                  <AntDesign
                    style={regStyle.setImg}
                    name="closecircleo"
                    color="grey"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  onPress={() => chooseAvatar({ setAvatarUri })}
                >
                  <AntDesign
                    style={regStyle.setImg}
                    name="pluscircleo"
                    color="#FF6C00"
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text style={regStyle.title}>Реєстрація</Text>
            <TextInput
              style={regStyle.input}
              onChangeText={setNameInpyt}
              value={nameInpyt}
              placeholder="Ваше ім'я"
            />
            <TextInput
              style={regStyle.input}
              onChangeText={setMailInpyt}
              value={mailInpyt}
              placeholder="Адреса електронної пошти"
            />
            <TextInput
              style={regStyle.input}
              onChangeText={setPasswordInpyt}
              value={passwordInpyt}
              placeholder="Пароль"
            />
            <TouchableOpacity style={regStyle.button} onPress={onEntry}>
              <Text style={regStyle.btnText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <Text
              style={{ textAlign: "center", marginTop: 30 }}
              onPress={() => navigation.navigate("Login")}
            >
              Вже є акаунт? Увійти
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

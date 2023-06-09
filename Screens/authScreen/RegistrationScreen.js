import { useFonts } from "expo-font";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "../../appStyle";
import { FormikRegForm } from "../../components/FormikForm";
import { chooseAvatar } from "../../utils/imagePicker";
import { AntDesign } from "@expo/vector-icons";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  Image,
} from "react-native";

export default function Registration({
  setUserName,
  setUserMail,
  getAvatarUri,
}) {
  const [fontsLoaded] = useFonts({
    "Inter-Black": require("../assets/fonts/Inter-Thin.otf"),
  });

  const [imageUri, setImageUri] = useState(null);

  const navigation = useNavigation();

  const formPadding = 60;
  const regStyle = styles(formPadding);

  if (!fontsLoaded) {
    return null;
  }

  const removeAvatar = () => {
    setImageUri(null);
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
        style={{ flex: 3.5 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={regStyle.form}>
            <View style={regStyle.absoluteBox}>
              <Image style={regStyle.avatar} source={{ uri: imageUri }} />
              {imageUri ? (
                <TouchableOpacity onPress={removeAvatar}>
                  <AntDesign
                    style={regStyle.setImg}
                    name="closecircleo"
                    color="grey"
                  />
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={() => chooseAvatar({ setImageUri })}>
                  <AntDesign
                    style={regStyle.setImg}
                    name="pluscircleo"
                    color="#FF6C00"
                  />
                </TouchableOpacity>
              )}
            </View>
            <Text style={regStyle.title}>Реєстрація</Text>
            <FormikRegForm
              setUserName={setUserName}
              setUserMail={setUserMail}
              setAvatarUri={() => getAvatarUri(imageUri)}
            />
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

import { useEffect, useState } from "react";
import MobCamera from "../utils/camera";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../style";
import * as Location from "expo-location";

export function CreatePosts() {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [isFormValid, setFormValid] = useState(false);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  const style = styles();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      setLocation(await Location.getCurrentPositionAsync({}));
    })();
  }, []);

  useEffect(() => {
    setFormValid(name !== "" && place !== "");
  }, [name, place]);

  const createPost = () => {
    console.log("click");
  };

  return (
    <View style={style.container}>
      <MobCamera />

      <TextInput
        style={style.postInput}
        onChangeText={setName}
        value={name}
        placeholder="Назва..."
      />
      <TextInput
        style={style.postInput}
        onChangeText={setPlace}
        value={place}
        placeholder="Місцевість..."
      />
      <TouchableOpacity
        style={[style.button, !isFormValid && style.disabledButton]}
        onPress={createPost}
        disabled={!isFormValid}
      >
        <Text style={[style.btnText, !isFormValid && style.disabledText]}>
          Опубліковати
        </Text>
      </TouchableOpacity>
    </View>
  );
}

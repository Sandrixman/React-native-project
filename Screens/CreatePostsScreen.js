import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import uuid from "react-native-uuid";
import MobCamera from "../Components/Camera";
import { styles } from "../style";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, TextInput } from "react-native";

export function CreatePosts({ addPost }) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [isFormValid, setFormValid] = useState(false);

  const style = styles();
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        alert("Permission to access location was denied");
        return;
      }

      setLocation(await Location.getCurrentPositionAsync({}));
    })();
  }, []);

  useEffect(() => {
    setFormValid(name !== "" && place !== "" && photo !== null);
  }, [name, place, photo]);

  const onCreatePost = () => {
    addPost({ id: uuid.v4(), name, place, photo, location });
    setName("");
    setPlace("");
    setPhoto(null);
    navigation.navigate("Posts");
  };

  return (
    <View style={style.container}>
      <MobCamera setPhoto={setPhoto} photo={photo} />

      <TextInput
        style={style.postInput}
        onChangeText={setName}
        value={name}
        placeholder="Назва..."
      />
      <View>
        <TextInput
          style={style.locationInput}
          onChangeText={setPlace}
          value={place}
          placeholder="Місцевість..."
        />
        <EvilIcons
          style={style.locationIcon}
          name="location"
          size={28}
          color="black"
        />
      </View>
      <TouchableOpacity
        style={[style.button, !isFormValid && style.disabledButton]}
        onPress={onCreatePost}
        disabled={!isFormValid}
      >
        <Text style={[style.btnText, !isFormValid && style.disabledText]}>
          Опубліковати
        </Text>
      </TouchableOpacity>
    </View>
  );
}

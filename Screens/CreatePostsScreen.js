import { useEffect, useState } from "react";
import { chooseAvatar } from "../utils/imagePicker";
import { Ionicons } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { styles } from "../style";

export function CreatePosts() {
  const [photoUri, setPhotoUri] = useState(null);
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [isFormValid, setFormValid] = useState(false);

  const style = styles();

  useEffect(() => {
    setFormValid(name !== "" && place !== "" && photoUri !== null);
  }, [name, place, photoUri]);

  const createPost = () => {
    console.log("click");
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => chooseAvatar({ setPhotoUri })}>
        <Image style={style.postPhoto} source={{ uri: photoUri }} />
        {photoUri ? (
          <Text style={style.photoText}>Редагувати фото</Text>
        ) : (
          <Text style={style.photoText}>Завантажте фото</Text>
        )}
      </TouchableOpacity>
      <View style={[style.photoIconWrapper, photoUri && style.activePhotoIcon]}>
        <Ionicons
          name="md-camera"
          style={[style.photoIcon, photoUri && style.activePhotoIcon]}
        />
      </View>
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

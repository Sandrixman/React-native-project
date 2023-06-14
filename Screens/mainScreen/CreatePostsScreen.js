import { useEffect, useState, useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from "expo-location";
import uuid from "react-native-uuid";
import MobCamera from "../../components/Camera";
import { styles } from "../../appStyle";
import { EvilIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Keyboard,
  Platform,
} from "react-native";
import { findNodeHandle } from "react-native";

export function CreatePosts({ addPost }) {
  const [name, setName] = useState("");
  const [place, setPlace] = useState("");
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);
  const [isFormValid, setFormValid] = useState(false);

  const style = styles();
  const navigation = useNavigation();

  const scrollViewRef = useRef(null);
  const postName = useRef(null);
  const placeInput = useRef(null);
  const scrollToInput = (node) => {
    scrollViewRef.current.scrollTo({ y: node, animated: true });
  };

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
    navigation.navigate("PostsScreen");
  };

  return (
    <View style={style.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <ScrollView
          ref={scrollViewRef}
          showsVerticalScrollIndicator={false}
          onPress={Keyboard.dismiss}
        >
          <View style={{ flexGrow: 1 }}>
            <MobCamera setPhoto={setPhoto} photo={photo} />
            <TextInput
              style={style.postInput}
              onChangeText={setName}
              value={name}
              placeholder="Назва..."
              onFocus={() => {
                const inputNode = findNodeHandle(postName.current);
                scrollToInput(inputNode);
              }}
              ref={postName}
            />
            <View>
              <TextInput
                style={style.locationInput}
                onChangeText={setPlace}
                value={place}
                placeholder="Місцевість..."
                onFocus={() => {
                  const inputNode = findNodeHandle(placeInput.current);
                  scrollToInput(inputNode);
                }}
                ref={placeInput}
              />
              <EvilIcons
                style={style.locationIcon}
                name="location"
                size={28}
                color="black"
              />
            </View>
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
        </ScrollView>
      </KeyboardAvoidingView>
      <TouchableOpacity style={style.deleteBtn}>
        <MaterialCommunityIcons
          name="delete-forever-outline"
          size={28}
          color="#DADADA"
        />
      </TouchableOpacity>
    </View>
  );
}

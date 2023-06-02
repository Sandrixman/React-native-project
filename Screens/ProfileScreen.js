import { useState } from "react";
import { chooseAvatar } from "../utils/imagePicker";
import { styles } from "../style";
import { AntDesign } from "@expo/vector-icons";
import { View, Image, TouchableOpacity, ImageBackground } from "react-native";

export function Profile() {
  const [photoUri, setPhotoUri] = useState(null);

  const style = styles();

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/PhotoBG.jpg")}
      resizeMode="cover"
    >
      <View style={{ flex: 0.3 }}></View>
      <View style={style.container}>
        <View style={style.absoluteBox}>
          <Image style={style.avatar} source={{ uri: photoUri }} />
          {photoUri ? (
            <TouchableOpacity onPress={removeAvatar}>
              <AntDesign
                style={style.setImg}
                name="closecircleo"
                color="grey"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => chooseAvatar({ setPhotoUri })}>
              <AntDesign
                style={style.setImg}
                name="pluscircleo"
                color="#FF6C00"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ImageBackground>
  );
}

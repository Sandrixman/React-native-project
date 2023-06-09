import { chooseAvatar } from "../../utils/imagePicker";
import { styles } from "../../appStyle";
import { AntDesign } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

export function Profile({ userName, avataUri, setImageUri }) {
  const style = styles();

  const removeAvatar = () => {
    setImageUri(null);
  };

  return (
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../assets/PhotoBG.jpg")}
      resizeMode="cover"
    >
      <View style={{ flex: 0.3 }}></View>
      <View style={style.container}>
        <View style={style.absoluteBox}>
          <Image style={style.avatar} source={{ uri: avataUri }} />
          {avataUri ? (
            <TouchableOpacity onPress={removeAvatar}>
              <AntDesign
                style={style.setImg}
                name="closecircleo"
                color="grey"
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => chooseAvatar({ setImageUri })}>
              <AntDesign
                style={style.setImg}
                name="pluscircleo"
                color="#FF6C00"
              />
            </TouchableOpacity>
          )}
        </View>
        <Text style={style.profileTitle}>{userName}</Text>
      </View>
    </ImageBackground>
  );
}

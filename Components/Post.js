import { styles } from "../style";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text, Image } from "react-native";

const style = styles();

export function Post({ post }) {
  return (
    <View style={style.postWrapper}>
      <Image style={style.cameraBox} source={{ uri: post.photo }} />
      <Text style={style.fontMiddle}>{post.name}</Text>
      <View style={style.postInfo}>
        <EvilIcons name="comment" size={24} color="black" />
        <View style={style.postInfo}>
          <EvilIcons name="location" size={28} color="black" />
          <Text style={style.fontSmall}>{post.place}</Text>
        </View>
      </View>
    </View>
  );
}

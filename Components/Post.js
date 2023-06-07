import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import { EvilIcons } from "@expo/vector-icons";
import { View, Text, Image, TouchableOpacity } from "react-native";

const style = styles();

export function Post({ post }) {
  const navigation = useNavigation();

  return (
    <View style={style.postWrapper}>
      <Image style={style.postImg} source={{ uri: post.photo }} />
      <Text style={style.fontMiddle}>{post.name}</Text>
      <View style={style.postInfo}>
        <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
          <EvilIcons name="comment" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={style.postLocation}
          onPress={() => navigation.navigate("MapScreen")}
        >
          <EvilIcons name="location" size={28} color="black" />
          <Text style={style.fontSmall}>{post.place}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

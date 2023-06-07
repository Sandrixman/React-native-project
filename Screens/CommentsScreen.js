import { styles } from "../style";
import { View, Text, Image } from "react-native";

export function Comments({ posts }) {
  const style = styles();

  return (
    <View style={style.container}>
      <Image style={style.postImg} source={{ uri: posts.photo }} />
    </View>
  );
}

import { styles } from "../../appStyle";
import { View, Text, Image } from "react-native";

export function Comments({ photo }) {
  const style = styles();

  return (
    <View style={style.container}>
      <Image style={style.postImg} source={{ uri: photo }} />
    </View>
  );
}

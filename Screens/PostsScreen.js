import { styles } from "../style";
import { View, Text, Image } from "react-native";

export function Posts({ userName, userMail, photoUri }) {
  const style = styles();

  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={style.comentsAvatar} source={{ uri: photoUri }} />
        <View>
          <Text style={{ marginLeft: 10, fontWeight: 700, fontSize: 13 }}>
            {userName}
          </Text>
          <Text style={{ marginLeft: 10, fontSize: 11 }}>{userMail}</Text>
        </View>
      </View>
    </View>
  );
}

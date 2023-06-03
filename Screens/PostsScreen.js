import { styles } from "../style";
import { View, Text, Image } from "react-native";

export function Posts({ userName, userMail, avataUri }) {
  const style = styles();

  return (
    <View style={style.container}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image style={style.comentsAvatar} source={{ uri: avataUri }} />
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

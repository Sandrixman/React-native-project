import { Post } from "../Components/Post";
import { styles } from "../style";
import { SafeAreaView, ScrollView, View, Text, Image } from "react-native";

const style = styles();

export function Posts({ userName, userMail, avataUri, posts }) {
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
      <ScrollView style={style.test}>
        <View>
          {posts.length > 0 &&
            posts.map((post) => (
              <View key={post.id}>
                <Post post={post} />
              </View>
            ))}
        </View>
      </ScrollView>
    </View>
  );
}

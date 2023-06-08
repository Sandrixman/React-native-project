import { useNavigation } from "@react-navigation/native";
import { styles } from "../style";
import { EvilIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  Image,
  Pressable,
  SafeAreaView,
  FlatList,
} from "react-native";

const style = styles();

export function Posts({ posts, setLocation, setPhoto }) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <FlatList
        style={style.postsWrapper}
        showsVerticalScrollIndicator={false}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={style.postConteiner}>
            <Image style={style.postImg} source={{ uri: item.photo }} />
            <Text style={style.fontMiddle}>{item.name}</Text>
            <View style={style.postInfo}>
              <Pressable
                style={style.row}
                onPress={() => {
                  setPhoto(item.photo);
                  navigation.navigate("Comments");
                }}
              >
                <EvilIcons name="comment" size={24} color="black" />
                <Text>0</Text>
              </Pressable>
              <Pressable
                style={style.row}
                onPress={() => {
                  setLocation(item.location);
                  navigation.navigate("MapScreen");
                }}
              >
                <EvilIcons name="location" size={28} color="black" />
                <Text style={style.fontSmall}>{item.place}</Text>
              </Pressable>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

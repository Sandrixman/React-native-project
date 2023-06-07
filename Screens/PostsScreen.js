import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather } from "@expo/vector-icons";
import { styles } from "../style";
import { ScrollView, View, Text, Image, TouchableOpacity } from "react-native";
import { Post } from "../Components/Post";
import { MapScreen } from "./MapScreen";
import { Comments } from "./CommentsScreen";

const PostsStack = createStackNavigator();
const style = styles();

export function PostsScreen({ userName, userMail, avataUri, posts }) {
  const navigation = useNavigation();

  return (
    <PostsStack.Navigator initialRouteName="Posts">
      <PostsStack.Screen
        name="Posts"
        options={{
          headerShown: false,
        }}
      >
        {() => (
          <View style={style.container}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingBottom: 16,
              }}
            >
              <Image style={style.comentsAvatar} source={{ uri: avataUri }} />
              <View>
                <Text style={{ marginLeft: 10, fontWeight: 700, fontSize: 13 }}>
                  {userName}
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 11 }}>{userMail}</Text>
              </View>
            </View>
            <ScrollView>
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
        )}
      </PostsStack.Screen>
      <PostsStack.Screen
        name="Comments"
        options={{
          title: "Коментарі",
          headerTitleStyle: style.fontMiddle,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Feather
                name="arrow-left"
                size={24}
                color="black"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),
        }}
      >
        {() => <Comments posts={posts} />}
      </PostsStack.Screen>
      <PostsStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Мапа",
          headerTitleStyle: style.fontMiddle,
          headerTitleAlign: "center",
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Feather
                name="arrow-left"
                size={24}
                color="black"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),
        }}
      />
    </PostsStack.Navigator>
  );
}

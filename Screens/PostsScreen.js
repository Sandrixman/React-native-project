import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../style";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Posts } from "../Components/Posts";
import { MapScreen } from "./MapScreen";
import { Comments } from "./CommentsScreen";

const PostsStack = createStackNavigator();
const style = styles();

export function PostsScreen({ userName, userMail, avataUri, posts }) {
  const [location, setLocation] = useState("");
  const [photo, setPhoto] = useState("");
  const navigation = useNavigation();
  const onLogout = () => navigation.navigate("Login");

  return (
    <PostsStack.Navigator
      initialRouteName="Posts"
      screenOptions={() => ({
        headerStyle: {
          borderBottomColor: "grey",
          borderBottomWidth: 1,
        },
      })}
    >
      <PostsStack.Screen
        name="Posts"
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: style.fontMiddle,
          headerRight: () => (
            <TouchableOpacity onPress={onLogout}>
              <MaterialCommunityIcons
                name="exit-run"
                size={24}
                color="grey"
                marginRight={20}
              />
            </TouchableOpacity>
          ),
        }}
      >
        {() => (
          <View style={style.container}>
            <View style={style.profileInfo}>
              <Image style={style.comentsAvatar} source={{ uri: avataUri }} />
              <View>
                <Text style={{ marginLeft: 10, fontWeight: 700, fontSize: 13 }}>
                  {userName}
                </Text>
                <Text style={{ marginLeft: 10, fontSize: 11 }}>{userMail}</Text>
              </View>
            </View>
            <Posts
              posts={posts}
              setPhoto={setPhoto}
              setLocation={setLocation}
            />
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
        {() => <Comments photo={photo} />}
      </PostsStack.Screen>
      <PostsStack.Screen
        name="MapScreen"
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
      >
        {() => <MapScreen location={location} />}
      </PostsStack.Screen>
    </PostsStack.Navigator>
  );
}

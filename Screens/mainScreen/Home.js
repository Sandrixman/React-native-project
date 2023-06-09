import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../../appStyle";
import { CreatePosts } from "./CreatePostsScreen";
import { Profile } from "./ProfileScreen";
import { PostsScreen } from "./PostsScreen";

const Tabs = createBottomTabNavigator();
const style = styles();

const Home = ({ userName, userMail, avataUri, setAvatarUri }) => {
  const [posts, setPosts] = useState([]);

  const navigation = useNavigation();

  const addPost = (obj) => {
    setPosts((prevPosts) => [...prevPosts, obj]);
  };

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, focused }) => {
          let iconName;
          if (route.name === "Profile") {
            iconName = "user";
          } else if (route.name === "PostsScreen") {
            iconName = "grid";
          } else if (route.name === "CreatePosts") {
            return focused ? (
              <View style={style.addBtn} backgroundColor="#F6F6F6">
                <MaterialCommunityIcons
                  name="delete-forever-outline"
                  size={28}
                  color="#DADADA"
                />
              </View>
            ) : (
              <View style={style.addBtn} backgroundColor="#FF6C00">
                <Feather name="plus" size={20} color="white" />
              </View>
            );
          }
          return (
            <Feather
              name={iconName}
              size={24}
              color={color}
              focused={focused}
            />
          );
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          height: 80,
          borderTopColor: "grey",
          borderTopWidth: 1,
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        options={{
          headerShown: false,
        }}
      >
        {() => (
          <PostsScreen
            userName={userName}
            userMail={userMail}
            avataUri={avataUri}
            posts={posts}
          />
        )}
      </Tabs.Screen>
      <Tabs.Screen
        name="CreatePosts"
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: style.fontMiddle,
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
        {() => <CreatePosts addPost={addPost} />}
      </Tabs.Screen>
      <Tabs.Screen
        name="Profile"
        options={{
          headerShown: false,
        }}
      >
        {() => (
          <Profile
            userName={userName}
            avataUri={avataUri}
            setImageUri={setAvatarUri}
          />
        )}
      </Tabs.Screen>
    </Tabs.Navigator>
  );
};

export default Home;

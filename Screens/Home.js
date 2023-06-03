import { useNavigation } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableOpacity } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../style";
import { CreatePosts } from "./CreatePostsScreen";
import { Profile } from "./ProfileScreen";
import { Posts } from "./PostsScreen";

const Tabs = createBottomTabNavigator();
const style = styles();

const Home = ({ userName, userMail, avataUri, setAvatarUri }) => {
  const navigation = useNavigation();

  const onLogout = () => navigation.navigate("Login");

  return (
    <Tabs.Navigator
      initialRouteName="Posts"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Profile") {
            return <Feather name="user" size={20} color="black" />;
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
          } else if (route.name === "Posts") {
            return <Ionicons name="grid-outline" size={24} color="black" />;
          }
          return null;
        },
        tabBarLabel: "",
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          height: 80,
          borderTopColor: "grey",
          borderTopWidth: 1,
        },
        headerStyle: {
          borderBottomColor: "grey",
          borderBottomWidth: 1,
        },
        tabBarVisible: route.name !== "CreatePosts",
      })}
    >
      <Tabs.Screen
        name="Posts"
        options={{
          title: "Публікації",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
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
          <Posts userName={userName} userMail={userMail} avataUri={avataUri} />
        )}
      </Tabs.Screen>
      <Tabs.Screen
        name="CreatePosts"
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Posts")}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),
        }}
      >
        {() => <CreatePosts />}
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

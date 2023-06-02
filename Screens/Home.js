import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { View, TouchableOpacity } from "react-native";
import { Ionicons, Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { styles } from "../style";

import { CreatePosts } from "./CreatePostsScreen";
import { Comments } from "./CommentsScreen";
import { Profile } from "./ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const navigation = useNavigation();

  const style = styles();

  const onLogout = () => navigation.navigate("Login");

  return (
    <Tabs.Navigator
      initialRouteName="Comments"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === "Profile") {
            return <Feather name="user" size={20} color="black" />;
          } else if (route.name === "CreatePosts") {
            return !focused ? (
              <View style={style.addBtn}>
                <Feather name="plus" size={20} color="white" />
              </View>
            ) : (
              <View style={style.inactiveAddBtn}>
                <MaterialCommunityIcons
                  name="delete-forever-outline"
                  size={28}
                  color="#DADADA"
                />
              </View>
            );
          } else if (route.name === "Comments") {
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
        name="EmptyTabLeft"
        component={View}
        options={{
          tabBarIcon: () => null,
        }}
      />
      <Tabs.Screen
        name="Comments"
        component={Comments}
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
      />
      <Tabs.Screen
        name="CreatePosts"
        component={CreatePosts}
        options={{
          title: "Створити публікацію",
          headerTitleAlign: "center",
          headerTitleStyle: {
            fontWeight: 500,
            fontSize: 17,
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
              <Ionicons
                name="arrow-back"
                size={24}
                color="black"
                marginLeft={20}
              />
            </TouchableOpacity>
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="EmptyTabRight"
        component={View}
        options={{
          tabBarIcon: () => null,
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;

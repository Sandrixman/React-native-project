import "react-native-gesture-handler";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "./Screens/RegistrationScreen";
import Login from "./Screens/LoginScreen";

const MainStack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Login">
        <MainStack.Screen name="Registration" component={Registration} />
        <MainStack.Screen name="Login" component={Login} />
        {/* <MainStack.Screen
          name="Home"
          component={Home}
          options={{ title: "Start screen" }}
        /> */}
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

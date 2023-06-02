import "react-native-gesture-handler";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Registration from "./Screens/RegistrationScreen";
import Login from "./Screens/LoginScreen";
import Home from "./Screens/Home";

const MainStack = createStackNavigator();

export default function App() {
  const [userName, setUserName] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [photoUri, setPhotoUri] = useState(null);

  return (
    <NavigationContainer>
      <MainStack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <MainStack.Screen name="Registration">
          {() => (
            <Registration
              setUserName={setUserName}
              setUserMail={setUserMail}
              getPhotoUri={setPhotoUri}
            />
          )}
        </MainStack.Screen>
        <MainStack.Screen name="Login" component={Login} />
        <MainStack.Screen name="Home">
          {() => (
            <Home userName={userName} userMail={userMail} photoUri={photoUri} />
          )}
        </MainStack.Screen>
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

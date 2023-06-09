import "react-native-gesture-handler";
import { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { persistor, store } from "./redux/store";
import Registration from "./screens/RegistrationScreen";
import Login from "./screens/LoginScreen";
import Home from "./screens/Home";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

const MainStack = createStackNavigator();

export default function App() {
  const [userName, setUserName] = useState(null);
  const [userMail, setUserMail] = useState(null);
  const [avataUri, setAvatarUri] = useState(null);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                  getAvatarUri={setAvatarUri}
                />
              )}
            </MainStack.Screen>
            <MainStack.Screen name="Login" component={Login} />
            <MainStack.Screen name="Home">
              {() => (
                <Home
                  userName={userName}
                  userMail={userMail}
                  avataUri={avataUri}
                  setAvatarUri={setAvatarUri}
                />
              )}
            </MainStack.Screen>
          </MainStack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

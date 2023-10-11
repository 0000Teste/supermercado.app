import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Login } from "../screens/Login";

export type AuthRoutes = {
  login: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="login"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Screen name="login" component={Login} />
    </Navigator>
  );
}

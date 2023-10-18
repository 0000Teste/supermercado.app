import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";

import { Inicio } from "../screens/Inicio";
import { Cadastro } from "../screens/Cadastro";
import { Login } from "../screens/Login";
import { Compras } from "../screens/Compras";

export type AuthRoutes = {
  inicio: undefined;
  cadastro: undefined;
  login: undefined;
  compras: undefined;
};

export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator
      initialRouteName="inicio"
      screenOptions={{ headerShown: false, animation: "fade" }}
    >
      <Screen name="inicio" component={Inicio} />
      <Screen name="cadastro" component={Cadastro} />
      <Screen name="login" component={Login} />
      <Screen name="compras" component={Compras} />
    </Navigator>
  );
}

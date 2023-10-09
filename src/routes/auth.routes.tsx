// import {
//     createNativeStackNavigator,
//     NativeStackNavigationProp,
//   } from "@react-navigation/native-stack";

//   import { Login } from "@/screens/Login";
//   import { CompleteSignUp } from "@screens/CompleteSignUp";

//   export type AuthRoutes = {
//     splash: undefined;
//     signIn: undefined;
//     signUp: undefined;
//     completeSignUp: undefined;
//   };

//   export type AuthNavigationRoutesProps = NativeStackNavigationProp<AuthRoutes>;

//   const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

//   export function AuthRoutes() {
//     return (
//       <Navigator
//         initialRouteName="splash"
//         screenOptions={{ headerShown: false, animation: "fade" }}
//       >
//         <Screen name="splash" component={Splash} />
//         <Screen name="signIn" component={SignIn} />
//         <Screen name="signUp" component={SignUp} />
//         <Screen name="completeSignUp" component={CompleteSignUp} />
//       </Navigator>
//     );
//   }

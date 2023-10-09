// import {
//     createBottomTabNavigator,
//     BottomTabNavigationProp,
//   } from "@react-navigation/bottom-tabs";

//   import { Entypo } from "@expo/vector-icons";
//   import { Feather } from "@expo/vector-icons";
//   import { Ionicons } from "@expo/vector-icons";
//   import { Octicons } from "@expo/vector-icons";
//   import { MaterialCommunityIcons } from "@expo/vector-icons";

//   import { Feed } from "@screens/Feed";
//   import { Search } from "@screens/Search";
//   import { Profile } from "@screens/Profile";
//   import { Meditate } from "@screens/Meditate";
//   import { WritePost } from "@screens/WritePost";
//   import { UserSearch } from "@screens/UserSearch";

//   type AppRoutes = {
//     feed: undefined;
//     search: undefined;
//     writePost: undefined;
//     userSearch: undefined;
//     meditate: undefined;
//     profile: undefined;
//   };

//   export type AppNavigationRoutesProps = BottomTabNavigationProp<AppRoutes>;

//   const { Navigator, Screen } = createBottomTabNavigator<AppRoutes>();

//   export function AppRoutes() {
//     return (
//       <Navigator
//         sceneContainerStyle={{ backgroundColor: "transparent" }}
//         initialRouteName="feed"
//         backBehavior="history"
//         screenOptions={{
//           headerShown: false,
//           tabBarShowLabel: false,
//           tabBarActiveTintColor: "#222222",
//           tabBarInactiveTintColor: "#999999",
//           tabBarStyle: {
//             backgroundColor: "#666666",
//             borderTopWidth: 0,
//             margin: 10,
//             borderRadius: 50,
//             shadowColor: "transparent",
//             height: 60,
//           },
//         }}
//       >
//         <Screen
//           name="feed"
//           component={Feed}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <Entypo name="home" size={26} color={color} />
//             ),
//           }}
//         />

//         <Screen
//           name="search"
//           component={Search}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <Octicons name="search" size={24} color={color} />
//             ),
//           }}
//         />

//         <Screen
//           name="userSearch"
//           component={UserSearch}
//           options={{ tabBarButton: () => null, tabBarStyle: { display: "none" } }}
//         />

//         <Screen
//           name="writePost"
//           component={WritePost}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <Feather name="edit" size={22} color={color} />
//             ),
//             tabBarStyle: { display: "none" },
//           }}
//         />

//         <Screen
//           name="meditate"
//           component={Meditate}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <MaterialCommunityIcons name="meditation" size={32} color={color} />
//             ),
//           }}
//         />

//         <Screen
//           name="profile"
//           component={Profile}
//           options={{
//             tabBarIcon: ({ color }) => (
//               <Ionicons name="person-outline" size={24} color={color} />
//             ),
//           }}
//         />
//       </Navigator>
//     );
//   }

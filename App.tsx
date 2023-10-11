import "react-native-gesture-handler";

import { StatusBar } from "expo-status-bar";
import { View } from "react-native";

import { SafeAreaProvider } from "react-native-safe-area-context";

import { Routes } from "./src/routes";

export default function App() {
  return (
    // 👇 Fala pro app onde é a área segura
    <SafeAreaProvider>
      {/* 👇 Container do aplicativo */}
      <View className="flex-1">
        {/* 👇 Barra de Status */}
        <StatusBar style="dark" translucent backgroundColor="transparent" />

        {/* 👇 Rotas do aplicativo */}
        <Routes />
      </View>
    </SafeAreaProvider>
  );
}

import React from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const Logo = "../assets/logomt.png";

export function Cadastro() {
  const navigation = useNavigation();

  function navegarLogin() {
    navigation.navigate("login");
  }
  return (
    // 👇 Coloca o que tiver dentro em area segura
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 👇 Cabeçalho */}
      <View className="items-center justify-center flex-row pt-5 gap-1">
        {/* 👇 Ícone */}
        <Image style={{ width: 51, height: 51 }} source={require(Logo)} />
        {/* 👇 Título */}
        <Text className="font-bold text-2xl pt-5 h-20">Martinho de Minas</Text>
      </View>
      {/* 👇 Conteúdo*/}
      <View className="flex-1  bg-slate-50 items-center justify-center gap-5">
        {/* 👇 Nome*/}
        <View className="flex-row gap-3 bg-[#B9FFB2] h-[54] w-[280] rounded-2xl">
          <Text className="font-semibold text-lg">Nome:</Text>
          <TextInput className="w-[190] pb-3 text-base" />
        </View>

        {/* 👇 email*/}
        <View className="flex-row gap-3 bg-[#B9FFB2] h-[54] w-[280] rounded-2xl">
          <Text className="font-semibold text-lg">Email:</Text>
          <TextInput className="w-[190] pb-3 text-base" />
        </View>

        {/* 👇 Senha*/}
        <View className="flex-row gap-3 bg-[#B9FFB2] h-[54] w-[280] rounded-2xl">
          <Text className="font-semibold text-lg">Senha:</Text>
          <TextInput className="w-[190] pb-3 text-base" />
        </View>

        {/* 👇 Confirmar senha*/}
        <View className="flex-row gap-3 bg-[#B9FFB2] h-[54] w-[280] rounded-2xl">
          <Text className="font-semibold text-lg">Confirmar senha:</Text>
          <TextInput className="w-[100] pb-3 text-base" />
        </View>

        {/* 👇 Link para a tela de cadastro*/}
        <TouchableOpacity className="p-4" onPress={navegarLogin}>
          <Text className="text-base font-semibold text-[#10C700]">
            Avançar
          </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-[#10C700] w-full h-[31]"></View>
    </SafeAreaView>
  );
}

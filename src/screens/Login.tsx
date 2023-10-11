import { View, Text, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { SafeAreaView } from "react-native-safe-area-context";

const Logo = "../assets/logomt.png";

export function Login() {
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

      {/* 👇 Conteúdo */}
      <View className="flex-1 items-center justify-center gap-6">
        {/* 👇 Texto de login */}
        <Text className="font-semibold text-xl">Faça seu Login!</Text>

        {/* 👇 Container de botões */}
        <View className="gap-5 items-center">
          <TouchableOpacity className="bg-[#B9FFB2] items-center justify-center w-[270px]  h-[50px] rounded-2xl">
            <Text className="font-semibold text-base">entrar </Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#B9FFB2]  items-center justify-center w-[270px]  h-[50px] rounded-2xl">
            <Text className="font-semibold text-base">MartMais</Text>
          </TouchableOpacity>
        </View>

        {/* 👇 Link para a tela de cadastro*/}
        <TouchableOpacity>
          <Text className="text-base font-semibold text-[#10C700] pt-6 text-center">
            Cadastrar
          </Text>
        </TouchableOpacity>

        {/* 👇 Barra verde*/}
        <View className="bg-[#10C700] w-[398] h-[31] flex items-baseline"></View>
      </View>
    </SafeAreaView>
  );
}

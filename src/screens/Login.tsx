import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const Logo = "../assets/logomt.png";

export function Login() {
  const navigation = useNavigation();

  function navegarCompras() {
    navigation.navigate("compras");
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

      {/* 👇 Conteúdo */}
      <View className="flex-1 items-center justify-center gap-6">
        {/* 👇 Texto de login */}
        <Text className="font-semibold text-xl">Faça seu Login!</Text>

        {/* 👇 Container de botões */}
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

        {/* 👇 Link para a tela de cadastro*/}
        <TouchableOpacity onPress={navegarCompras}>
          <Text className="text-base font-semibold text-[#10C700] pt-6 text-center justify-center">
            Avançar
          </Text>
        </TouchableOpacity>
      </View>

      {/* 👇 Barra verde*/}
      <View className="bg-[#10C700] w-full h-[31]"></View>
    </SafeAreaView>
  );
}

import { View, Text, Image, TextInput, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
const Logo = "../assets/logomt.png";
const iconPesquisa = "../assets/pesquisaicon.png";

export function Compras() {
  return (
    // 👇 Coloca o que tiver dentro em area segura
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 👇 Cabeçalho + Pesquisa*/}
      <View className="pl-12">
        {/* 👇 Cabeçalho */}
        <View className="items-center justify-start flex-row pt-5 gap-1">
          {/* 👇 Ícone */}
          <Image style={{ width: 51, height: 51 }} source={require(Logo)} />
          {/* 👇 Título */}
          <Text className="font-semibold text-2xl pt-5 h-20">
            Martinho de Minas
          </Text>
        </View>
        {/* 👇 Pesquisa */}
        <View className=" flex-row  gap-7">
          <View
            className="bg-[#FF9C9C] h-[56] w-[57] rounded-full"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {/* 👇 Ícone pesquisa */}
            <Image
              style={{ width: 28, height: 41, justifyContent: "center" }}
              source={require(iconPesquisa)}
            />
          </View>
          {/* 👇 Input pesquisa */}
          <View className="bg-[#B9FFB2] h-[56] w-[216] rounded-full">
            <TextInput className="w-[225] pb-3 text-base justify-center items-center p-5" />
          </View>
        </View>
      </View>
      {/* 👇 Categorias */}
      <View>
        <View>
          <Text className="font-semibold text-3xl pt-5 pl-10">Categorias</Text>
        </View>
      </View>

      {/* 👇 Blocos categorias */}
      <View className="flex-row">
        {/* 👇 Hortifruti*/}
        <ScrollView horizontal className="gap-10 pl-5 pr-2">
          <View className="w-[123] h-[122] items-center justify-center rounded-3xl bg-[#62E951] ">
            <Text>HORTIFRUTI</Text>
          </View>

          <View className="w-[123] h-[122] items-center justify-center rounded-3xl bg-[#F1A225]">
            <Text>PADARIA</Text>
          </View>

          <View className="w-[123] h-[122] items-center justify-center rounded-3xl bg-[#F00]">
            <Text>AÇOUGUE</Text>
          </View>

          <View className="w-[123] h-[122] items-center justify-center rounded-3xl bg-[#60ecf6]">
            <Text>FRIOS</Text>
          </View>

          <View className="w-[123] h-[122] items-center justify-center rounded-3xl bg-[#f2a06e]">
            <Text>BÁSICOS</Text>
          </View>

          <View className="w-[123] h-[122] items-center justify-center rounded-3xl bg-[#7f1818]">
            <Text>CHURRASCO</Text>
          </View>
        </ScrollView>
      </View>

      {/* 👇 Menu verde*/}
    </SafeAreaView>
  );
}

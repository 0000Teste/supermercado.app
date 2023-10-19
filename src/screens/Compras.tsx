import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Logo = "../assets/logomt.png";
const iconPesquisa = "../assets/pesquisaicon.png";
const seta = "../assets/seta.png";

export function Compras() {
  return (
    // 👇 Coloca o que tiver dentro em area segura
    <SafeAreaView className="flex-1 bg-slate-50">
      {/* 👇 Cabeçalho + Pesquisa*/}
      <View className="pl-12">
        {/* 👇 Cabeçalho */}
        <View className="flex-row items-center justify-start gap-1 pt-5">
          {/* 👇 Ícone */}
          <Image style={{ width: 51, height: 51 }} source={require(Logo)} />
          {/* 👇 Título */}
          <Text className="h-20 pt-5 text-2xl font-semibold">
            Martinho de Minas
          </Text>
        </View>
        {/* 👇 Pesquisa */}
        <View className=" flex-row  gap-7">
          <View
            className="h-[56] w-[57] rounded-full bg-[#FF9C9C]"
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
          <View className="h-[56] w-[216] rounded-full bg-[#B9FFB2]">
            <TextInput className="w-[225] items-center justify-center p-5 pb-3 text-base" />
          </View>
        </View>
      </View>
      {/* 👇 Categorias */}
      <View>
        <View>
          <Text className="p-9 pl-10 pt-5 text-3xl font-semibold">
            Categorias
          </Text>
        </View>
      </View>
      {/* 👇 Blocos categorias */}
      <View className="flex-row">
        {/* 👇 Hortifruti*/}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 30 }}
          className="gap-10"
        >
          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#62E951] ">
            <Text>HORTIFRUTI</Text>
          </View>

          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#F1A225]">
            <Text>PADARIA</Text>
          </View>

          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#F00]">
            <Text>AÇOUGUE</Text>
          </View>

          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#60ecf6]">
            <Text>FRIOS</Text>
          </View>

          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#f2a06e]">
            <Text>BÁSICOS</Text>
          </View>

          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#7f1818]">
            <Text>CHURRASCO</Text>
          </View>

          <View className="h-[122] w-[123] items-center justify-center rounded-3xl bg-[#f3c041]">
            <Text>PET SHOP</Text>
          </View>
        </ScrollView>
      </View>

      <View className="items-end p-3">
        <TouchableOpacity>
          <Image
            style={{ width: 40, height: 40, justifyContent: "center" }}
            source={require(seta)}
          />
        </TouchableOpacity>
      </View>

      {/* 👇 Lista */}
      <View>
        <View>
          <Text className="p-9 pl-10 pt-5 text-3xl font-semibold">Lista</Text>
        </View>
      </View>

      <View></View>

      {/* 👇 Menu verde*/}
    </SafeAreaView>
  );
}

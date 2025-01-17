import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
const Logo = "../assets/logomt.png";
const iconPesquisa = "../assets/pesquisaicon.png";
const seta = "../assets/seta.png";

export function Compras() {
  const categories = [
    {
      id: "1",
      name: "basicos"
    },
    {
      id: "1",
      name: "frios"
    }
  ]


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
      <FlatList horizontal showsHorizontalScrollIndicator={false}  data={categories} renderItem={({item}) => <CategoryItem category={item.name} />} keyExtractor={(item) =>  item.id} />
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

function CategoryItem({category}:{category: string}){
  return (
    <Text className="items-center justify-center w-20 h-20 bg-red-500">{category}</Text>
  )
}
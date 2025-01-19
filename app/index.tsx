import { images } from "@/constants";
import { Link, router } from "expo-router";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const handleNavigation=()=>{
router.push("/(landing)/doctor")
  }
  return (
    <SafeAreaView className="bg-white">
      <Link href="/(auth)/signup" className="text-[#A1A8B0] self-end pr-[5%] text-md" >Skip</Link>
      <View className="h-full w-[100%] flex flex-col items-center justify-center ">
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          className="w-[70%] h-[70%]"
          source={images?.Woman}
        />
        <Text className="text-primary font-extrabold text-xl px-[20%] font-poppins_bold">Find a lot of specialist doctors in one place</Text>
        <TouchableOpacity onPress={handleNavigation} className=" bg-bg_primary py-[4%] px-[15%] rounded-lg mt-4"><Text className="text-white">Get Started</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

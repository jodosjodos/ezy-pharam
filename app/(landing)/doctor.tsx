import { images } from "@/constants";
import { Link, router } from "expo-router";
import { Button, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { handleBack } from "@/utils";
export default function Index() {
  const handleNavigation = () => {
    router.push("/(landing)/location");
  };

  return (
    <SafeAreaView className="bg-white">
      <View className="flex flex-row justify-between items-center ">
        <Pressable   onPress={handleBack} className="text-[#A1A8B0] self-start  text-xl">
         <Image source={images?.Back} />
        </Pressable>
        <Link
          href="/(auth)/login"
          className="text-[#A1A8B0]  pr-[5%] text-md"
        >
          Skip
        </Link>
      </View>
      <View className="h-full w-[100%] flex flex-col items-center justify-center ">
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          className="w-[70%] h-[60%]"
          source={images?.Doctor}
        />
        <Text className="text-primary font-poppins_bold text-xl px-[20%]">
          Get advice only from a doctor you believe in.
        </Text>
        <TouchableOpacity
          onPress={handleNavigation}
          className=" bg-bg_primary  mt-5 mx-[10%] self-end rounded-full p-[3%]"
        >
          <Ionicons name="arrow-forward" size={20} color="white" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

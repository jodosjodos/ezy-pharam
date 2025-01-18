import { images } from "@/constants";
import { Link, router } from "expo-router";
import { Image, Text, Touchable, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function Index() {
  const handleNavigation = () => {
    router.push("/(landing)/doctor");
  };
  return (
    <SafeAreaView className="bg-white">
      <Link
        href="/(auth)/signup"
        className="text-[#A1A8B0] self-end pr-[5%] text-md"
      >
        Skip
      </Link>
      <View className="h-full w-[100%] flex flex-col items-center justify-center ">
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          className="w-[70%] h-[70%] "
          source={images?.Location}
        />
        <View className="flex flex-col items-center justify-center space-y-2">
            <Text className="text-primary font-extrabold text-xl px-[20%]">
                Find pharmacy near you
            </Text>
            <Text className="text-[#A1A8B0] text-center px-[20%]">
                It's easy to find pharmacy that is near to your location. With just one tap.
                </Text>
        </View>
          
      
     
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

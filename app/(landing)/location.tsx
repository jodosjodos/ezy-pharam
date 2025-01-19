import { images } from "@/constants";
import { Link, router } from "expo-router";
import {
  Image,
  Pressable,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { handleBack } from "@/utils";
export default function Location() {
  const handleNavigation = () => {
    router.replace("/(landing)/tailor");
  };
  return (
    <SafeAreaView className="bg-white">
      <View className="flex flex-row justify-between items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} />
        </Pressable>
        <Link href="/(auth)/signup" className="text-[#A1A8B0]  pr-[5%] text-md">
          Skip
        </Link>
      </View>
      <View className="h-full w-[100%] flex flex-col items-center justify-center ">
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          className="w-[60%] h-[50%] "
          source={images?.Location}
        />
        <View className=" flex flex-col items-center justify-center space-y-1">
          <Text className="text-primary font-poppins_bold text-xl px-[20%]">
            Find pharmacy near you
          </Text>
          <Text className="text-[#A1A8B0] font-poppins_reg text-center px-[20%]">
            It's easy to find pharmacy that is near to your location. With just
            one tap.
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

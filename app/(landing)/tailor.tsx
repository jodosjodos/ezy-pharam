import { images } from "@/constants";
import { Link, router } from "expo-router";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from "@expo/vector-icons/Ionicons";
import { handleBack } from "@/utils";
import RadioGroupComponent from "@/components/Radio-Group";
import { AccountTypeEnum } from "@/enums";
export default function Tailor() {
  const roles = [
    { id: "1", label: "Patient", value: AccountTypeEnum.PATIENT },
    { id: "2", label: "Hospital", value: AccountTypeEnum.HOSPITAL },
    { id: "3", label: "Pharmacy", value: AccountTypeEnum.PHARMACY },
  ];
  const handleNavigation = () => {
    router.replace("/(landing)/started");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <View className="flex flex-row justify-between items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} />
        </Pressable>
        <Link href="/(auth)/login" className="text-[#A1A8B0]  pr-[5%] text-md">
          Skip
        </Link>
      </View>
      <View className=" w-[100%] flex flex-col items-center justify-center ">
        <Image
          resizeMethod="auto"
          resizeMode="contain"
          className="w-[70%] h-[57%] "
          source={images?.Tailor}
        />
        <View className="flex flex-col items-center justify-center space-y-2">
          <Text className="text-primary font-poppins_bold text-xl px-[20%]">
            Tailor your experience
          </Text>
          <Text className="text-[#A1A8B0] text-center px-[20%] font-poppins_reg">
            To provide with good experience , please select your role below
          </Text>
          <RadioGroupComponent roles={roles} />
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

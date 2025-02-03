import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleBack } from "@/utils";
import { hospitals, images } from "@/constants";

const Hospital = () => {
  
  const { id } = useLocalSearchParams();
  const hospital = hospitals.find((hospital) => hospital.id === Number(id));

  if (!hospital) {
    return (
      <SafeAreaView className="flex-1 bg-white">
        <Text>Hospital not found</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex flex-row  px-2 items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} className="w-12" />
        </Pressable>
        <Text className="text-primary font-poppins_bold  text-2xl">
          {hospital?.name}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Hospital;

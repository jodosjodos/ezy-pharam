import { images } from "@/constants";
import { handleBack } from "@/utils";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { Image, Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Hospital = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex flex-row justify-between px-2 items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} className="w-12" />
        </Pressable>
        <Text className="text-primary font-poppins_bold text-2xl">FAQ</Text>
        <FontAwesome name="search" size={24} />
      </View>
    </SafeAreaView>
  );
};

export default Hospital;

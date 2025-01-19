import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants";
import { Link } from "expo-router";
import { handleBack } from "@/utils";

const GetStarted = () => {
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <View className="flex flex-row justify-between items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} />
        </Pressable>
      </View>
      <View className="flex flex-col items-center justify-center space-y-[7%]">
        <Image
          source={images.Pharma}
          resizeMode="contain"
          className="w-[70%] h-[50%] "
        />
        <View>
          <Text className="text-primary font-poppins_bold text-xl px-[20%]">
            Let's get started!
          </Text>
          <Text className="text-[#A1A8B0] text-center px-[20%] font-poppins_reg">
            Login to Stay healthy and fit
          </Text>
        </View>
        <View>
          <Pressable
            onPress={() => {}}
            className=" bg-bg_primary py-[4%] px-[28%] rounded-3xl mt-4"
          >
            <Text className="text-white font-poppins_reg">Login</Text>
          </Pressable>
          <Pressable
            onPress={() => {}}
            className="bg-white py-[4%] px-[28%] border border-bg_primary rounded-3xl mt-4"
          >
            <Text className="text-bg_primary font-poppins_reg">Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;

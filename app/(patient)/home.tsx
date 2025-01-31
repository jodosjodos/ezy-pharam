import { View, Text, TextInput, Pressable, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons, Ionicons } from "@expo/vector-icons";
import { images } from "@/constants";

const Home = () => {
  const [search, setSearch] = useState<string | undefined>("");
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex  flex-1 flex-col px-7 gap-y-5">
        <View className="flex flex-col gap-y-3 ">
          <Text className="font-poppins_bold text-3xl">
            Find your desire health solution
          </Text>
          <View className="flex flex-row items-center ">
            <EvilIcons
              name="search"
              size={24}
              color="rgba(34, 31, 31, 0.4)"
              style={{ position: "absolute", zIndex: 9, left: "6%" }}
            />
            <TextInput
              className="flex-1 font-poppins_reg border border-[#e8f3f1]  p-[3.5%] placeholder:text-start px-[15%] rounded-full text-stroke-40 bg-[#FBFBFB]"
              placeholder="Search doctor , drugs , articles"
              value={search}
              onChangeText={setSearch}
            />
          </View>
        </View>
        <View className="flex flex-row justify-around items-center">
          <View className="flex flex-col gap-y-1 items-center">
            <Pressable className="bg-bg_primary rounded-2xl py-3 px-4">
              <Image
                source={images.DoctorIcon}
                resizeMode="contain"
                className="w-12 h-12"
              />
            </Pressable>
            <Text className="font-poppins_reg text-[#A1A8B0]">Doctor</Text>
          </View>
          <View className="flex flex-col gap-y-1 items-center">
            <Pressable className="bg-bg_primary rounded-2xl py-3 px-4">
              <Image
                source={images.HospitalIcon}
                resizeMode="contain"
                className="w-12 h-12"
              />
            </Pressable>
            <Text className="font-poppins_reg text-[#A1A8B0]">Hospitals</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleBack } from "@/utils";
import { hospitals, images, services } from "@/constants";
import { EvilIcons } from "@expo/vector-icons";

const Hospital = () => {
  const { id } = useLocalSearchParams();
  const hospital = hospitals.find((hospital) => hospital.id === Number(id));
  const [search, setSearch] = useState<string | undefined>("");

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
      <View className="flex flex-row items-center px-9">
        <EvilIcons
          name="search"
          size={24}
          color="rgba(34, 31, 31, 0.4)"
          style={{ position: "absolute", zIndex: 9, left: "13%" }}
        />
        <TextInput
          className="flex-1 font-poppins_reg border border-[#e8f3f1]  p-[3.5%] placeholder:text-start px-[15%] rounded-full text-stroke-40 bg-[#F9FAFB]"
          placeholder="Find a doctor"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <View className="flex flex-col gap-y-2 p-3">
        <View className="flex flex-row justify-between">
          <Text className="font-poppins_bold ">Category</Text>
          <Pressable className="bg-bg_primary py-1 px-4 rounded-xl">
            <Text className="text-white font-poppins_reg text-xs">
              Transfer
            </Text>
          </Pressable>
        </View>
        <FlatList
          data={services}
          keyExtractor={(item) => item.id}
          numColumns={3} // Sets 3 columns in the grid
          contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 10 }}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          renderItem={({ item }) => (
            <View className="w-1/3 items-center p-2">
              {/* Shadow Container */}
              <View className="rounded-lg bg-white shadow-md shadow-[#A1A8B0] p-2">
                <Image source={item.image} className="w-12 h-12" resizeMode="contain"/>
              </View>

              {/* Text Below the Image */}
              <Text className="text-[#A1A8B0] font-poppins_reg text-[10px] mt-2">
                {item.title}
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Hospital;

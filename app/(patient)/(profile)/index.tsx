import { View, Text, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, ProfileData } from "@/constants";
import { MenuList } from "@/components/Menu-item";
import { create } from "zustand";

const ProfileLanding = () => {
  return (
    <SafeAreaView className="bg-white h-full w-full">
      <View className="flex flex-col  px-[5%]  flex-1 justify-evenly">
        {/* Profile Section */}
        <View className="flex flex-col items-center justify-center space-y-3 p-4">
          <Image source={images.Profile} className="w-24 h-24 rounded-full" />
          <Text className="text-primary text-sm font-poppins_bold">
            {ProfileData.fullName}
          </Text>
          <View>
            <Text className="text-gray-500 font-poppins_reg text-sm">
              {ProfileData.email}
            </Text>
            <Text className="text-gray-400 font-poppins_reg text-sm">
              Registered Since {ProfileData.cratedAt}
            </Text>
          </View>
        </View>
        {/* Menu List */}
        <MenuList />
      </View>
    </SafeAreaView>
  );
};

export default ProfileLanding;

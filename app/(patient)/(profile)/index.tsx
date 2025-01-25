import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, ProfileData } from "@/constants";
import { MenuList } from "@/components/Menu-item";
import CheckModal from "@/components/Check-model";
import { router } from "expo-router";

const ProfileLanding = () => {
  const [isLogout, setIsLogout] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  useEffect(() => {
    if (isLogout) {
      setModalVisible(true);
    }
  }, [isLogout]);

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
              Registered Since {ProfileData.createdAt}
            </Text>
          </View>
        </View>
        {/* Menu List */}
        <MenuList setModalVisible={setModalVisible}  setIsLogout={setIsLogout} />
        <CheckModal
        setLogout={setIsLogout}
          image={images?.Logout}
          cancel={true}
          title="Are you sure to log out of your account ?"
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          fn={() => {
            setModalVisible(false);
            setTimeout(() => {
              router.push("/(auth)/login"); // Navigate to login after a small delay
            }, 300);
          }}
          button="Log Out"
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileLanding;

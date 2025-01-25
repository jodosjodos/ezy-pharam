import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images, ProfileData } from "@/constants";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import CheckModal from "@/components/Check-model";

const EditProfile = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  // Create state for username input
  const [username, setUsername] = useState(ProfileData.username);
  const [email, setEmail] = useState(ProfileData.email);
  const [phoneNumber, setPhoneNumber] = useState(ProfileData.phoneNumber);

  return (
    <SafeAreaView className="bg-white h-full w-full">
      <View className="flex flex-col px-[5%] flex-1 justify-evenly">
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

        <View className="flex flex-col space-y-2 ">
          <TextInput
            value={username}
            onChangeText={(text) => setUsername(text)}
            placeholder="Enter your username"
            className=" border-b border-line-13 rounded-md px-4 py-2 text-[#757575] text-sm font-poppins_reg mb-6 "
          />
          <TextInput
            value={email}
            onChangeText={(text) => setEmail(text)}
            placeholder="Enter your Email"
            className=" border-b border-line-13 rounded-md px-4 py-2 text-[#757575] text-sm font-poppins_reg mb-8"
          />
          <TextInput
            value={phoneNumber}
            onChangeText={(text) => setPhoneNumber(text)}
            placeholder="Enter your Phone number"
            className=" border-b border-line-13 rounded-md px-4 py-2 text-[#757575] text-sm font-poppins_reg"
          />
          <Pressable
            onPress={() => router.push("/(auth)/newpassword")}
            className="flex-row items-center py-6 px-4  border-b border-line-13 justify-between"
          >
            <View className="flex flex-row items-center space-x-2">
              <Text className="text-[#757575] font-poppins_req">
                Reset Password
              </Text>
            </View>
            <Entypo name="chevron-thin-right" size={15} color="#d1d5db" />
          </Pressable>
        </View>
        {/* handle update of password logic here in function */}
        <Pressable
          onPress={() => setModalVisible(true)}
          className="bg_primary py-[4%] px-[28%] border border-bg_primary bg-bg_primary rounded-3xl mt-4"
        >
          <Text className="text-white  font-poppins_bold text-center">
            Done
          </Text>
        </Pressable>
      </View>
      <CheckModal
        setLogout={()=>{}}
          image={images.Done}
          title="Profile data updated successfully"
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          fn={() => {
            setModalVisible(false);
            setTimeout(() => {
              router.push("/(patient)/(profile)/"); 
            }, 300);
          }}
          button="Done"
        />
    </SafeAreaView>
  );
};

export default EditProfile;

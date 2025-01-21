import { images } from "@/constants";
import { handleBack } from "@/utils";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Fontisto from "@expo/vector-icons/Fontisto";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
const ForgotPasswordPage = () => {
  const [message, setMessage] = useState("");
  const [selected, setSelected] = useState<string>("email");
  const [email_phone, setEmail_phone] = useState<string>("");

  const handleSendResetLink = () => {
    // Placeholder for your API call to send the reset link
    if (email_phone) {
      setMessage("Password reset link sent to your email!");
      router.push("/(auth)/verification");
    } else {
      setMessage("Please enter a valid email.");
    }
  };

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
      <View className="flex-1 items-center p-[5%] space-y-4">
        <Image
          source={images.Forgot}
          resizeMode="contain"
          className="w-[70%] h-[40%] "
        />
        <Text className="text-primary font-poppins_bold text-xl self-start">
          Forgot Password
        </Text>
        <Text className="text-[#A1A8B0] self-start  font-poppins_reg">
          Enter your email below, and we'll send you a password reset link.
        </Text>
        <View className="flex flex-row items-center">
          <Pressable
            className={`flex-1 flex-row  items-center py-[3.5%] font-poppins_reg border border-stroke-10 bg-[#F9FAFB]  rounded-md text-stroke-40 px-[5%] space-x-[7%] ${
              selected === "email" ? "bg-white" : ""
            }`}
            onPress={() => setSelected("email")}
          >
            <Fontisto
              name="email"
              size={28}
              color={selected === "email" ? "#407CE2" : "rgba(34, 31, 31, 0.4)"}
            />
            <Text
              className={` ${
                selected === "email" ? "text-bg_primary" : "text-stroke-40"
              } font-poppins_reg`}
            >
              Email
            </Text>
          </Pressable>
          <Pressable
            className={`flex-1 flex-row  items-center py-[3.5%] font-poppins_reg border border-stroke-10 bg-[#F9FAFB]  rounded-md text-stroke-40 px-[5%] space-x-[7%] ${
              selected === "phone" ? "bg-white" : "bg-[#F9FAFB]"
            }`}
            onPress={() => setSelected("phone")}
          >
            <FontAwesome
              name="phone"
              size={28}
              color={selected === "phone" ? "#407CE2" : "rgba(34, 31, 31, 0.4)"}
            />
            <Text
              className={` ${
                selected === "phone" ? "text-bg_primary" : "text-stroke-40"
              } font-poppins_reg`}
            >
              Phone
            </Text>
          </Pressable>
        </View>
        <View className="flex flex-row items-center ">
          {selected === "phone" ? (
            <FontAwesome
              name="phone"
              size={28}
              color="rgba(34, 31, 31, 0.4)"
              style={{ position: "absolute", zIndex: 9, left: "6%" }}
            />
          ) : (
            <Fontisto
              name="email"
              size={24}
              color="rgba(34, 31, 31, 0.4)"
              style={{ position: "absolute", zIndex: 9, left: "6%" }}
            />
          )}
          <TextInput
            className="flex-1 font-poppins_reg border border-stroke-10 bg-[#F9FAFB] p-[3.5%] placeholder:text-start px-[15%] rounded-md text-stroke-40"
            placeholder={
              selected === "email"
                ? "Enter your email"
                : "Enter your phone number"
            }
            value={email_phone}
            keyboardType={selected === "email" ? "email-address" : "phone-pad"}
            onChangeText={setEmail_phone}
          />
        </View>
        {message ? (
          <Text
            className={`text-center mb-4 ${
              email_phone ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </Text>
        ) : null}
        <Pressable
          onPress={handleSendResetLink}
          className="bg_primary py-[4%] px-[28%] border border-bg_primary bg-bg_primary rounded-3xl my-4 w-full"
        >
          <Text className="text-white  font-poppins_bold text-center">
            Submit
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ForgotPasswordPage;

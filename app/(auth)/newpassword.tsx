import { images } from "@/constants";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import CheckModal from "@/components/Check-model";

const ResetPasswordPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  //TODO:not well , improve it
  const handlePasswordReset = () => {
    if (password === confirmPassword && password.length >= 8) {
      setModalVisible(true);
    } else {
      console.log("Passwords do not match or are too short.");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        <View className="flex-1 px-6 relative">
          {/* Header */}
          <Pressable onPress={() => console.log("Back Pressed")}>
            <Image source={images?.Back} />
          </Pressable>

          <View className="flex-1 justify-center space-y-9">
            <View>
              <Text className="text-2xl font-poppins_bold text-primary text-center">
                Reset Password?
              </Text>
              <Text className="text-base text-[#A1A8B0] font-poppins_reg text-center">
                Create your new password to login
              </Text>
            </View>
            <View className="flex flex-col space-y-5">
              {/* Password Input */}
              <View className="flex flex-row items-center ">
                <Feather
                  name="lock"
                  size={24}
                  color="rgba(34, 31, 31, 0.4)"
                  style={{ position: "absolute", zIndex: 9, left: "6%" }}
                />
                <TextInput
                  className="flex-1 font-poppins_reg border border-stroke-10 bg-[#F9FAFB] p-[3.5%] placeholder:text-start px-[15%] rounded-md text-stroke-40"
                  placeholder="Enter your password"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  keyboardType="default"
                />
                <FontAwesome
                  name={showPassword ? "eye" : "eye-slash"}
                  size={24}
                  color="rgba(34, 31, 31, 0.4)"
                  style={{ position: "absolute", zIndex: 9, right: "6%" }}
                  onPress={() => setShowPassword(!showPassword)}
                />
              </View>
              <View className="flex flex-row items-center ">
                <Feather
                  name="lock"
                  size={24}
                  color="rgba(34, 31, 31, 0.4)"
                  style={{ position: "absolute", zIndex: 9, left: "6%" }}
                />
                <TextInput
                  className="flex-1 font-poppins_reg border border-stroke-10 bg-[#F9FAFB] p-[3.5%] placeholder:text-start px-[15%] rounded-md text-stroke-40"
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  keyboardType="default"
                />
                <FontAwesome
                  name={showConfirmPassword ? "eye" : "eye-slash"}
                  size={24}
                  color="rgba(34, 31, 31, 0.4)"
                  style={{ position: "absolute", zIndex: 9, right: "6%" }}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                />
              </View>
            </View>
            {/* Create Password Button */}
            <Pressable
              onPress={handlePasswordReset}
              className="bg_primary py-[4%] px-[28%] border border-bg_primary bg-bg_primary rounded-3xl mt-4"
            >
              <Text className="text-white font-poppins_bold text-center ">
                Create Password
              </Text>
            </Pressable>
          </View>
          <CheckModal
          setLogout={()=>{}}
            image={images?.Done}
            title="Success"
            subTitle="Your password has been reset successfully."
            isModalVisible={isModalVisible}
            setModalVisible={setModalVisible}
            fn={() => {
              setModalVisible(false);
              setTimeout(() => {
                router.push("/(auth)/login"); // Navigate to login after a small delay
              }, 300);
            }}
            button="Login"
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default ResetPasswordPage;

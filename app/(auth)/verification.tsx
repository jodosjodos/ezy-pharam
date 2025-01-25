import { images } from "@/constants";
import { useResetValue } from "@/store";
import { handleBack, maskSensitiveInfo } from "@/utils";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const VerificationPage = () => {
  //TODO: show real number  or emails received and handle state
  const [code, setCode] = useState(["", "", "", ""]);
  const [currentInput, setCurrentInput] = useState(0);
  const resetValue = useResetValue.use.option();
  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Move to the next input box
    if (text && index < 3) {
      setCurrentInput(index + 1);
    }
  };

  const handleVerify = () => {
    // Add your verification logic here
    router.push("/(auth)/newpassword");
  };

  const handleResendCode = () => {
    console.log("Resending verification code...");
    // Add resend code logic here
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <KeyboardAvoidingView behavior="padding" className="flex-1">
        <View className="flex flex-row justify-between items-center ">
          <Pressable
            onPress={handleBack}
            className="text-[#A1A8B0] self-start  text-xl"
          >
            <Image source={images?.Back} />
          </Pressable>
        </View>
        {/* Main Content */}
        <View className="flex-1 justify-center items-center px-4">
          {/* Title */}
          <Text className="text-2xl font-poppins_bold text-primary text-center mb-2">
            Enter Verification Code
          </Text>
          <Text className="text-base text-[#A1ABB0] mb-5 text-center">
            Enter code that we have sent to your number{" "}
            <Text className="font-poppins_bold text-primary">
              {maskSensitiveInfo(resetValue)}
            </Text>
          </Text>

          {/* Input Boxes */}
          <View className="flex-row justify-center items-center space-x-4 mb-6">
            {code.map((digit, index) => (
              <TextInput
                key={index}
                className="w-12 h-12 text-center border border-blue-500 rounded-lg text-lg font-bold text-black"
                keyboardType="number-pad"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleCodeChange(text, index)}
                autoFocus={index === currentInput}
              />
            ))}
          </View>

          {/* Verify Button */}
          <Pressable
            onPress={handleVerify}
            className="bg_primary py-[4%] px-[28%] border border-bg_primary bg-bg_primary rounded-3xl my-4 w-full"
          >
            <Text className="text-white  font-poppins_bold text-center">
              Verify
            </Text>
          </Pressable>

          {/* Resend Code */}
          <TouchableOpacity>
            <Text className="font-poppins_reg text-[#A1A8B0] text-center">
              Didn’t receive the code?{" "}
              <Text
                className="text-bg_primary font-poppins_bold underline"
                onPress={handleResendCode}
              >
                Resend
              </Text>
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default VerificationPage;

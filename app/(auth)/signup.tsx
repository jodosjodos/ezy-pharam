import {
  View,
  Text,
  Pressable,
  Image,
  TextInput,
  Linking,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { handleBack } from "@/utils";
import { images } from "@/constants";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CheckBox from "expo-checkbox";
import { Link, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
const SignupPage = () => {
  const [hospitalName, setHospitalName] = useState<string>("");
  const [email_phone, setEmail_phone] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("email");
  const [isSelected, setSelection] = useState(false);
  const openExternalLink = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex flex-row">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} />
        </Pressable>
        <View className="flex flex-row  items-center   justify-center flex-1">
          <Text className=" font-poppins_bold text-xl text-primary justify-self-center self-center">
            Sign Up
          </Text>
        </View>
      </View>

      <View className="flex flex-col  justify-evenly  h-full px-[5%]">
        <View className="flex flex-col space-y-[7%]">
          <View className="flex flex-row items-center ">
            <Ionicons
              name="person-outline"
              size={24}
              color="rgba(34, 31, 31, 0.4)"
              style={{ position: "absolute", zIndex: 9, left: "6%" }}
            />
            <TextInput
              className="flex-1 font-poppins_reg border border-stroke-10 bg-[#F9FAFB] p-[3.5%] placeholder:text-start px-[15%] rounded-md text-stroke-40"
              placeholder="Hospital name"
              value={hospitalName}
              onChangeText={setHospitalName}
            />
          </View>
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
                color={
                  selected === "email" ? "#407CE2" : "rgba(34, 31, 31, 0.4)"
                }
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
                color={
                  selected === "phone" ? "#407CE2" : "rgba(34, 31, 31, 0.4)"
                }
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
        </View>
        <View className="flex flex-row items-center space-x-[3%] px-[2%]">
          <CheckBox
            className="rounded-md "
            disabled={false}
            value={isSelected}
            onValueChange={setSelection}
          ></CheckBox>
          <Text className="font-poppins_reg">
            I agree to the healthcare{" "}
            <Text
              className="text-bg_primary "
              onPress={() =>
                openExternalLink(
                  "https://termly.io/resources/templates/terms-of-service-template/"
                )
              }
            >
              Terms of Service
            </Text>{" "}
            and{" "}
            <Text
              className="text-bg_primary"
              onPress={() =>
                openExternalLink(
                  "https://termly.io/resources/templates/privacy-policy-template/"
                )
              }
            >
              Privacy Policy
            </Text>
          </Text>
        </View>
        <View className="flex flex-col space-y-5">
          <Pressable
            onPress={() => router.push("/(auth)/signup")}
            className="bg_primary py-[4%] px-[28%] border border-bg_primary bg-bg_primary rounded-3xl mt-4"
          >
            <Text className="text-white  font-poppins_bold text-center">
              Sign Up
            </Text>
          </Pressable>
          <Text className="text-center font-poppins_reg">
            Already have an account ?{" "}
            <Link
              href="/(auth)/login"
              className="text-bg_primary font-poppins_bold"
            >
              Sign in
            </Link>
          </Text>
        </View>
        <Pressable className="flex flex-row items-center justify-center space-x-[5%] py-[4%] px-[28%] border border-[#E5E5E5] rounded-md mb-4">
          <AntDesign name="google" size={24} color="black" />
          <Text className="text-center font-poppins_bold text-primary">
            Sign In with Google
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default SignupPage;

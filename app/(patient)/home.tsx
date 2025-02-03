import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { EvilIcons } from "@expo/vector-icons";
import { hospitals, images } from "@/constants";
import { SVGComponent } from "@/components/Svg-Component";
import { Link } from "expo-router";
import { HospitalCard } from "@/components/Hospital-card";

const Home = () => {
  const [search, setSearch] = useState<string | undefined>("");
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
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
          <View className="flex-row items-center p-3 bg-line-13 rounded-2xl shadow-md">
            {/* Text Content */}
            <View className="flex-1  gap-y-2">
              <Text className="text-lg font-poppins_bold text-[#101623]">
                Early protection for your family health
              </Text>
              <Pressable className=" bg-bg_primary rounded-full px-4 py-2 self-start">
                <Text className="text-white font-poppins_reg">Learn more</Text>
              </Pressable>
            </View>
            <SVGComponent />
          </View>
          <View className="flex-1 p-2 flex flex-col  gap-y-4">
            <View className="flex flex-row items-center justify-between">
              <Text className="font-poppins_bold">Top Hospitals</Text>
              <Link href="/(patient)/hospitals" className="text-bg_primary">
                See all
              </Link>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              className="  p-4"
            >
              <View className="flex flex-row space-x-4">
                {hospitals.map((hospital) => (
                  <HospitalCard key={hospital.id} hospital={hospital} />
                ))}
              </View>
            </ScrollView>
          </View>
          <View className="flex-1 p-2 flex flex-col  gap-y-4">
            <View className="flex flex-row items-center justify-between">
              <Text className="font-poppins_bold">Top articles</Text>
              <Link href="/(patient)/articles" className="text-bg_primary">
                See all
              </Link>
            </View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
              className="  p-4"
            >
              <View className="flex flex-row space-x-4">
                {hospitals.map((hospital) => (
                  <HospitalCard key ={hospital.id} hospital={hospital} />
                ))}
              </View>
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

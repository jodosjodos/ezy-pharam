import { HospitalCard } from "@/components/Hospital-card";
import { HospitalCard2 } from "@/components/Hospital-card2";
import { hospitals, images } from "@/constants";
import { handleBack } from "@/utils";
import React from "react";
import { ScrollView, Text, View } from "react-native";
import { Image, Pressable } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

const Hospitals = () => {
  return (
    <SafeAreaView className="bg-white flex-1">
      <View className="flex flex-row  px-2 items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} className="w-12" />
        </Pressable>
        <Text className="text-primary font-poppins_bold  text-2xl">
          Referral Hospitals
        </Text>
      </View>
      <ScrollView>
        <View className="px-5">
          {hospitals.map((hospital) => (
            <HospitalCard2 key={hospital.id} hospital={hospital} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hospitals;

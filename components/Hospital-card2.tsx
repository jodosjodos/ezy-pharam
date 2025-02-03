import { images } from "@/constants";
import { Hospital } from "@/interface";
import React from "react";
import { View, Text, Image, Pressable } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
interface HospitalCardProps {
  hospital: Hospital;
}
export const HospitalCard2: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <Pressable onPress={()=>console.log("okay")
    }>
      <View className=" p-3 rounded-lg shadow-md  border-[1.5px] border-[#E8F3F1] flex flex-row gap-x-2 justify-around   my-2 ">
        <Image
          source={hospital.image}
          className="w-24 rounded-md h-24  self-center"
        />

        <View className="flex flex-col gap-y-2">
          <View className=" w-[180px]">
            <Text className="text-xs font-poppins_bold text-primary overflow-hidden">
              {hospital.name}
            </Text>

            <View className="flex flex-row items-center ">
              <Entypo name="location-pin" size={20} color="#ADADAD" />
              <Text className="text-text-primary">{hospital.location}</Text>
            </View>
          </View>

          <View className="flex flex-row items-center  gap-x-4">
            <View className="flex flex-row items-center bg-[#E8F3F1] p-1 rounded-md">
              <Image source={images.Star} className="w-4 h-4" />
              <Text className="text-bg_primary"> {hospital.rating}</Text>
            </View>

            <Text className="text-text-primary">{hospital.service}</Text>
          </View>
          <View className="flex flex-row items-center  gap-x-4">
            <Text className="text-text-primary">
              {" "}
              open {hospital.openHours} hours
            </Text>

            <Text className="text-text-primary">{hospital.number}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

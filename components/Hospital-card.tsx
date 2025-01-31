import { images } from "@/constants";
import { Hospital } from "@/interface";
import React from "react";
import { View, Text, Image } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
interface HospitalCardProps {
  hospital: Hospital;
}
//todo: fix overflow of text
export const HospitalCard: React.FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <View className=" p-3 rounded-lg shadow-md  border-[1.5px] border-[#E8F3F1] flex flex-col gap-y-2 justify-around  w-[200px]" key={hospital.id}>
      <Image
        source={hospital.image}
        className="w-24 rounded-full h-24  self-center"
      />

      <View>
        <Text className="text-sm font-poppins_bold text-primary truncate line-cramp-1">
          {hospital.name}
        </Text>

        <Text className="text-[#ADADAD]">{hospital.service}</Text>
      </View>

      <View className="flex flex-row items-center  gap-x-4 bg-red-500">
        <View className="flex flex-row items-center bg-[#E8F3F1] p-1 rounded-md">
          <Image source={images.Star} className="w-4 h-4" />
          <Text className="text-bg_primary"> {hospital.rating}</Text>
        </View>
        <View className="flex flex-row items-center ">
          <Entypo name="location-pin" size={20} color="#ADADAD" />
          <Text className="text-[#ADADAD]">{hospital.location}</Text>
        </View>
      </View>
    </View>
  );
};

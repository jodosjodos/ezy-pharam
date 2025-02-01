import { faqs, images } from "@/constants";
import { handleBack } from "@/utils";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//TODO search functionality 
const FAQ = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <SafeAreaView className="bg-white py-4 ">
      <View className="flex flex-row justify-between px-2 items-center ">
        <Pressable
          onPress={handleBack}
          className="text-[#A1A8B0] self-start  text-xl"
        >
          <Image source={images?.Back} className="w-12" />
        </Pressable>
        <Text className="text-primary font-poppins_bold text-2xl">FAQ</Text>
        <FontAwesome name="search" size={24} />
      </View>
      <ScrollView className=" py-8 h-full ">
        <View className=" flex flex-col justify-between py-3">
          {faqs.map((faq, index) => (
            <View key={index} className="border-b border-line-13 py-5">
              <View className="flex flex-row items-center justify-between px-4">
                <Text className="text-md font-semibold text-primary font-poppins_bold">
                  {faq.question}
                </Text>
                <Pressable onPress={() => toggleExpand(index)}>
                  <Entypo
                    name={
                      expanded === index
                        ? "chevron-thin-up"
                        : "chevron-thin-down"
                    }
                    size={15}
                    color="#d1d5db"
                  />
                </Pressable>
              </View>
              {expanded === index && (
                <Text className="text-[#757575] font-poppins_reg text-sm m-4">
                  {faq.answer}
                </Text>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FAQ;

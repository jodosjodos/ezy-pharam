import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";
import Modal from "react-native-modal";
import { Image } from "react-native";
import { images } from "@/constants";
const CheckModal = ({
  fn,
  isModalVisible,
  setModalVisible,
  title,
  subTitle,
  button,
  cancel = false,
  image,
  setLogout,
}: {
  fn: () => void;
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
  title: string;
  subTitle?: string;
  button: string;
  cancel?: boolean;
  image: any;
  setLogout: (value: boolean) => void;
}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      animationIn="fadeIn"
      animationOut="fadeOut"
      onModalHide={() => setLogout(false)}
    >
      <View className="bg-white rounded-3xl p-[10%] shadow-2xl items-center">
        <Image source={image} className="mb-6 w-[90px] h-[90px]" />
        <Text className="text-xl font-poppins_bold text-primary mb-4 text-center">
          {title}
        </Text>
        {subTitle && (
          <Text className="text-center text-gray-500 mb-4">{subTitle}</Text>
        )}
        <View className="flex flex-col items-center space-y-4">
          <Pressable
            onPress={fn}
            className="bg_primary py-[5%] px-[25%] border border-bg_primary bg-bg_primary rounded-3xl mt-4"
          >
            <Text className="text-white  font-poppins_bold text-center">
              {button}
            </Text>
          </Pressable>
          {cancel && (
            <Pressable onPress={() => setModalVisible(false)}>
              <Text className="text-bg_primary font-poppins_bold">Cancel</Text>
            </Pressable>
          )}
        </View>
      </View>
    </Modal>
  );
};

export default CheckModal;

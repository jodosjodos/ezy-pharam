import React from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { Href, router } from "expo-router";

const menuItems = [
  { id: "1", title: "Edit Profile", icon: "user", to: "/edit" },
  { id: "2", title: "My Saved", icon: "heart", to: "/saved" },
  { id: "3", title: "Payment Method", icon: "credit-card", to: "/payment" },
  { id: "4", title: "FAQs", icon: "comments", to: "/faq" },
  { id: "5", title: "Logout", icon: "sign-out" },
];

export const MenuList = ({
  setModalVisible,
  setIsLogout,
}: {
  setModalVisible: (value: boolean) => void;
  setIsLogout: (value: boolean) => void;
}) => {
  const handleNavigation = (item: {
    id: string;
    title: string;
    icon: string;
    to: Href<string | object>;
  }) => {
    if (item.title === "Logout") {
      setModalVisible(true);
      setIsLogout(true);
    } else {
      router.push(item.to);
    }
  };
  const renderItem = ({ item }: any) => (
    <Pressable
      onPress={() => handleNavigation(item)}
      className="flex-row items-center py-4 bg-white border-b border-line-13 justify-between"
    >
      <View className="flex flex-row items-center space-x-2">
        <View className="w-10 h-10 bg-line-13 rounded-full flex items-center justify-center">
          <FontAwesome name={item.icon} size={20} color="#3b82f6" />
        </View>
        <Text className="text-primary font-poppins_bold ">{item.title}</Text>
      </View>
      <Entypo name="chevron-thin-right" size={15} color="#d1d5db" />
    </Pressable>
  );

  return (
    <View className="bg-gray-50">
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

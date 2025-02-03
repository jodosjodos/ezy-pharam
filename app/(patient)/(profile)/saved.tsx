import CheckModal from "@/components/Check-model";
import { images } from "@/constants";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Modal from "react-native-modal";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const handleCreatePassword = () => {
    if (password === confirmPassword && password.length > 0) {
      setModalVisible(true);
    } else {
      alert("Passwords do not match or are empty!");
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View>
        <Text>saved</Text>
      </View>
    </SafeAreaView>
  );
}

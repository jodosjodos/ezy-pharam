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
    <SafeAreaView className="flex-1 bg-gray-100">
      {/* Main Content */}
      <View className="flex-1 justify-center px-5">
        <Text className="text-2xl font-bold mb-2">Reset Password?</Text>
        <Text className="text-gray-500 mb-5">
          Create your new password to log in
        </Text>

        {/* Password Input */}
        <View className="mb-4">
          <TextInput
            secureTextEntry
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-300"
          />
        </View>

        {/* Confirm Password Input */}
        <View className="mb-6">
          <TextInput
            secureTextEntry
            placeholder="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            className="bg-white px-4 py-3 rounded-lg shadow-sm border border-gray-300"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          onPress={handleCreatePassword}
          className="bg-blue-500 py-4 rounded-lg shadow-md"
        >
          <Text className="text-center text-white font-bold">
            Create Password
          </Text>
        </TouchableOpacity>
      </View>

      {/* Modal */}
      <CheckModal
        image={images?.Logout}
        cancel={true}
        title="Are you sure to log out of your account ?"
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        fn={() => router.push("/(auth)/login")}
        button="Log Out"
      />
    </SafeAreaView>
  );
}

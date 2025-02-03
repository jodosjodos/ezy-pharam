import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const NotFoundPage = () => {
  const router = useRouter();

  const goHome = () => {
    router.push('/'); // Redirect to the home page
  };

  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <Text className="text-4xl font-bold text-red-600 mb-4">404</Text>
      <Text className="text-xl text-gray-600 mb-8">Page Not Found</Text>
      <TouchableOpacity onPress={goHome} className="bg-blue-500 px-6 py-3 rounded-lg">
        <Text className="text-white text-lg">Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundPage;

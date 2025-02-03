import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Hospital = () => {
  const { id } = useLocalSearchParams();
  return (
    <SafeAreaView>
      <View>
        <Text>okay</Text>
        <Text>{id}</Text>
      </View>
    </SafeAreaView>
  );
};

export default Hospital;

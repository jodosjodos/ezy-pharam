import React from "react";
import { Stack } from "expo-router";

const HospitalLayout = () => {
  //todo: do payment method page and my saved
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="[id]" options={{ headerShown: false }} />
    </Stack>
  );
};

export default HospitalLayout;

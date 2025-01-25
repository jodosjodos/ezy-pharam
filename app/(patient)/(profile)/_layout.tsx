import React from "react";
import { Stack } from "expo-router";

const ProfileLayout = () => {
  //todo: do payment method page and my saved 
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="edit" options={{ headerShown: false }} />
      <Stack.Screen name="faq" options={{ headerShown: false }} />
      <Stack.Screen name="payment" options={{ headerShown: false }} />
      <Stack.Screen name="saved" options={{ headerShown: false }} />
    </Stack>
  );
};

export default ProfileLayout;

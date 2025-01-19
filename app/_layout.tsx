import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import {Poppins_400Regular, Poppins_700Bold} from "@expo-google-fonts/poppins"
import { useEffect } from "react";
export default function RootLayout() {
  const [fontsLoaded,fontsErrors]=useFonts({
    Poppins_400Regular,Poppins_700Bold
  })
useEffect(()=>{
  if(fontsLoaded || fontsErrors){
    SplashScreen.hideAsync()
    if(fontsErrors){
      console.error("Fonts not loaded")
  }}
})
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(landing)" options={{
        headerShown: false
      }}/>
        <Stack.Screen name="(auth)" options={{
        headerShown: false
      }}/>
    </Stack>
  );
}

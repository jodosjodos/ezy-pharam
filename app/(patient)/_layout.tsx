import { useAccountTypeStore } from "@/store";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Tabs } from "expo-router";
import Ionicons from '@expo/vector-icons/Ionicons';
import Foundation from '@expo/vector-icons/Foundation';
const Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Foundation name="home" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="pharmacy"
        options={{
          title: "Pharmacy",
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="medicinebox" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="notification" options={{
        title: "Notification",
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="notifications-outline" size={size} color={color} />
        ),
      }} />
      <Tabs.Screen name="(profile)" options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="user" size={size} color={color} />
        ),
      }}/>
    </Tabs>
  );
};
export default Layout;

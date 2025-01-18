import { Stack } from "expo-router";

export default function LandingLayout() {
    return (
        <Stack>
            <Stack.Screen name="doctor" options={{
                headerShown:false
            }}/>
             <Stack.Screen name="location" options={{
                headerShown:false
            }}/>
        </Stack>
    )
}
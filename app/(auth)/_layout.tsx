import { Stack } from "expo-router";

export default function LandingLayout() {
    return (
        <Stack>
            <Stack.Screen name="signup" options={{
                headerShown:false
            }}/>
        </Stack>
    )
}
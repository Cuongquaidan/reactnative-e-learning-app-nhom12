import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name="index"></Stack.Screen>
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                }}
            ></Stack.Screen>
        </Stack>
    );
};

export default RootLayout;

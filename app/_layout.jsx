import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { CartProvider } from "@/context/CartContext";
const RootLayout = () => {
    return (
        <CartProvider>
            <Stack>
                <Stack.Screen name="index"></Stack.Screen>
                <Stack.Screen
                    name="(tabs)"
                    options={{
                        headerShown: false,
                    }}
                ></Stack.Screen>
            </Stack>
        </CartProvider>
    );
};

export default RootLayout;

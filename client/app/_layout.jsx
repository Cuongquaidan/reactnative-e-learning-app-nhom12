import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { CartProvider } from "../context/CartContext";

import ChatbotComponent from "../components/ChatbotComponent";
import { AuthProvider } from "../context/AuthContext";
const RootLayout = () => {
    return (
        <AuthProvider>
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
                <ChatbotComponent />
            </CartProvider>
        </AuthProvider>
    );
};

export default RootLayout;

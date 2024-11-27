import { View, Text } from "react-native";
import { Stack } from "expo-router";
import React from "react";
import { CartProvider } from "../context/CartContext";
import ChatbotComponent from "../components/ChatbotComponent";
import { AuthProvider } from "../context/AuthContext";
import { SavedProvider } from "../context/SaveContext";
import { MyCoursesProvider } from "../context/MyCoursesContext";
const RootLayout = () => {
    return (
        <AuthProvider>
            <CartProvider>
                <SavedProvider>
                    <MyCoursesProvider>
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
                    </MyCoursesProvider>
                </SavedProvider>
            </CartProvider>
        </AuthProvider>
    );
};

export default RootLayout;

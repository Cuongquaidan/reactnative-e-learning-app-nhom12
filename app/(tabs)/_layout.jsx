import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: "#4cc1ce",
                tabBarInactiveTintColor: "#595f69",
                tabBarLabelStyle: { fontSize: 14 },
                tabBarStyle: { height: 60 },
            }}
        >
            <Tabs.Screen
                name="home"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="home" size={28} color={color} />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="search"
                options={{
                    title: "Search",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="search1" size={28} color={color} />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="mycourses"
                options={{
                    title: "My Courses",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="book" size={28} color={color} />
                    ),
                }}
            ></Tabs.Screen>
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="user" size={28} color={color} />
                    ),
                }}
            ></Tabs.Screen>
        </Tabs>
    );
};

export default TabsLayout;

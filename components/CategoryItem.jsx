import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { router } from "expo-router";

const CategoryItem = ({ icon, bgColor, name }) => {
    return (
        <Pressable
            style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: Colors.lightGray,
                padding: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}
            onPress={() => router.push(`search-page/${name}`)}
        >
            <View
                style={{
                    backgroundColor: bgColor,
                    padding: 12,
                    borderRadius: 4,
                }}
            >
                {icon}
            </View>
            <Text
                style={{
                    color: Colors.primaryBlack,
                    padding: 20,
                    fontSize: 20,
                }}
            >
                {name}
            </Text>
        </Pressable>
    );
};

export default CategoryItem;

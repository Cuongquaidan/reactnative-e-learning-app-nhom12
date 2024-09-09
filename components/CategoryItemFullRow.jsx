import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
const CategoryItemFullRow = ({ icon, name }) => {
    return (
        <Pressable
            style={{
                flex: 1,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: Colors.lightGray,
                padding: 20,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",

                justifyContent: "space-between",
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                }}
            >
                <View
                    style={{
                        borderRadius: 4,
                    }}
                >
                    {icon}
                </View>
                <Text
                    style={{
                        color: Colors.primaryGray,

                        fontSize: 20,
                    }}
                >
                    {name}
                </Text>
            </View>
            <Ionicons
                name="chevron-forward"
                size={24}
                color={Colors.primaryGray}
            />
        </Pressable>
    );
};

export default CategoryItemFullRow;

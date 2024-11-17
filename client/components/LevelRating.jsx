import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
const LevelRating = ({ level, ...props }) => {
    return (
        <View
            style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderColor: Colors.primaryBlue,
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 30,
                alignSelf: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                minHeight: 45,
            }}
            {...props}
        >
            <AntDesign name="staro" size={18} color={Colors.primaryBlue} />
            <Text
                style={{
                    color: Colors.primaryBlue,
                    fontSize: 18,
                }}
            >
                {level}
            </Text>
        </View>
    );
};

export default LevelRating;

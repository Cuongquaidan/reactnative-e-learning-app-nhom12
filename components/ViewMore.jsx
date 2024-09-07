import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const ViewMore = ({ text = "View more", handleOnPress = () => {} }) => {
    return (
        <Pressable onPress={handleOnPress}>
            <Text style={{ color: Colors.primaryBlue, fontSize: 20 }}>
                {text}
            </Text>
        </Pressable>
    );
};

export default ViewMore;

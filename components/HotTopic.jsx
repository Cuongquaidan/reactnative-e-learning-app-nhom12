import { View, Text, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const HotTopic = ({ topic, ...props }) => {
    return (
        <Pressable
            {...props}
            style={{
                paddingHorizontal: 20,
                paddingVertical: 10,
                borderColor: Colors.primaryBlue,
                borderWidth: 1,
                borderStyle: "solid",
                borderRadius: 30,
                alignSelf: "flex-start",
            }}
        >
            <Text
                style={{
                    color: Colors.primaryBlue,
                }}
            >
                {topic}
            </Text>
        </Pressable>
    );
};

export default HotTopic;

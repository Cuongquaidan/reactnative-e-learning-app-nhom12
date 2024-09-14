import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const HotTopic = ({ topic }) => {
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
            }}
        >
            <Text
                style={{
                    color: Colors.primaryBlue,
                }}
            >
                {topic}
            </Text>
        </View>
    );
};

export default HotTopic;

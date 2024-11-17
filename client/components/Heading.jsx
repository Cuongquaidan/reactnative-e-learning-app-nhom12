import { View, Text } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";

const Heading = ({ title }) => {
    return (
        <View>
            <Text
                style={{
                    fontSize: 24,
                    fontWeight: 700,
                    color: Colors.primaryBlack,
                }}
            >
                {title}
            </Text>
        </View>
    );
};

export default Heading;

import { View, Text } from "react-native";
import React from "react";

import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../constants/Colors";
const Rating = ({ rating, numberRating }) => {
    return (
        <View style={{ flexDirection: "row", alignItems: "center" }}>
            <FontAwesome5 name="star" size={24} color={Colors.primaryYellow} />
            <Text> {rating}</Text>
            <Text
                style={{
                    color: Colors.primaryGray,
                    paddingHorizontal: 8,
                }}
            >
                ({numberRating})
            </Text>
        </View>
    );
};

export default Rating;

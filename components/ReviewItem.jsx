import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../constants/Colors";
const ReviewItem = ({ data, ...props }) => {
    let { userID, username, avatar, review, rating } = data;
    const renderStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <AntDesign
                    key={i}
                    name={i <= rating ? "star" : "staro"}
                    size={24}
                    color={Colors.primaryYellow}
                />
            );
        }
        return stars;
    };
    return (
        <View
            {...props}
            style={{
                backgroundColor: Colors.secondaryLightGray,
                padding: 20,
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 10,
                    }}
                >
                    <Avatar size={50} rounded source={{ uri: avatar }} />
                    <View>
                        <Text
                            style={{
                                color: "black",
                                fontSize: 20,
                                fontWeight: "bold",
                            }}
                        >
                            {username}
                        </Text>
                        <Text
                            style={{ color: Colors.primaryGray, fontSize: 18 }}
                        >
                            1 day ago
                        </Text>
                    </View>
                </View>
                <View style={{ flexDirection: "row" }}>
                    {renderStars(rating)}
                </View>
            </View>
            <View style={{ marginTop: 20 }}>
                <Text style={{ fontSize: 20, color: Colors.primaryGray }}>
                    {review}
                </Text>
            </View>
        </View>
    );
};

export default ReviewItem;

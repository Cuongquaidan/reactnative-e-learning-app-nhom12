import { View, Text, Pressable } from "react-native";
import React from "react";
import LevelRating from "../LevelRating";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import ViewMore from "../ViewMore";
const Reviews = ({ courseId }) => {
    const dataReview = [
        {
            userID: "1",
            username: "Cuong ne",
            review: "So good",
            rating: 4,
        },
        {
            userID: "2",
            username: "Tommy teo",
            review: "nice",
            rating: 5,
        },
        {
            userID: "3",
            username: "Ronaldo",
            review: "Not good for me",
            rating: 2,
        },
        {
            userID: "4",
            username: "Messi",
            review: "Omg so good",
            rating: 5,
        },
    ];
    const levelRating = ["All", 5, 4, 3, 2, 1];
    return (
        <View style={{ padding: 20 }}>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <AntDesign
                        name="staro"
                        size={40}
                        color={Colors.primaryYellow}
                    />
                    <Text style={{ fontSize: 26, fontWeight: 600 }}>
                        4.5 / 5
                    </Text>
                    <Text
                        style={{
                            color: Colors.primaryGray,
                            fontSize: 18,
                        }}
                    >
                        ( 1880+ reviews )
                    </Text>
                </View>
                <ViewMore text="View all"></ViewMore>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    gap: 10,
                    justifyContent: "center",
                    marginTop: 50,
                }}
            >
                {levelRating.map((item, index) => (
                    <LevelRating level={item} key={index}></LevelRating>
                ))}
            </View>
        </View>
    );
};

export default Reviews;

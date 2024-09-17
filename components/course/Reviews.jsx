import { View, Text } from "react-native";
import React from "react";

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
    return (
        <View>
            <Text>Reviews</Text>
        </View>
    );
};

export default Reviews;

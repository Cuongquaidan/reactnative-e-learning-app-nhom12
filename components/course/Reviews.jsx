import { View, Text, Pressable } from "react-native";
import React from "react";
import LevelRating from "../LevelRating";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Colors } from "../../constants/Colors";
import ViewMore from "../ViewMore";
import ReviewItem from "../ReviewItem";
const Reviews = ({ courseId }) => {
    const dataReview = [
        {
            userID: "1",
            username: "Cuong ne",
            avatar: "https://s.yimg.com/zb/imgv1/17548ebb-97f3-3d33-8131-6df0524d77c7/t_500x300",
            review: "So good",
            rating: 4,
        },
        {
            userID: "2",
            username: "Tommy teo",
            avatar: "https://images.pexels.com/photos/7935842/pexels-photo-7935842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            review: "nice",
            rating: 5,
        },
        {
            userID: "3",
            username: "Ronaldo",
            avatar: "https://tse4.mm.bing.net/th?id=OIP.1SoVuoVi0UX42EeCnDakOQHaEK&pid=Api&P=0&h=220",
            review: "Not good for me",
            rating: 2,
        },
        {
            userID: "4",
            username: "Messi",
            avatar: "https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ad8e1581c7cefd6/639f8c19c3165b4f6b65a8c8/Lionel_Messi_Argentina_2022.jpg",
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
            <View style={{ gap: 30, marginTop: 30 }}>
                {dataReview.map((item, index) => (
                    <ReviewItem data={item} key={index}></ReviewItem>
                ))}
            </View>
        </View>
    );
};

export default Reviews;

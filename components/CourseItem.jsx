import { View, Text, Image } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../constants/Colors";

const CourseItem = ({ course, isHorizontal = false }) => {
    const {
        id,
        title,
        desc,
        image,
        price,
        rating,
        numberRating,
        numberOfLessons,
    } = course;

    return (
        <View
            style={{
                padding: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: Colors.lightGray,
                maxWidth: isHorizontal ? "100%" : 350,
                marginRight: isHorizontal ? 0 : 40,
                marginVertical: 40,
                display: "flex",
                flexDirection: isHorizontal ? "row" : "colum",
                alignItems: "center",
                gap: isHorizontal ? 20 : 0,
            }}
        >
            <Image
                source={{ uri: image }}
                style={{
                    width: isHorizontal ? "25%" : "100%",
                    height: isHorizontal ? "90%" : 150,
                }}
            />
            <View
                style={{
                    marginTop: 40,
                    flexShrink: 1,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
                        }}
                    >
                        {title}
                    </Text>
                    <MaterialIcons
                        name="bookmark-outline"
                        size={36}
                        color="black"
                    />
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.primaryGray,
                        marginTop: 20,
                    }}
                    numberOfLines={2}
                >
                    {desc}
                </Text>
                <Text
                    style={{
                        marginTop: 20,
                        fontSize: 30,
                        color: Colors.primaryBlue,
                        fontWeight: 700,
                    }}
                >
                    ${price}
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        marginVertical: 10,
                    }}
                >
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <FontAwesome5
                            name="star"
                            size={24}
                            color={Colors.primaryYellow}
                        />
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
                    <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                    >
                        <Text
                            style={{
                                color: Colors.primaryGray,
                            }}
                        >
                            <Text style={{ color: Colors.primaryBlack }}>
                                {numberOfLessons}
                            </Text>{" "}
                            Lessons
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CourseItem;

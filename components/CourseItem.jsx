import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
import Rating from "./Rating";

const CourseItem = ({ course, isHorizontal = false, type = "overview" }) => {
    const router = useRouter();
    const dataCourseSample = {
        author: "Sara Weise",
        avatar: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        work: "UI/UX Designer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt officiis asperiores voluptates quisquam. Consequatur aut nulla quaerat velit explicabo unde saepe molestiae non nostrum exercitationem? Explicabo ex tempora voluptates! Laborum.",
        benefit: [
            "14 hours on-demand video",
            "Native teacher",
            "100% free document",
            "Full lifetime access",
            "Certificate of complete",
            "24/7 support",
        ],
        price: 59,
        discount: 20,
        courseName: "UX Foundation: Introduction to User Experience Design",
        slug: "UX-UI-foundation",
        rating: 4.5,
        numberRating: 1880,
        source: [
            {
                title: "I - Introduction",
                stt: 1,
                lessons: [
                    {
                        name: "Amet adipisicing consectetur",
                        stt: 1,
                        video: "udpJ0v9VOz4",
                        duration: 90,
                    },
                    {
                        name: "Adipisicing dolor amet occaeca",
                        stt: 2,
                        video: "KVHimR1vf0o",
                        duration: 90,
                    },
                ],
            },
            {
                title: "II - Plan for your UX research",
                stt: 2,
                lessons: [
                    {
                        name: "Exercitation elit incididunt esse",
                        stt: 1,
                        video: "Ak1lunhhxQM",
                        duration: 90,
                    },
                    {
                        name: "Duis esse ipsum laboru",
                        video: "I9XXCvvAc4A",
                        duration: 90,
                    },
                    {
                        name: "Labore minim reprehenderit pariaturea deserunta",
                        stt: 3,
                        video: "dctiUAs5i68",
                        duration: 90,
                    },
                ],
            },
            {
                title: "III - Conduct UX research",
                stt: 3,
                lessons: [],
            },
            {
                title: "IV - Articulate findings",
                stt: 4,
                lessons: [],
            },
        ],
    };
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
    const handleOnPress = () => {
        router.push({
            pathname: `${type}/`,
            params: {
                courseDetails: JSON.stringify(dataCourseSample),
            },
        });
    };

    return (
        <View
            key={id}
            style={{
                padding: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: Colors.lightGray,
                maxWidth: isHorizontal ? "100%" : 350,
                marginRight: isHorizontal ? 0 : 40,
                marginVertical: 30,
                display: "flex",
                flexDirection: isHorizontal ? "row" : "colum",
                alignItems: "center",
                gap: isHorizontal ? 20 : 0,
            }}
        >
            <Image
                source={{ uri: image }}
                style={{
                    width: isHorizontal ? "35%" : "100%",
                    height: isHorizontal ? "90%" : 150,
                    borderRadius: 8,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: Colors.lightGray,
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
                    <Pressable onPress={handleOnPress}>
                        <Text
                            style={{
                                fontSize: 26,
                                fontWeight: 700,
                            }}
                        >
                            {title}
                        </Text>
                    </Pressable>
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
                    <Rating
                        numberRating={numberRating}
                        rating={rating}
                    ></Rating>
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
                            </Text>
                            Lessons
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CourseItem;

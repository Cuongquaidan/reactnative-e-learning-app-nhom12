import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";
import Rating from "./Rating";
import { useAuthContext } from "../context/AuthContext";
import Constants from "expo-constants";
import { useSavedCoursesContext } from "../context/SaveContext";

const CourseItem = ({ course, isHorizontal = false, type = "overview" }) => {
    const router = useRouter();
    const { savedCourses, setSavedCourses } = useSavedCoursesContext();

    const {
        _id,
        title,
        discount,
        image,
        price,
        rating,
        numberRating,
        numberOfLessons,
        slug,
        desc,
    } = course;
    const { id } = useAuthContext();

    const handleOnPress = () => {
        router.push({
            pathname: `/${type}/${slug}`,
            params: {
                course: JSON.stringify(course),
            },
        });
    };

    const handleSaveCourse = async () => {
        try {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courseSaveds/course-saved`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        accountId: id,
                        course: course,
                    }),
                }
            );
            if (!response.ok) {
                const errorText = await response.text(); // Retrieve response body as text
                console.error(
                    `Response error: ${response.status} - ${errorText}`
                );
                return;
            }

            const data = await response.json();
            setSavedCourses(data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUnsave = async (courseId) => {
        try {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courseSaveds/unsave`,
                {
                    method: "PATCH",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        accountId: id,
                        courseId: courseId,
                    }),
                }
            );
            if (!response.ok) throw new Error("Error");
            const data = await response.json();
            setSavedCourses(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View
            key={_id}
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
                        name={
                            savedCourses?.courses?.some(
                                (item) => item._id === _id
                            )
                                ? "bookmark"
                                : "bookmark-outline"
                        }
                        size={36}
                        color={
                            savedCourses?.courses?.some(
                                (item) => item._id === _id
                            )
                                ? Colors.primaryBlue
                                : "black"
                        }
                        onPress={
                            savedCourses?.courses?.some(
                                (item) => item._id === _id
                            )
                                ? () => handleUnsave(_id)
                                : handleSaveCourse
                        }
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

import { View, FlatList, Text, Pressable, Image } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import Constants from "expo-constants";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useSavedCoursesContext } from "../context/SaveContext";
import { Colors } from "../constants/Colors";
import { useAuthContext } from "../context/AuthContext";

const SavedCourse = ({ courseId, type = "overview" }) => {
    const router = useRouter();
    const [course, setCourse] = useState();
    const { savedCourses, setSavedCourses } = useSavedCoursesContext();
    const { id } = useAuthContext();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    `${Constants.expoConfig.extra.API_PREFIX}/courses/${courseId}`
                );
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error(
                        `Response error: ${response.status} - ${errorText}`
                    );
                    return;
                }
                const data = await response.json();
                setCourse(data);
            } catch (error) {
                console.error(`Fetch data error: ${error}`);
            }
        };
        fetchData();
    }, []);

    const [courseDetail, setCourseDetail] = useState();
    useEffect(() => {
        try {
            const getCourseDetail = async () => {
                const response = await fetch(
                    `${Constants.expoConfig.extra.API_PREFIX}/courseDetails/${courseId}`
                );
                const data = await response.json();
                setCourseDetail(data);
            };
            getCourseDetail();
        } catch (error) {
            console.log(error);
        }
    }, [course]);

    const handleOnPress = () => {
        router.push({
            pathname: `/${type}/${course?.slug}`,
            params: {
                course: JSON.stringify(course),
            },
        });
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
            style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "center",
                padding: 10,
                borderColor: "#ccc",
                borderWidth: 1,
                borderRadius: 10,
            }}
        >
            <Image
                source={{ uri: course?.image }}
                style={{
                    width: 120,
                    height: 120,
                    borderRadius: 10,
                    resizeMode: "cover",
                }}
            />
            <View
                style={{
                    paddingStart: 10,
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                    }}
                >
                    <Text
                        style={{
                            flex: 1,
                            fontSize: 20,
                            fontWeight: 700,
                        }}
                        onPress={handleOnPress}
                    >
                        {course?.title}
                    </Text>
                    <MaterialIcons
                        name={"bookmark"}
                        size={36}
                        color={Colors.primaryBlue}
                        onPress={() => handleUnsave(courseId)}
                    />
                </View>
                <Text
                    style={{
                        fontSize: 15,
                        color: "#6D6D6D",
                    }}
                >
                    {courseDetail?.author}
                </Text>
                <Text
                    style={{
                        fontSize: 19,
                        fontWeight: 700,
                        color: "#00bcd5",
                        marginVertical: 5,
                    }}
                >
                    ${course?.price}
                </Text>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                    }}
                >
                    <EvilIcons name="star" size={20} color="#F5BF02" />
                    <Text>{course?.rating}</Text>
                    <Text
                        style={{
                            color: "#6D6D6D",
                            marginEnd: 20,
                            marginStart: 5,
                        }}
                    >
                        ({course?.numberRating})
                    </Text>
                    <Text>{course?.numberOfLessons}</Text>
                    <Text
                        style={{
                            color: "#6D6D6D",
                            marginStart: 5,
                        }}
                    >
                        lessons
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default SavedCourse;

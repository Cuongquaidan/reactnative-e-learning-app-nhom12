import { View, Image, Text, Pressable } from "react-native";
import React, { useEffect, useState } from "react";
import { Colors } from "../constants/Colors";
import Constants from "expo-constants";

const CourseProcess = ({ course }) => {
    const { courseId, process } = course;

    const [data, setData] = useState();

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
                setData(data);

            } catch (error) {
                console.error(`Fetch data error: ${error}`);
            }
        };
        fetchData();
    }, []);

    return (
        <Pressable
            style={{
                padding: 10,
                borderWidth: 1,
                borderColor: Colors.lightGray,
                borderRadius: 5,
                display: "flex",
            }}
        >
            <View
                style={{
                    flexDirection: "row",
                    height: 100,
                    gap: 10,
                }}
            >
                <Image
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 5,
                    }}
                    source={{ uri: data?.image }}
                />
                <View
                    style={{
                        justifyContent: "space-between",
                        flex: 1,
                        paddingHorizontal: 10,
                        paddingVertical: 5,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: 700,
                            }}
                        >
                            {data?.title}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: Colors.primaryGray,
                            }}
                            numberOfLines={1}
                        >
                            {data?.desc}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize: 16,
                                color: Colors.primaryGray,
                            }}
                        >
                            {process}% Complete
                        </Text>
                        <View
                            style={{
                                position: "relative",
                            }}
                        >
                            <View
                                style={{
                                    position: "absolute",
                                    width: "100%",
                                    backgroundColor: "#d0def7",
                                    height: 5,
                                    borderRadius: 10,
                                }}
                            ></View>
                            <View
                                style={{
                                    position: "absolute",
                                    width: `${process}%`,
                                    backgroundColor: Colors.primaryBlue,
                                    height: 5,
                                    borderRadius: 5,
                                }}
                            ></View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    );
};
export default CourseProcess;

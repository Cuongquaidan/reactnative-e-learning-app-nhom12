import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CourseDetailsOverview = () => {
    const { courseDetails } = useLocalSearchParams();
    console.log(courseDetails);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        paddingHorizontal: 20,
                        width: "90%",
                        marginHorizontal: "auto",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 24,
                            fontWeight: "700",
                            textAlign: "center",
                            paddingRight: 100,
                        }}
                    >
                        Course details
                    </Text>
                    <Pressable
                        style={{
                            position: "absolute",
                            right: 0,
                        }}
                    >
                        <MaterialIcons
                            name="bookmark-outline"
                            size={35}
                            color="black"
                        />
                    </Pressable>
                </View>
            ),
        });
    }, [navigation]);

    return (
        <View>
            <Text>CourseDetails</Text>
        </View>
    );
};

export default CourseDetailsOverview;

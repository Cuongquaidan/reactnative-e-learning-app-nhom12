import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const CourseDetails = () => {
    const { courseDetails } = useLocalSearchParams();
    console.log(courseDetails);
    return (
        <View>
            <Text>CourseDetails</Text>
        </View>
    );
};

export default CourseDetails;

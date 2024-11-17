import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import CourseItem from "../../components/CourseItem";
import Heading from "../../components/Heading";

const AllCourse = () => {
    const navigation = useNavigation();
    let { type } = useLocalSearchParams();
    const [dataCourses, setDataCourses] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                "https://673061bf66e42ceaf1601f49.mockapi.io/courses"
            );
            if (!response) throw new Error("Fetch courses failed");
            const resjson = await response.json();
            setDataCourses(resjson);
        };
        fetchData();
    }, []);
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
                        {type}
                    </Text>
                </View>
            ),
        });
    });
    return (
        <ScrollView>
            <View
                style={{
                    marginTop: 40,
                    padding: 40,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                    }}
                >
                    <Heading title={"Results"}></Heading>
                </View>

                {dataCourses &&
                    dataCourses?.length > 0 &&
                    dataCourses?.map((item) => (
                        <CourseItem
                            key={item.id}
                            course={item}
                            isHorizontal={true}
                        />
                    ))}
            </View>
        </ScrollView>
    );
};

export default AllCourse;

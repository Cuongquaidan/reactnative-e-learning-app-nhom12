import { View, Text, ScrollView } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import CourseItem from "../../components/CourseItem";
import Heading from "../../components/Heading";
let popularCourses = [
    {
        id: 1,
        title: "PHP in One Click",
        category: "Code",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
        image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 59,
        rating: 4.5,
        numberRating: 1233,
        numberOfLessons: 18,
    },
    {
        id: 2,
        title: "PHP in One Click",
        category: "Code",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
        image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 59,
        rating: 4.5,
        numberRating: 1233,
        numberOfLessons: 18,
    },
    {
        id: 3,
        title: "PHP in One Click",
        category: "Code",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
        image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 59,
        rating: 4.5,
        numberRating: 1233,
        numberOfLessons: 18,
    },
];
const AllCourse = () => {
    const navigation = useNavigation();
    let { type } = useLocalSearchParams();
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

                {popularCourses &&
                    popularCourses.length > 0 &&
                    popularCourses.map((item) => (
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

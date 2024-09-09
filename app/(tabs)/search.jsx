import {
    View,
    Text,
    ScrollView,
    FlatList,
    Pressable,
    TextInput,
} from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import Heading from "../../components/Heading";
import ViewMore from "../../components/ViewMore";
import CourseItem from "../../components/CourseItem";
import { Colors } from "../../constants/Colors";
const Search = () => {
    const popularCourses = [
        {
            id: 1,
            title: "PHP in One Click",
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
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
            image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            price: 59,
            rating: 4.5,
            numberRating: 1233,
            numberOfLessons: 18,
        },
    ];
    return (
        <ScrollView
            style={{
                padding: 40,
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 20,
                }}
            >
                <View
                    style={{
                        position: "relative",
                        flex: 1,
                    }}
                >
                    <Ionicons
                        name="search-sharp"
                        size={24}
                        color="black"
                        style={{
                            position: "absolute",
                            top: 18,
                            left: 20,
                            zIndex: 99,
                        }}
                    />
                    <TextInput
                        autoFocus={true}
                        style={{
                            backgroundColor: Colors.secondaryLightGray,
                            paddingHorizontal: 60,
                            paddingVertical: 16,
                            fontSize: 16,
                            borderRadius: 8,
                        }}
                        placeholder="Search course"
                    ></TextInput>
                </View>
                <Pressable
                    style={{
                        backgroundColor: Colors.primaryBlue,
                        padding: 16,
                        borderRadius: 4,
                        display: "flex",
                        flexDirection: "row",
                        gap: 10,
                        alignItems: "center",
                    }}
                >
                    <Ionicons name="filter" size={24} color="white" />
                    <Text
                        style={{
                            fontSize: 18,
                            color: "white",
                        }}
                    >
                        Filter
                    </Text>
                </Pressable>
            </View>
            {/* Recommend */}
            <View
                style={{
                    marginTop: 40,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Heading title={"Recommended for you"}></Heading>
                    <ViewMore></ViewMore>
                </View>
                <FlatList
                    data={popularCourses}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <CourseItem course={item}></CourseItem>
                    )}
                    horizontal={true}
                />
            </View>
        </ScrollView>
    );
};

export default Search;

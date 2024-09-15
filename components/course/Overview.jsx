import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useState } from "react";
import { Avatar, Button } from "@rneui/themed";
import { Colors } from "../../constants/Colors";
import Heading from "../Heading";
import ViewMore from "../ViewMore";
import CourseItem from "../CourseItem";
const Overview = ({ course }) => {
    const { author, avatar, work, desc, benefit, price, discount } = course;
    const [showMore, setShowMore] = useState(false);
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
            slug: "UX-UI-foundation",
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
            slug: "UX-UI-foundation",
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
            slug: "UX-UI-foundation",
        },
    ];
    return (
        <View>
            <View style={{ padding: 20 }}>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 20,
                        }}
                    >
                        <View>
                            <Avatar
                                size={60}
                                rounded
                                source={{ uri: avatar }}
                            />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20 }}>{author}</Text>
                            <Text
                                style={{
                                    color: Colors.primaryGray,
                                    fontSize: 18,
                                }}
                            >
                                {work}
                            </Text>
                        </View>
                    </View>
                    <Button title="Follow" color={Colors.primaryBlue} />
                </View>
                <View>
                    <View style={{ marginTop: 30 }}>
                        <Heading title={"Description"}></Heading>
                    </View>
                    <Text
                        style={{
                            marginTop: 20,
                            fontSize: 16,
                            color: Colors.primaryGray,
                        }}
                        numberOfLines={showMore ? 100 : 2}
                    >
                        {desc}
                    </Text>
                    {!showMore && (
                        <Pressable
                            onPress={() => setShowMore((showMore) => !showMore)}
                        >
                            <Text
                                style={{
                                    fontSize: 14,
                                    color: Colors.primaryBlue,
                                }}
                            >
                                Show more
                            </Text>
                        </Pressable>
                    )}
                </View>
                <View style={{ marginTop: 30 }}>
                    <Heading title={"Benefits"}></Heading>
                    {benefit.map((item, index) => (
                        <View key={index} style={{ padding: 5 }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontStyle: "italic",
                                    color: Colors.primaryPurple,
                                }}
                            >
                                {item}
                            </Text>
                        </View>
                    ))}
                </View>
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
                        <Heading title={"Courses that inspires"}></Heading>
                        <ViewMore></ViewMore>
                    </View>

                    {popularCourses.slice(0, 3).map((item) => (
                        <CourseItem
                            key={item.id}
                            course={item}
                            isHorizontal={true}
                        ></CourseItem>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default Overview;

import {
    View,
    Text,
    ScrollView,
    FlatList,
    Pressable,
    TextInput,
} from "react-native";
import React from "react";
import Heading from "../../components/Heading";
import ViewMore from "../../components/ViewMore";
import CourseItem from "../../components/CourseItem";
import { Colors } from "../../constants/Colors";
import HotTopic from "../../components/HotTopic";
import CategoryItemFullRow from "../../components/CategoryItemFullRow";
import Ionicons from "@expo/vector-icons/Ionicons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
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
    const hotTopics = [
        "Java",
        "SQL",
        "Javascript",
        "Python",
        "Digital marketing",
        "Photoshop",
        "Watercolor",
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
            {/* Hot topics */}
            <View
                style={{
                    marginTop: 30,
                }}
            >
                <Heading title={"Hot topics"}></Heading>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        rowGap: 20,
                        flexWrap: "wrap",
                        columnGap: 30,
                        marginTop: 30,
                    }}
                >
                    {hotTopics.map((item) => (
                        <HotTopic topic={item}></HotTopic>
                    ))}
                </View>
            </View>
            {/* Categories */}
            <View
                style={{
                    marginVertical: 30,
                }}
            >
                <Heading title={"Categories"}></Heading>
                <View
                    style={{
                        display: "flex",
                        marginTop: 30,
                        gap: 30,
                    }}
                >
                    <CategoryItemFullRow
                        icon={
                            <Ionicons
                                name="trending-up"
                                size={30}
                                color={Colors.primaryBlue}
                            />
                        }
                        name={"Business"}
                    ></CategoryItemFullRow>
                    <CategoryItemFullRow
                        icon={
                            <FontAwesome6
                                name="pen-nib"
                                size={30}
                                color={Colors.primaryPurple}
                            />
                        }
                        name={"Design"}
                    ></CategoryItemFullRow>
                    <CategoryItemFullRow
                        icon={
                            <MaterialIcons name="code" size={30} color="red" />
                        }
                        name={"Code"}
                    ></CategoryItemFullRow>
                    <CategoryItemFullRow
                        icon={
                            <MaterialCommunityIcons
                                name="file-document-outline"
                                size={30}
                                color="blue"
                            />
                        }
                        name={"Design"}
                    ></CategoryItemFullRow>
                    <CategoryItemFullRow
                        icon={
                            <MaterialIcons
                                name="video-camera-back"
                                size={30}
                                color={Colors.primaryPurple}
                            />
                        }
                        name={"Movie"}
                    ></CategoryItemFullRow>
                    <CategoryItemFullRow
                        icon={
                            <Fontisto
                                name="world-o"
                                size={24}
                                color={Colors.primaryBlue}
                            />
                        }
                        name={"Language"}
                    ></CategoryItemFullRow>
                </View>
            </View>
            {/* Recommend */}
            <View
                style={{
                    paddingVertical: 40,
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

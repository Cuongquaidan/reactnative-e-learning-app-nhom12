import {
    View,
    Text,
    ScrollView,
    FlatList,
    Pressable,
    TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
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
import { router } from "expo-router";
const Search = () => {
    const [searchKey, setSearchKey] = useState("");

    const [dataCourses, setDataCourses] = useState(null);
    const hotTopics = [
        "Java",
        "SQL",
        "Javascript",
        "Python",
        "Digital marketing",
        "Photoshop",
        "Watercolor",
    ];
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
                        value={searchKey}
                        onChangeText={(value) => setSearchKey(value)}
                        placeholder="Search course"
                    ></TextInput>
                </View>
                <Pressable
                    onPress={() => router.push(`/search-page/${searchKey}`)}
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
                    {hotTopics.map((item, index) => (
                        <HotTopic
                            onPress={() => {
                                router.push(`search-page/${item}`);
                            }}
                            topic={item}
                            key={index}
                        ></HotTopic>
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
                    <ViewMore
                        handleOnPress={() =>
                            router.push(`all-course/remembered`)
                        }
                    ></ViewMore>
                </View>
                <FlatList
                    data={dataCourses?.slice(0, 3)}
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

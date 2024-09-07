import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Colors } from "../../constants/Colors";
import BannerSales from "../../components/BannerSales";
import Heading from "../../components/Heading";
import ViewMore from "../../components/ViewMore";
import CategoryItem from "../../components/CategoryItem";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Fontisto from "@expo/vector-icons/Fontisto";
import CourseItem from "../../components/CourseItem";
const Home = () => {
    const saleOffer = {
        courseName: "PROJECT MANAGEMENT",
        percentSales: 20,
        slug: "",
        image: "",
    };
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
        <ScrollView>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    paddingVertical: 40,
                    paddingHorizontal: 30,
                    backgroundColor: Colors.primaryBlue,
                }}
            >
                <View>
                    <Text
                        style={{
                            color: Colors.primaryWhite,
                            fontSize: 24,
                            fontWeight: 700,
                        }}
                    >
                        Hello, Roise
                    </Text>
                    <Text
                        style={{
                            color: Colors.primaryWhite,
                            fontSize: 14,
                            fontWeight: 600,
                        }}
                    >
                        What do you want to learn today?
                    </Text>
                </View>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 30,
                    }}
                >
                    <Pressable>
                        <Ionicons
                            name="cart-outline"
                            size={30}
                            color={Colors.primaryWhite}
                        />
                    </Pressable>
                    <Pressable>
                        <Ionicons
                            name="notifications-outline"
                            size={30}
                            color={Colors.primaryWhite}
                        />
                    </Pressable>
                </View>
            </View>
            <BannerSales saleOffer={saleOffer}></BannerSales>
            {/* Categories */}

            <View
                style={{
                    padding: 40,
                }}
            >
                <View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Heading title={"Categories"}></Heading>
                        <ViewMore></ViewMore>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            gap: 30,
                            marginVertical: 30,
                        }}
                    >
                        <CategoryItem
                            icon={
                                <Ionicons
                                    name="trending-up"
                                    size={30}
                                    color="white"
                                />
                            }
                            bgColor={Colors.primaryBlue}
                            name={"Business"}
                        ></CategoryItem>
                        <CategoryItem
                            icon={
                                <FontAwesome6
                                    name="pen-nib"
                                    size={30}
                                    color="white"
                                />
                            }
                            bgColor={Colors.primaryPurple}
                            name={"Design"}
                        ></CategoryItem>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            gap: 30,
                            marginVertical: 30,
                        }}
                    >
                        <CategoryItem
                            icon={
                                <MaterialIcons
                                    name="code"
                                    size={30}
                                    color="white"
                                />
                            }
                            bgColor={"red"}
                            name={"Code"}
                        ></CategoryItem>
                        <CategoryItem
                            icon={
                                <MaterialCommunityIcons
                                    name="file-document-outline"
                                    size={30}
                                    color="white"
                                />
                            }
                            bgColor={"blue"}
                            name={"Design"}
                        ></CategoryItem>
                    </View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            width: "100%",
                            gap: 30,
                            marginVertical: 30,
                        }}
                    >
                        <CategoryItem
                            icon={
                                <MaterialIcons
                                    name="video-camera-back"
                                    size={30}
                                    color="white"
                                />
                            }
                            bgColor={Colors.primaryPurple}
                            name={"Movie"}
                        ></CategoryItem>
                        <CategoryItem
                            icon={
                                <Fontisto
                                    name="world-o"
                                    size={24}
                                    color="black"
                                />
                            }
                            bgColor={Colors.primaryBlue}
                            name={"Language"}
                        ></CategoryItem>
                    </View>
                </View>
                {/* Popular courses */}
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
                        <Heading title={"Popular courses"}></Heading>
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
            </View>
        </ScrollView>
    );
};

export default Home;

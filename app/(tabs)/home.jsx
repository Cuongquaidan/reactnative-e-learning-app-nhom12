import { View, Text, ScrollView, Pressable, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
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
import TeacherItem from "../../components/TeacherItem";
import { router } from "expo-router";
const Home = () => {
    const [dataCourses, setDataCourses] = useState(null);
    const saleOffer = {
        courseName: "PROJECT MANAGEMENT",
        percentSales: 20,
        slug: "",
        image: "",
    };
    // const dataCourses = [
    //     {
    //         id: 1,
    //         title: "PHP in One Click",
    //         category: "Code",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
    //         image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         price: 59,
    //         rating: 4.5,
    //         numberRating: 1233,
    //         numberOfLessons: 18,
    //         slug: "UX-UI-foundation",
    //     },
    //     {
    //         id: 2,
    //         title: "PHP in One Click",
    //         category: "Code",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
    //         image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         price: 59,
    //         rating: 4.5,
    //         numberRating: 1233,
    //         numberOfLessons: 18,
    //         slug: "UX-UI-foundation",
    //     },
    //     {
    //         id: 3,
    //         title: "PHP in One Click",
    //         category: "Code",
    //         desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
    //         image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    //         price: 59,
    //         rating: 4.5,
    //         numberRating: 1233,
    //         numberOfLessons: 18,
    //         slug: "UX-UI-foundation",
    //     },
    // ];
    const dataTeacher = [
        {
            id: 1,
            name: "Robert Lewandosky",
            desc: "IUH University",
            address: "HCM city",
            image: "https://images.pexels.com/photos/1181345/pexels-photo-1181345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            background:
                "https://images.pexels.com/photos/302743/pexels-photo-302743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.5,
            numberRating: 1999,
        },
        {
            id: 2,
            name: "Messi",
            desc: "IUH University",
            address: "HCM city",
            image: "https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            background:
                "https://images.pexels.com/photos/445109/pexels-photo-445109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.5,
            numberRating: 1999,
        },
        {
            id: 3,
            name: "Ronaldo",
            desc: "IUH University",
            address: "HCM city",
            image: "https://images.pexels.com/photos/39866/entrepreneur-startup-start-up-man-39866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            background:
                "https://images.pexels.com/photos/240561/pexels-photo-240561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.5,
            numberRating: 1999,
        },
        {
            id: 4,
            name: "Ronaldinho",
            desc: "IUH University",
            address: "HCM city",
            image: "https://images.pexels.com/photos/845457/pexels-photo-845457.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            background:
                "https://images.pexels.com/photos/1087735/pexels-photo-1087735.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            rating: 4.5,
            numberRating: 1999,
        },
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
                        <View></View>
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
                        <ViewMore
                            handleOnPress={() =>
                                router.push(`all-course/popular`)
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
                        <ViewMore
                            handleOnPress={() =>
                                router.push(`all-course/recommended`)
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
                {/* Courses that inspires */}
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
                        <ViewMore
                            handleOnPress={() =>
                                router.push(`all-course/inspires`)
                            }
                        ></ViewMore>
                    </View>
                    {/* <FlatList
                        data={dataCourses}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            
                        )}
                        initialNumToRender={3}
                    /> */}
                    {dataCourses?.slice(0, 3).map((item) => (
                        <CourseItem
                            key={item.id}
                            course={item}
                            isHorizontal={true}
                        ></CourseItem>
                    ))}
                </View>
                {/* Top Teacher */}
                <View>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Heading title={"Top teacher"}></Heading>
                        <ViewMore></ViewMore>
                    </View>
                    <FlatList
                        data={dataTeacher}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <TeacherItem teacherInfo={item}></TeacherItem>
                        )}
                        horizontal={true}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default Home;

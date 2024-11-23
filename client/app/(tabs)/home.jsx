import {
    View,
    Text,
    ScrollView,
    Pressable,
    FlatList,
    Image,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
import { useCartItems } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";
import Constants from "expo-constants";
const Home = () => {
    const { name, email } = useAuthContext();
    const [showCart, setShowCart] = useState(false);
    const [dataCourses, setDataCourses] = useState(null);
    const { cartItems, setCartItems } = useCartItems();
    console.log(cartItems);
    const [dataTeacher, setDataTeacher] = useState(null);
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

    useEffect(() => {
        //
        const fetchData = async () => {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courses`
            );
            if (!response) throw new Error("Fetch courses failed");
            const resjson = await response.json();
            console.log(resjson);
            setDataCourses(resjson);
        };
        fetchData();
        const fetchData1 = async () => {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/teachers`
            );
            if (!response) throw new Error("Fetch teachers failed");
            const resjson = await response.json();
            setDataTeacher(resjson);
        };
        fetchData1();
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
                    position: "relative",
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
                        Hello, {name}
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
                    <Pressable onPress={() => setShowCart((prev) => !prev)}>
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
                        keyExtractor={(item) => item._id}
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
                        keyExtractor={(item) => item._id}
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
                            key={item._id}
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
                        keyExtractor={(item) => item._id}
                        renderItem={({ item }) => (
                            <TeacherItem teacherInfo={item}></TeacherItem>
                        )}
                        horizontal={true}
                    />
                </View>
            </View>
            {showCart ? (
                <View
                    style={{
                        gap: 20,
                        backgroundColor: "white",
                        paddingVertical: 20,
                        position: "absolute",
                        width: 500,
                        left: 20,
                        top: 80,
                        borderRadius: 5,
                        borderColor: Colors.lightGray,
                        borderWidth: 2,
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {cartItems?.courses?.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                gap: 20,
                                padding: 5,
                                borderWidth: 1,
                                borderColor: Colors.lightGray,
                                borderRadius: 5,
                                width: "90%",
                                alignItems: "center",
                            }}
                        >
                            <View>
                                <Image
                                    source={{ uri: item.image }}
                                    style={{
                                        width: 60,
                                        height: 60,
                                        borderColor: Colors.lightGray,
                                        borderWidth: 1,
                                        borderRadius: 5,
                                    }}
                                ></Image>
                            </View>
                            <View style={{ flex: 1 }}>
                                <Text
                                    style={{
                                        color: "black",
                                        fontSize: 20,
                                        fontWeight: 700,
                                    }}
                                >
                                    {item?.title}
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        gap: 10,
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: Colors.primaryBlue,
                                            fontSize: 20,
                                            fontWeight: 700,
                                        }}
                                    >
                                        {item.price}$
                                    </Text>
                                </View>
                            </View>
                            <View style={{ padding: 10 }}>
                                <Pressable
                                    style={{
                                        padding: 10,
                                        backgroundColor: "pink",
                                    }}
                                >
                                    <Text
                                        style={{
                                            color: "red",
                                            fontWeight: 700,
                                        }}
                                    >
                                        remove
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    ))}
                    {cartItems?.courses?.length > 0 && (
                        <Pressable
                            style={{
                                padding: 15,
                                backgroundColor: Colors.primaryBlue,
                                width: 150,
                                borderRadius: 10,
                                cursor: "pointer",
                            }}
                        >
                            <Text
                                style={{
                                    color: "white",
                                    fontWeight: 700,
                                    fontSize: 20,
                                    textAlign: "center",
                                }}
                            >
                                Check out
                            </Text>
                        </Pressable>
                    )}

                    {cartItems?.courses?.length === 0 && (
                        <Text
                            style={{
                                textAlign: "center",
                                color: "gray",
                                padding: 10,
                            }}
                        >
                            No course in cart
                        </Text>
                    )}
                </View>
            ) : (
                <View></View>
            )}
        </ScrollView>
    );
};

export default Home;

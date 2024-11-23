import { View, Text, Pressable, ScrollView, Dimensions } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Tab, TabView } from "@rneui/themed";
import Rating from "../../components/Rating";
import { Colors } from "../../constants/Colors";
import Overview from "../../components/course/Overview";
import AntDesign from "@expo/vector-icons/AntDesign";
import Lessons from "../../components/course/Lessons";
import LevelRating from "../../components/LevelRating";
import Reviews from "../../components/course/Reviews";
import { useCartItems } from "../../context/CartContext";
import Constants from "expo-constants";
import { useAuthContext } from "../../context/AuthContext";

const CourseDetailsOverview = () => {
    const { cartItems, setCartItems } = useCartItems();
    const [indexTab, setIndexTab] = useState(0);
    const [tabHeights, setTabHeights] = useState([0, 0, 0]); // Để lưu chiều cao của từng tab
    const [contentHeight, setContentHeight] = useState(0);
    const [courseDetail, setCourseDetail] = useState(null);

    const { id } = useAuthContext();
    let { course } = useLocalSearchParams();
    course = JSON.parse(course);
    const [video, setVideo] = useState("sVZRk_c3yDA");
    const navigation = useNavigation();
    const router = useRouter();
    console.log(course);
    useEffect(() => {
        try {
            const getCourseDetail = async () => {
                const response = await fetch(
                    `${Constants.expoConfig.extra.API_PREFIX}/courseDetails/${course._id}`
                );
                const data = await response.json();
                setCourseDetail(data);
            };
            getCourseDetail();
        } catch (error) {
            console.log(error);
        }
    }, []);

    const handleAddToCart = async () => {
        try {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/carts/addCourse/${id}`,
                {
                    method: "patch",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify({
                        course: course,
                        accountId: id,
                    }),
                }
            );
            if (!response.ok) {
                const errorText = await response.text(); // Retrieve response body as text
                console.error(
                    `Response error: ${response.status} - ${errorText}`
                );
                return;
            }
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.log(error);
        }
    };

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
                        Course details
                    </Text>
                    <Pressable
                        style={{
                            position: "absolute",
                            right: 0,
                        }}
                    >
                        <MaterialIcons
                            name="bookmark-outline"
                            size={35}
                            color="black"
                        />
                    </Pressable>
                </View>
            ),
        });
        setVideo("sVZRk_c3yDA");
    }, [navigation]);

    const onTabLayout = (event, tabIndex) => {
        const { height } = event.nativeEvent.layout;
        const updatedHeights = [...tabHeights];
        updatedHeights[tabIndex] = height;
        setTabHeights(updatedHeights);
        setContentHeight(updatedHeights[indexTab]); // Cập nhật chiều cao hiện tại
    };

    useEffect(() => {
        setContentHeight(tabHeights[indexTab]); // Khi tab thay đổi, cập nhật chiều cao tương ứng
    }, [indexTab, tabHeights]);

    return (
        courseDetail && (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        {/* Video */}
                        <YoutubePlayer
                            height={350}
                            play={false}
                            videoId={video}
                        />

                        <View
                            style={{
                                padding: 20,
                            }}
                        >
                            <View>
                                <Pressable
                                    onPress={() => {
                                        router.push({
                                            pathname: `/course-details/${courseDetail?.slug}`,
                                            params: {
                                                courseDetail:
                                                    JSON.stringify(
                                                        courseDetail
                                                    ),
                                            },
                                        });
                                    }}
                                >
                                    <Text
                                        style={{
                                            fontSize: 26,
                                            fontWeight: "700",
                                            color: "#000",
                                        }}
                                    >
                                        {courseDetail?.courseName}
                                    </Text>
                                </Pressable>
                                <View
                                    style={{
                                        marginTop: 20,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 20,
                                    }}
                                >
                                    <Rating
                                        numberRating={
                                            courseDetail?.numberRating
                                        }
                                        rating={courseDetail?.rating}
                                    />
                                    <View
                                        style={{ flexDirection: "row", gap: 5 }}
                                    >
                                        <Text
                                            style={{
                                                color: Colors.primaryBlack,
                                            }}
                                        >
                                            {courseDetail?.source?.length}
                                        </Text>
                                        <Text
                                            style={{
                                                color: Colors.primaryGray,
                                            }}
                                        >
                                            lessons
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                        {/* Tabs */}
                        <View style={{ flex: 1 }}>
                            <Tab
                                value={indexTab}
                                onChange={(e) => setIndexTab(e)}
                                indicatorStyle={{
                                    backgroundColor: Colors.primaryBlue,
                                    height: 3,
                                }}
                                style={{
                                    borderBottomColor: Colors.lightGray,
                                    borderBottomWidth: 1,
                                }}
                            >
                                <Tab.Item
                                    title="OVERVIEW"
                                    titleStyle={{
                                        fontSize: 20,
                                        color:
                                            indexTab === 0
                                                ? Colors.primaryBlue
                                                : Colors.primaryGray,
                                    }}
                                />
                                <Tab.Item
                                    title="LESSONS"
                                    titleStyle={{
                                        fontSize: 20,
                                        color:
                                            indexTab === 1
                                                ? Colors.primaryBlue
                                                : Colors.primaryGray,
                                    }}
                                />
                                <Tab.Item
                                    title="REVIEW"
                                    titleStyle={{
                                        fontSize: 20,
                                        color:
                                            indexTab === 2
                                                ? Colors.primaryBlue
                                                : Colors.primaryGray,
                                    }}
                                />
                            </Tab>

                            <TabView
                                value={indexTab}
                                onChange={setIndexTab}
                                animationType="spring"
                                containerStyle={{
                                    height: contentHeight || 500,
                                }} // Cập nhật chiều cao động
                            >
                                <TabView.Item style={{ width: "100%" }}>
                                    <View
                                        onLayout={(event) =>
                                            onTabLayout(event, 0)
                                        }
                                    >
                                        <Overview course={courseDetail} />
                                    </View>
                                </TabView.Item>

                                <TabView.Item style={{ width: "100%" }}>
                                    <View
                                        onLayout={(event) =>
                                            onTabLayout(event, 1)
                                        }
                                    >
                                        <Lessons
                                            data={courseDetail}
                                            lessonOnPress={setVideo}
                                        />
                                    </View>
                                </TabView.Item>

                                <TabView.Item style={{ width: "100%" }}>
                                    <View
                                        onLayout={(event) =>
                                            onTabLayout(event, 2)
                                        }
                                    >
                                        <Reviews></Reviews>
                                    </View>
                                </TabView.Item>
                            </TabView>
                        </View>
                    </View>
                </ScrollView>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        borderTopColor: Colors.lightGray,
                        borderTopWidth: 2,
                        borderStyle: "solid",
                        padding: 20,
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize: 28,
                                fontWeight: 900,
                                color: Colors.primaryBlue,
                            }}
                        >
                            {(
                                (courseDetail?.price *
                                    (100 - courseDetail?.discount)) /
                                100
                            ).toFixed(2)}{" "}
                            $
                        </Text>
                        <View style={{ flexDirection: "row", gap: 10 }}>
                            <Text
                                style={{
                                    textDecorationLine: "line-through",
                                    color: Colors.primaryGray,
                                    fontSize: 16,
                                }}
                            >
                                {courseDetail?.price}$
                            </Text>
                            <Text
                                style={{
                                    color: Colors.primaryGray,
                                    fontSize: 16,
                                }}
                            >
                                discount: {courseDetail?.discount} %
                            </Text>
                        </View>
                    </View>
                    <View>
                        <Button
                            title={
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap: 10,
                                    }}
                                >
                                    <AntDesign
                                        name="shoppingcart"
                                        size={24}
                                        color="white"
                                    />
                                    <Text
                                        style={{ fontSize: 20, color: "white" }}
                                    >
                                        Add to cart
                                    </Text>
                                </View>
                            }
                            color={Colors.primaryBlue}
                            radius={5}
                            size="lg"
                            onPress={() => {
                                handleAddToCart();
                            }}
                        />
                    </View>
                </View>
            </View>
        )
    );
};

export default CourseDetailsOverview;

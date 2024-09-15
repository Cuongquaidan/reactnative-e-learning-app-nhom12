import { View, Text, Pressable, ScrollView } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import YoutubePlayer from "react-native-youtube-iframe";
import { Button, Tab, TabView } from "@rneui/themed";
import Rating from "../../components/Rating";
import { Colors } from "../../constants/Colors";
import Overview from "../../components/course/Overview";
import AntDesign from "@expo/vector-icons/AntDesign";
import Lessons from "../../components/course/Lessons";
const CourseDetailsOverview = () => {
    const [indexTab, setIndexTab] = React.useState(0);
    let { courseDetails } = useLocalSearchParams();
    courseDetails = JSON.parse(courseDetails);
    const [video, setVideo] = useState("zC0tnUyfol0");
    const navigation = useNavigation();
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
        setVideo("zC0tnUyfol0");
    }, [navigation]);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {/* Video */}
                    <YoutubePlayer height={350} play={false} videoId={video} />

                    <View
                        style={{
                            padding: 20,
                        }}
                    >
                        <View>
                            <Text
                                style={{
                                    fontSize: 26,
                                    fontWeight: "700",
                                    color: "#000",
                                }}
                            >
                                {courseDetails.courseName}
                            </Text>
                            <View
                                style={{
                                    marginTop: 20,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 20,
                                }}
                            >
                                <Rating
                                    numberRating={courseDetails.numberRating}
                                    rating={courseDetails.rating}
                                />
                                <View style={{ flexDirection: "row", gap: 5 }}>
                                    <Text
                                        style={{ color: Colors.primaryBlack }}
                                    >
                                        {courseDetails.source.length}
                                    </Text>
                                    <Text style={{ color: Colors.primaryGray }}>
                                        lessons
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    {/* Tabs */}
                    <Tab
                        value={indexTab}
                        onChange={(e) => setIndexTab(e)}
                        indicatorStyle={{
                            backgroundColor: Colors.primaryBlue,
                            height: 3,
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

                    <View style={{ minHeight: 1800 }}>
                        <TabView
                            value={indexTab}
                            onChange={setIndexTab}
                            animationType="spring"
                        >
                            <TabView.Item style={{ width: "100%" }}>
                                <Overview course={courseDetails} />
                            </TabView.Item>

                            <TabView.Item style={{ width: "100%" }}>
                                <Lessons
                                    data={courseDetails}
                                    lessonOnPress={setVideo}
                                ></Lessons>
                            </TabView.Item>

                            <TabView.Item style={{ width: "100%" }}>
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "bold",
                                    }}
                                >
                                    Reviews
                                </Text>
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
                            (courseDetails.price *
                                (100 - courseDetails.discount)) /
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
                            {courseDetails.price}$
                        </Text>
                        <Text
                            style={{ color: Colors.primaryGray, fontSize: 16 }}
                        >
                            discount: {courseDetails.discount} %
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
                                <Text style={{ fontSize: 20, color: "white" }}>
                                    Add to cart
                                </Text>
                            </View>
                        }
                        color={Colors.primaryBlue}
                        radius={5}
                        size="lg"
                    />
                </View>
            </View>
        </View>
    );
};

export default CourseDetailsOverview;

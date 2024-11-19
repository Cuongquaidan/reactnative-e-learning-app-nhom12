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
import Projects from "../../components/course/Projects";
import QAndA from "../../components/course/QAndA";
const CourseDetails = () => {
    let { courseDetail } = useLocalSearchParams();
    courseDetail = JSON.parse(courseDetail);
    const navigation = useNavigation();
    const router = useRouter();
    const [video, setVideo] = useState("sVZRk_c3yDA");
    const [indexTab, setIndexTab] = useState(0);
    const [tabHeights, setTabHeights] = useState([0, 0, 0]); // Để lưu chiều cao của từng tab
    const [contentHeight, setContentHeight] = useState(0);
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
                        numberOfLines={1}
                    >
                        {courseDetail?.courseName}
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
                            <Pressable
                                onPress={() => {
                                    router.push({
                                        pathname: `/course-details/${courseDetail?.slug}`,
                                        params: {
                                            courseDetail:
                                                JSON.stringify(courseDetail),
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
                                    numberRating={courseDetail?.numberRating}
                                    rating={courseDetail?.rating}
                                />
                                <View style={{ flexDirection: "row", gap: 5 }}>
                                    <Text
                                        style={{ color: Colors.primaryBlack }}
                                    >
                                        {courseDetail?.source?.length}
                                    </Text>
                                    <Text style={{ color: Colors.primaryGray }}>
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
                                title="LESSONS"
                                titleStyle={{
                                    fontSize: 20,
                                    color:
                                        indexTab === 0
                                            ? Colors.primaryBlue
                                            : Colors.primaryGray,
                                }}
                            />
                            <Tab.Item
                                title="PROJECTS"
                                titleStyle={{
                                    fontSize: 20,
                                    color:
                                        indexTab === 1
                                            ? Colors.primaryBlue
                                            : Colors.primaryGray,
                                }}
                            />
                            <Tab.Item
                                title="Q&A"
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
                            containerStyle={{ height: contentHeight || 500 }} // Cập nhật chiều cao động
                        >
                            <TabView.Item style={{ width: "100%" }}>
                                <View
                                    onLayout={(event) => onTabLayout(event, 0)}
                                >
                                    <Lessons
                                        data={courseDetail}
                                        lessonOnPress={setVideo}
                                    />
                                </View>
                            </TabView.Item>

                            <TabView.Item style={{ width: "100%" }}>
                                <View
                                    onLayout={(event) => onTabLayout(event, 1)}
                                >
                                    <Projects></Projects>
                                </View>
                            </TabView.Item>

                            <TabView.Item style={{ width: "100%" }}>
                                <View
                                    onLayout={(event) => onTabLayout(event, 2)}
                                >
                                    <QAndA></QAndA>
                                </View>
                            </TabView.Item>
                        </TabView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default CourseDetails;

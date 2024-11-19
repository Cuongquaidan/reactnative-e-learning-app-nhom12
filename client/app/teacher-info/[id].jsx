import { View, Text, Image, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { Colors } from "../../constants/Colors";
import { FontAwesome5, MaterialIcons } from "@expo/vector-icons";
import Reviews from "../../components/course/Reviews";
import Overview from "../../components/course/Overview";
import { Tab, TabView } from "@rneui/themed";
import CourseItem from "../../components/CourseItem";
import Constants from "expo-constants";
const TeacherInfo = () => {
    const [dataCourses, setDataCourses] = useState(null);
    const [indexTab, setIndexTab] = useState(0);
    const [tabHeights, setTabHeights] = useState([0, 0, 0]);
    const [contentHeight, setContentHeight] = useState(0);
    let { teacherInfo } = useLocalSearchParams();
    teacherInfo = JSON.parse(teacherInfo);

    const navigation = useNavigation();
    const router = useRouter();
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
                        Teacher's profile
                    </Text>
                </View>
            ),
        });
    }, [navigation]);
    const onTabLayout = (event, tabIndex) => {
        const { height } = event.nativeEvent.layout;
        const updatedHeights = [...tabHeights];
        updatedHeights[tabIndex] = height;
        setTabHeights(updatedHeights);
        setContentHeight(updatedHeights[indexTab]);
    };

    useEffect(() => {
        setContentHeight(tabHeights[indexTab]);
    }, [indexTab, tabHeights]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courses/author/${teacherInfo._id}`
            );
            if (!response) throw new Error("Fetch courses failed");
            const resjson = await response.json();
            setDataCourses(resjson);
        };
        fetchData();
    }, []);
    return (
        <ScrollView style={{ flex: 1 }}>
            <View
                style={{
                    height: 500,
                    position: "relative",
                }}
            >
                <Image
                    style={{ height: "50%", width: "100%" }}
                    source={{ uri: teacherInfo.background }}
                ></Image>
                <Image
                    source={{ uri: teacherInfo.image }}
                    style={{
                        width: 150,
                        height: 150,
                        borderRadius: 999,
                        borderWidth: 2,
                        borderColor: Colors.lightGray,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: [{ translateX: -75 }, { translateY: -75 }],
                    }}
                ></Image>

                <View
                    style={{
                        paddingTop: 100,
                        flexShrink: 1,
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
                        }}
                    >
                        {teacherInfo.name}
                    </Text>

                    <Text
                        style={{
                            fontSize: 16,
                            color: Colors.primaryGray,
                            marginTop: 20,
                        }}
                    >
                        {teacherInfo.address}
                    </Text>
                    <View
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            gap: 5,
                            marginVertical: 10,
                        }}
                    >
                        <FontAwesome5
                            name="star"
                            size={24}
                            color={Colors.primaryYellow}
                        />
                        <Text> {teacherInfo.rating}</Text>
                        <Text
                            style={{
                                color: Colors.primaryGray,
                                paddingHorizontal: 8,
                            }}
                        >
                            ({teacherInfo.numberRating})
                        </Text>
                    </View>
                </View>
            </View>
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
                        title="COURSES"
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
                    containerStyle={{ height: contentHeight || 500 }} // Cập nhật chiều cao động
                >
                    <TabView.Item style={{ width: "100%" }}>
                        <View onLayout={(event) => onTabLayout(event, 0)}>
                            <Text
                                style={{
                                    padding: 40,
                                    fontSize: 18,
                                    height: 600,
                                }}
                            >
                                Hello everyone, My name is{" "}
                                <Text style={{ fontWeight: 700 }}>
                                    {teacherInfo.name}
                                </Text>
                                , and I am thrilled to introduce myself to you.
                                I hold a [degree name, e.g., Master's Degree] in{" "}
                                {teacherInfo.address} from {teacherInfo.desc},
                                where I honed my skills and deepened my
                                understanding of [subject area, e.g., language
                                and literature].
                                {"\n"} {"\n"}
                                With over 10 years of teaching experience, I
                                have had the privilege of working with students
                                of various ages and backgrounds. My journey as
                                an educator has taught me that every student is
                                unique and learns differently, so I strive to
                                create an inclusive and engaging learning
                                environment that caters to all learning styles.
                                {"\n"} {"\n"}I am passionate about helping
                                students unlock their full potential and guiding
                                them in discovering their strengths and
                                interests. My goal is to inspire a love for
                                learning and to equip each student with the
                                skills they need for success both in and out of
                                the classroom. Thank you for allowing me to be
                                part of your educational journey!
                            </Text>
                        </View>
                    </TabView.Item>

                    <TabView.Item style={{ width: "100%" }}>
                        <View onLayout={(event) => onTabLayout(event, 1)}>
                            <View style={{ padding: 20 }}>
                                {dataCourses?.map((item, index) => (
                                    <CourseItem
                                        course={item}
                                        key={index}
                                        isHorizontal={true}
                                    ></CourseItem>
                                ))}
                            </View>
                        </View>
                    </TabView.Item>

                    <TabView.Item style={{ width: "100%" }}>
                        <View onLayout={(event) => onTabLayout(event, 2)}>
                            <Reviews></Reviews>
                        </View>
                    </TabView.Item>
                </TabView>
            </View>
        </ScrollView>
    );
};

export default TeacherInfo;

import { View, Text, SafeAreaView, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import BannerSales from "../../components/BannerSales";
import CourseProcess from "../../components/CourseProcessItem";
import { Colors } from "../../constants/Colors";
import { Tab } from "@rneui/themed";
import Constants from "expo-constants";
import { useAuthContext } from "../../context/AuthContext";
import { useMyCourses } from "../../context/MyCoursesContext";

const Mycourses = () => {
    const [indexTab, setIndexTab] = React.useState(0);
    const { myCourses } = useMyCourses();

    const filterCoursesByTab = () => {
        if (Array.isArray(myCourses)) {
            switch (indexTab) {
                case 1: // ON GOING
                    return myCourses.filter(
                        (course) => parseInt(course.process) < 100
                    );
                case 2: // COMPLETED
                    return myCourses.filter(
                        (course) => parseInt(course.process) === 100
                    );
                default: // ALL
                    return myCourses;
            }
        } else {
            return []; // Trả về mảng rỗng nếu `myCourses` không hợp lệ
        }
    };
    const saleOffer = {
        courseName: "PROJECT MANAGEMENT",
        percentSales: 20,
        slug: "",
        image: "",
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View
                style={{
                    alignItems: "center",
                    justifyContent: "center",
                    paddingVertical: 25,
                }}
            >
                <Text style={{ fontSize: 28, fontWeight: "600" }}>
                    My Courses
                </Text>
            </View>
            <BannerSales saleOffer={saleOffer} />
            <View
                style={{ paddingHorizontal: 35, paddingVertical: 10, flex: 1 }}
            >
                <Tab
                    value={indexTab}
                    onChange={(selectedTab) => setIndexTab(selectedTab)}
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
                        title="ALL"
                        titleStyle={{
                            fontSize: 20,
                            color:
                                indexTab === 0
                                    ? Colors.primaryBlue
                                    : Colors.primaryGray,
                        }}
                    />
                    <Tab.Item
                        title="ON GOING"
                        titleStyle={{
                            fontSize: 20,
                            color:
                                indexTab === 1
                                    ? Colors.primaryBlue
                                    : Colors.primaryGray,
                        }}
                    />
                    <Tab.Item
                        title="COMPLETED"
                        titleStyle={{
                            fontSize: 20,
                            color:
                                indexTab === 2
                                    ? Colors.primaryBlue
                                    : Colors.primaryGray,
                        }}
                    />
                </Tab>
                <FlatList
                    data={filterCoursesByTab()}
                    keyExtractor={(item) => item?.courseId?.toString()}
                    renderItem={({ item }) => <CourseProcess course={item} />}
                    ItemSeparatorComponent={
                        <View style={{ height: 15 }}></View>
                    }
                    style={{
                        marginTop: 10,
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Mycourses;

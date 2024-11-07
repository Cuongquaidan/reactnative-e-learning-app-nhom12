import { View, Text, FlatList } from "react-native";
import React from "react";
import BannerSales from "../../components/BannerSales";
import CourseProcessList from "../../components/CourseProcessList";

const Mycourses = () => {
    const saleOffer = {
        courseName: "PROJECT MANAGEMENT",
        percentSales: 20,
        slug: "",
        image: "",
    };
    const courseList = [
        {
            id: 1,
            courseName: 'java1',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '2hrs 30mins',
            courseProcess: '50'
        },
        {
            id: 2,
            courseName: 'java2',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '2hrs 40mins',
            courseProcess: '10'
        },
        {
            id: 3,
            courseName: 'java3',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '5hrs 30mins',
            courseProcess: '100'
        },
        {
            id: 4,
            courseName: 'java4',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '1hrs 44mins',
            courseProcess: '60'
        }
    ];

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <View
                        style={{
                            alignItems: "center",
                            justifyContent: "center",
                            paddingVertical: 25
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 28,
                                fontWeight: "600"
                            }}
                        >
                            My Courses
                        </Text>
                    </View>
                    <BannerSales saleOffer={saleOffer} />
                </View>
            )}
            data={courseList}
            renderItem={({ item }) => (
                <View style={{ paddingHorizontal: 20 }}>
                    <CourseProcessList courseList={[item]} />
                </View>
            )}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={{ paddingBottom: 20 }}
        />
    );
};

export default Mycourses;

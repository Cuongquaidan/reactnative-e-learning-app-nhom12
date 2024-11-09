import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import CourseItem from "../../components/CourseItem";
import ViewMore from "../../components/ViewMore";
import Heading from "../../components/Heading";
let popularCourses = [
    {
        id: 1,
        title: "PHP in One Click",
        category: "Code",
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
        category: "Code",
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
        category: "Code",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, blanditiis nemo necessitatibus nulla tempore a recusandae eligendi qui labore rem quibusdam deserunt veniam accusamus hic mollitia perspiciatis enim. Ex, sequi!",
        image: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        price: 59,
        rating: 4.5,
        numberRating: 1233,
        numberOfLessons: 18,
    },
];
const SearchPage = () => {
    const [data, setData] = useState(null);
    let { "search-key": searchKey } = useLocalSearchParams();
    const navigation = useNavigation();
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <View></View>,
        });
    });
    useEffect(() => {
        const filteredData = popularCourses.filter(
            (item) =>
                item.title.toLowerCase().includes(searchKey.toLowerCase()) ||
                item.category.toLowerCase().includes(searchKey.toLowerCase()) ||
                item.desc.toLowerCase().includes(searchKey.toLowerCase())
        );
        setData(filteredData);
    }, [searchKey]);
    return (
        <ScrollView>
            <View
                style={{
                    marginTop: 40,
                    padding: 40,
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }}
                >
                    <Heading title={"Results"}></Heading>
                    <ViewMore></ViewMore>
                </View>

                {data && data.length > 0 ? (
                    data
                        .slice(0, 3)
                        .map((item) => (
                            <CourseItem
                                key={item.id}
                                course={item}
                                isHorizontal={true}
                            />
                        ))
                ) : (
                    <Text
                        style={{
                            marginLeft: "auto",
                            marginRight: "auto",
                            padding: 30,
                            fontSize: 20,
                        }}
                    >
                        No results for :"{searchKey}"
                    </Text>
                )}
            </View>
        </ScrollView>
    );
};

export default SearchPage;

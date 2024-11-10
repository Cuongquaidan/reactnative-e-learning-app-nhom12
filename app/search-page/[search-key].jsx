import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import CourseItem from "../../components/CourseItem";
import ViewMore from "../../components/ViewMore";
import Heading from "../../components/Heading";

const SearchPage = () => {
    const [data, setData] = useState(null);
    const [showMore, setShowMore] = useState(false);
    let { "search-key": searchKey } = useLocalSearchParams();
    const navigation = useNavigation();
    const [dataCourses, setDataCourses] = useState(null);

    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => <View></View>,
        });
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(
                    "https://673061bf66e42ceaf1601f49.mockapi.io/courses"
                );
                if (!response.ok) throw new Error("Fetch courses failed");
                const resjson = await response.json();
                const filteredData = resjson.filter(
                    (item) =>
                        item.title
                            .toLowerCase()
                            .includes(searchKey.toLowerCase()) ||
                        item.category
                            .toLowerCase()
                            .includes(searchKey.toLowerCase()) ||
                        item.desc
                            .toLowerCase()
                            .includes(searchKey.toLowerCase())
                );
                setDataCourses(resjson); // Store the full data set if needed
                setData(filteredData); // Store the filtered data
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
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
                    {data && data.length > 3 && (
                        <ViewMore
                            handleOnPress={() => {
                                setShowMore((prev) => !prev);
                            }}
                        ></ViewMore>
                    )}
                </View>

                {data && data.length > 0 ? (
                    showMore ? (
                        data.map((item) => (
                            <CourseItem
                                key={item.id}
                                course={item}
                                isHorizontal={true}
                            />
                        ))
                    ) : (
                        data
                            .slice(0, 3)
                            .map((item) => (
                                <CourseItem
                                    key={item.id}
                                    course={item}
                                    isHorizontal={true}
                                />
                            ))
                    )
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

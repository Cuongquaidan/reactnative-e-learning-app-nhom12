import { View, Text, Pressable } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import YoutubePlayer from "react-native-youtube-iframe";
import { Tab } from "@rneui/themed";
import Rating from "../../components/Rating";
import { Colors } from "../../constants/Colors";
const CourseDetailsOverview = () => {
    const [indexTab, setIndexTab] = React.useState(0);
    let { courseDetails } = useLocalSearchParams();
    courseDetails = JSON.parse(courseDetails);
    console.log(courseDetails);
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
    }, [navigation]);

    return (
        <View>
            <YoutubePlayer height={350} play={false} videoId={"zC0tnUyfol0"} />
            <View
                style={{
                    padding: 20,
                }}
            >
                <View>
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
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
                        ></Rating>
                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <Text style={{ color: Colors.primaryBlack }}>
                                {courseDetails.source.length}
                            </Text>
                            <Text style={{ color: Colors.primaryGray }}>
                                lessons
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default CourseDetailsOverview;

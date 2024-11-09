import {
    View,
    Text,
    StyleSheet,
    Pressable,
    Animated,
    Dimensions,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Colors } from "../constants/Colors";
import Entypo from "@expo/vector-icons/Entypo";
const ChapterDropdown = ({
    data,
    itemOnPress,
    lessonActive,
    setLessonActive,
    ...props
}) => {
    const [shown, setShown] = useState(true);
    const [heightAnim] = useState(new Animated.Value(data.lessons.length * 70));
    const convertDuration = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;
        const remainingSeconds = seconds % 60;

        return hours > 0
            ? `${hours}h ${remainingMinutes}m ${remainingSeconds}s`
            : remainingMinutes > 0
            ? `${remainingMinutes}m ${remainingSeconds}s`
            : `${remainingSeconds}s`;
    };

    const handleItemOnPress = (video) => {
        itemOnPress(video);
        setLessonActive(video);
    };

    useEffect(() => {
        const contentHeight = data.lessons.length * 80;
        Animated.timing(heightAnim, {
            toValue: shown ? contentHeight : 0,
            duration: 50,
            useNativeDriver: false,
        }).start();
    }, [shown, data.lessons]);

    const toggleDropdown = () => {
        setShown((prev) => !prev);
    };

    return (
        <View {...props}>
            <Pressable
                onPress={toggleDropdown}
                style={{
                    padding: 20,
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}
            >
                <Text style={{ fontWeight: "bold", fontSize: 26 }}>
                    {data.title}
                </Text>

                {shown ? (
                    <Entypo name="chevron-up" size={28} color="black" />
                ) : (
                    <Entypo name="chevron-down" size={28} color="black" />
                )}
            </Pressable>
            <Animated.View
                style={{
                    height: heightAnim,
                    overflow: "hidden",
                }}
            >
                {data.lessons.length > 0 &&
                    data.lessons.map((item, index) => (
                        <Pressable
                            key={index}
                            style={{
                                marginBottom: 10,
                                flexDirection: "row",
                                alignItems: "center",
                                gap: 20,
                                paddingHorizontal:
                                    item.video === lessonActive ? 18 : 20,
                                paddingVertical:
                                    item.video === lessonActive ? 8 : 10,
                                borderRadius: 5,
                                borderWidth:
                                    item.video === lessonActive ? 1 : 0,
                                borderColor:
                                    item.video === lessonActive
                                        ? Colors.primaryBlue
                                        : "transparent", //
                            }}
                            onPress={() => handleItemOnPress(item.video)}
                        >
                            <Text
                                style={
                                    item.video == lessonActive
                                        ? {
                                              color: Colors.primaryBlue,
                                              fontSize: 18,
                                          }
                                        : styles.textLesson
                                }
                            >
                                {item.stt
                                    ? item.stt.toString().padStart(2, "0")
                                    : "00"}
                            </Text>
                            <View>
                                <Text
                                    style={
                                        item.video == lessonActive
                                            ? {
                                                  color: Colors.primaryBlue,
                                                  fontSize: 18,
                                              }
                                            : styles.textLesson
                                    }
                                >
                                    {item.name}
                                </Text>
                                <Text
                                    style={
                                        item.video == lessonActive
                                            ? {
                                                  color: Colors.primaryBlue,
                                                  fontSize: 18,
                                              }
                                            : styles.textLesson
                                    }
                                >
                                    {convertDuration(item.duration || 0)}
                                </Text>
                            </View>
                        </Pressable>
                    ))}
            </Animated.View>
        </View>
    );
};

export default ChapterDropdown;

const styles = StyleSheet.create({
    textLesson: {
        fontSize: 16,
        color: Colors.primaryGray,
    },
});

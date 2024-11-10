import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { Colors } from "../constants/Colors";
import { router } from "expo-router";

const TeacherItem = ({ teacherInfo, isHorizontal = false }) => {
    const { id, name, desc, address, image, rating, numberRating } =
        teacherInfo;

    return (
        <Pressable
            key={id}
            style={{
                padding: 20,
                borderRadius: 4,
                borderWidth: 1,
                borderColor: Colors.lightGray,
                maxWidth: isHorizontal ? "100%" : 350,
                marginRight: isHorizontal ? 0 : 40,
                marginVertical: 40,
                display: "flex",
                flexDirection: isHorizontal ? "row" : "colum",
                alignItems: "flex-start",
                gap: isHorizontal ? 20 : 0,
            }}
            onPress={() =>
                router.push({
                    pathname: `/teacher-info/${id}`,
                    params: {
                        teacherInfo: JSON.stringify(teacherInfo),
                    },
                })
            }
        >
            <Image
                source={{ uri: image }}
                style={{
                    width: isHorizontal ? "35%" : "100%",
                    height: isHorizontal ? "90%" : 150,
                    borderRadius: 8,
                    minWidth: 300,
                    borderRadius: 4,
                    borderWidth: 1,
                    borderColor: Colors.lightGray,
                }}
            />
            <View
                style={{
                    marginTop: 40,
                    flexShrink: 1,
                }}
            >
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        width: "100%",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 26,
                            fontWeight: 700,
                        }}
                    >
                        {name}
                    </Text>
                    <MaterialIcons
                        name="bookmark-outline"
                        size={36}
                        color="black"
                    />
                </View>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.primaryGray,
                        marginTop: 20,
                    }}
                    numberOfLines={2}
                >
                    {desc}
                </Text>
                <Text
                    style={{
                        fontSize: 16,
                        color: Colors.primaryGray,
                        marginTop: 20,
                    }}
                >
                    {address}
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
                    <Text> {rating}</Text>
                    <Text
                        style={{
                            color: Colors.primaryGray,
                            paddingHorizontal: 8,
                        }}
                    >
                        ({numberRating})
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default TeacherItem;

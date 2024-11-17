import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { Colors } from "../constants/Colors";
import { useRouter } from "expo-router";

const BannerSales = ({ saleOffer }) => {
    const { courseName, percentSales, slug, image } = saleOffer;
    const router = useRouter();

    const handleOnPress = () => {
        router.replace(slug ? `courses/${slug}` : "home");
    };

    return (
        <View
            style={{
                width: "90%",
                marginHorizontal: "auto",
                backgroundColor: Colors.primaryPurple,
                borderRadius: 5,
                padding: 20,
                position: "relative",
                marginVertical: 40,
            }}
        >
            <View>
                <Text
                    style={{
                        fontSize: 22,
                        color: Colors.primaryWhite,
                        marginTop: 30,
                    }}
                >
                    {courseName}
                </Text>
                <Text
                    style={{
                        fontSize: 26,
                        color: Colors.primaryWhite,
                        fontWeight: 700,
                        marginVertical: 30,
                    }}
                >
                    {percentSales}% OFF
                </Text>
                <Pressable onPress={handleOnPress}>
                    <Text
                        style={{
                            color: Colors.primaryWhite,
                            paddingHorizontal: 20,
                            paddingVertical: 15,
                            backgroundColor: Colors.primaryBlue,
                            maxWidth: 150,
                            textAlign: "center",
                            fontSize: 20,
                            fontWeight: 700,
                            borderRadius: 5,
                        }}
                    >
                        JOIN NOW
                    </Text>
                </Pressable>
            </View>
            <Image
                source={
                    image
                        ? { uri: image }
                        : require("../assets/images/online-courses.webp")
                }
                style={{
                    maxWidth: 250,
                    height: 250,
                    objectFit: "contain",
                    position: "absolute",
                    top: 0,
                    right: 0,
                }}
            />
        </View>
    );
};

export default BannerSales;

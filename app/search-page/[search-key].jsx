import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { useLocalSearchParams, useNavigation } from "expo-router";

const SearchPage = () => {
    let { "search-key": searchKey } = useLocalSearchParams();
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
                        numberOfLines={1}
                    >
                        Search for: {searchKey}
                    </Text>
                </View>
            ),
        });
    });
    return (
        <View>
            <Text>SearchPage</Text>
        </View>
    );
};

export default SearchPage;

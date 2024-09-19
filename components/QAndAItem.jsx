import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "@rneui/themed";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../constants/Colors";
const QAndAItem = ({ qna, ...props }) => {
    return (
        <View
            {...props}
            style={{
                borderRadius: 5,
                borderWidth: 1,
                borderColor: Colors.lightGray,
                padding: 20,
            }}
        >
            <View
                style={{ flexDirection: "row", alignItems: "center", gap: 20 }}
            >
                <Avatar rounded size={60} source={{ uri: qna.avatar }}></Avatar>
                <View>
                    <Text style={{ fontSize: 18, fontWeight: 700 }}>
                        {qna.name}
                    </Text>
                    <Text style={{ fontSize: 14, color: Colors.primaryGray }}>
                        {qna.createAt}
                    </Text>
                </View>
            </View>
            <View style={{ padding: 10 }}>
                <Text style={{ fontSize: 18, color: Colors.primaryGray }}>
                    {qna.question}
                </Text>
            </View>
            <View style={{ flexDirection: "row", padding: 10, gap: 20 }}>
                <View style={{ flexDirection: "row", gap: 5 }}>
                    <AntDesign
                        name="hearto"
                        size={24}
                        color={Colors.primaryGray}
                    />
                    <Text style={{ color: Colors.primaryGray }}>
                        {qna.comments.length}
                    </Text>
                </View>
                <View style={{ flexDirection: "row", gap: 5 }}>
                    <MaterialCommunityIcons
                        name="comment-alert-outline"
                        size={24}
                        color={Colors.primaryGray}
                    />
                    <Text style={{ color: Colors.primaryGray }}>
                        {qna.likes.length}
                    </Text>
                </View>
            </View>
        </View>
    );
};

export default QAndAItem;

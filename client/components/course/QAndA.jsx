import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import QAndAItem from "../QAndAItem";
import { Avatar } from "@rneui/themed";
import { Colors } from "../../constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
const QAndA = () => {
    const [question, setQuestion] = useState("");
    const qna = [
        {
            useID: "1",
            name: "Messi",
            avatar: "https://tse4.mm.bing.net/th?id=OIP.xEtzNqPUQ31aXzGby29LbgHaE8&pid=Api&P=0&h=220",
            createAt: "A day ago",
            question: "Why this lesson so hard?",
            likes: ["1", "2", "3"],
            comments: [
                {
                    userId: "2",
                    comment: "oke",
                },
            ],
        },
        {
            useID: "1",
            name: "Messi",
            avatar: "https://tse4.mm.bing.net/th?id=OIP.xEtzNqPUQ31aXzGby29LbgHaE8&pid=Api&P=0&h=220",
            createAt: "A day ago",
            question: "Why this lesson so hard?",
            likes: ["1", "2", "3"],
            comments: [
                {
                    userId: "2",
                    comment: "oke",
                },
            ],
        },
    ];
    return (
        <View style={{ padding: 20, marginTop: 40 }}>
            <View
                style={{
                    gap: 20,
                }}
            >
                {qna.map((item, index) => (
                    <QAndAItem qna={item} key={index}></QAndAItem>
                ))}
            </View>
            <View
                style={{
                    marginTop: 40,
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 20,
                }}
            >
                <Avatar
                    source={{
                        uri: "https://images.pexels.com/photos/6609393/pexels-photo-6609393.jpeg?auto=compress&cs=tinysrgb&w=600",
                    }}
                    size={60}
                    rounded
                ></Avatar>
                <TextInput
                    onChangeText={(value) => setQuestion(value)}
                    value={question}
                    placeholder="Add your question here"
                    style={{
                        fontSize: 18,
                        color: Colors.primaryGray,
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        borderWidth: 1,
                        borderColor: Colors.lightGray,
                        flex: 1,
                        borderRadius: 5,
                    }}
                ></TextInput>
                <MaterialCommunityIcons
                    name="send"
                    size={30}
                    color={Colors.primaryBlue}
                />
            </View>
        </View>
    );
};

export default QAndA;

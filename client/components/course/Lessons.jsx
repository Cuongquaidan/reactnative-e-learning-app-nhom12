import { View, Text } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { Button } from "@rneui/themed";
import ChapterDropdown from "../ChapterDropdown";
const Lessons = ({ data, video, lessonOnPress }) => {
    const { source } = data;
    const [lessonActive, setLessonActive] = useState("");
    return (
        <View style={{ padding: 20 }}>
            {source?.map((item, index) => (
                <ChapterDropdown
                    data={item}
                    key={index}
                    itemOnPress={lessonOnPress}
                    lessonActive={lessonActive}
                    setLessonActive={setLessonActive}
                ></ChapterDropdown>
            ))}
        </View>
    );
};

export default Lessons;

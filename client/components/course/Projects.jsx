import React, { useState } from "react";
import { View, Text, Button, Pressable, Image, FlatList } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Colors } from "../../constants/Colors";

import ProjectItem from "../ProjectItem";
import ViewMore from "../ViewMore";
import AntDesign from "@expo/vector-icons/AntDesign";
const projectStudent = [
    {
        id: 1,
        image: "https://images.pexels.com/photos/9248674/pexels-photo-9248674.jpeg",
        name: "UX-UI clone facepen",
        author: "Ronaldo",
    },
    {
        id: 2,
        image: "https://images.pexels.com/photos/9248674/pexels-photo-9248674.jpeg",
        name: "UX-UI clone facepen",
        author: "Messi",
    },
    {
        id: 3,
        image: "https://images.pexels.com/photos/9248674/pexels-photo-9248674.jpeg",
        name: "UX-UI clone facepen",
        author: "Neymar",
    },
];
const resources = [
    {
        name: "content-text.docx",
    },
    {
        name: "content-pdf.pdf",
    },
];
const Projects = () => {
    const [fileResponse, setFileResponse] = useState(null);

    const handleFileSelect = async () => {
        try {
            const result = await DocumentPicker.getDocumentAsync({});

            setFileResponse(result);
            console.log(fileResponse);
        } catch (err) {
            console.error("Error selecting file: ", err);
        }
    };

    return (
        <View style={{ padding: 20 }}>
            {/* Upload project */}
            <View
                style={{
                    padding: 20,
                    backgroundColor: "#dcecee",
                    borderRadius: 10,
                    width: "80%",
                    marginHorizontal: "auto",
                    borderColor: Colors.primaryBlue,
                    borderWidth: 2,
                    borderStyle: "dashed",
                    height: 90,
                }}
            >
                <Pressable onPress={handleFileSelect}>
                    {fileResponse ? (
                        <Text
                            style={{
                                color: Colors.primaryGray,
                                textAlign: "center",
                                fontSize: 20,
                            }}
                        >
                            {fileResponse.assets[0].name}
                        </Text>
                    ) : (
                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 20,
                            }}
                        >
                            <AntDesign
                                name="clouduploado"
                                size={50}
                                color={Colors.primaryBlue}
                            />
                            <Text
                                style={{
                                    color: Colors.primaryGray,
                                    textAlign: "center",
                                    fontSize: 20,
                                }}
                            >
                                Upload your project here
                            </Text>
                        </View>
                    )}
                </Pressable>
            </View>
            {/* Projects student */}
            <View style={{ marginTop: 30 }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                    <Text style={{ fontSize: 24, fontWeight: 700 }}>
                        Project of student
                    </Text>
                    <ViewMore></ViewMore>
                </View>
                <FlatList
                    style={{ marginTop: 40 }}
                    data={projectStudent}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <ProjectItem project={item}></ProjectItem>
                    )}
                    horizontal={true}
                ></FlatList>
            </View>
            {/* Project description */}
            <View style={{ marginTop: 40 }}>
                <Text
                    style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}
                >
                    Project description
                </Text>
                <Text style={{ fontSize: 18, color: Colors.primaryGray }}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Provident ipsa quisquam consequuntur. Minima odit itaque
                    laborum facilis eveniet perferendis nisi aliquam tenetur
                    perspiciatis cum error, repellendus sunt asperiores libero
                    quod!
                </Text>
            </View>
            {/* Resource */}
            <View style={{ marginTop: 30 }}>
                <Text
                    style={{ fontSize: 24, fontWeight: 700, marginBottom: 20 }}
                >
                    Resources
                </Text>
                <View style={{ gap: 20 }}>
                    {resources.map((item, index) => (
                        <View
                            key={index}
                            style={{
                                flexDirection: "row",
                                gap: 20,
                                alignItems: "center",
                                padding: 20,
                                borderWidth: 1,
                                borderColor: Colors.lightGray,
                                borderRadius: 8,
                                justifyContent: "space-between",
                            }}
                        >
                            <View
                                style={{
                                    flexDirection: "row",
                                    gap: 20,
                                    alignItems: "center",
                                }}
                            >
                                <AntDesign
                                    name="filetext1"
                                    size={40}
                                    color={
                                        (item.name.includes(".docx") &&
                                            "blue") ||
                                        (item.name.includes(".pdf") && "red")
                                    }
                                />
                                <Text
                                    style={{
                                        fontSize: 20,
                                        color: Colors.primaryGray,
                                    }}
                                >
                                    {item.name}
                                </Text>
                            </View>
                            <AntDesign
                                name="download"
                                size={24}
                                color={Colors.primaryGray}
                            />
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
};

export default Projects;

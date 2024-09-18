import React, { useState } from "react";
import { View, Text, Button, Pressable, Image } from "react-native";
import * as DocumentPicker from "expo-document-picker";
import { Colors } from "../../constants/Colors";
import AntDesign from "@expo/vector-icons/AntDesign";
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
        </View>
    );
};

export default Projects;

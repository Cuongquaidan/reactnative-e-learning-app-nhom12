import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Colors } from "../constants/Colors";

const ProjectItem = ({ project }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: project.image }}
                style={styles.image}
                resizeMode="cover"
            />
            <Text style={styles.name} numberOfLines={2}>
                {project.name}
            </Text>
            <Text style={styles.author} numberOfLines={1}>
                {project.author}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 220,
        height: 300,
        borderRadius: 10,
        marginRight: 30,
        padding: 20,
        borderWidth: 1,
        borderColor: Colors.lightGray,
    },
    image: {
        width: "100%",
        height: "65%",
        borderRadius: 10,
    },
    name: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
    },
    author: {
        fontSize: 18,
        color: "gray",
        marginTop: 10,
    },
});

export default ProjectItem;

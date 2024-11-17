import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Pressable,
    Alert,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "../constants/Colors";

const Register = () => {
    // Khởi tạo state cho từng ô input
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    // Hàm xử lý khi nhấn Submit
    const handleSubmit = () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert("Error", "All fields are required.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Passwords do not match.");
            return;
        }
        Alert.alert("Success", `Welcome, ${name}!`);
    };

    return (
        <View
            style={{
                width: "90%",
                marginHorizontal: "auto",
                padding: 20,
                alignItems: "center",
            }}
        >
            <View
                style={{
                    gap: 20,
                    width: "100%",
                    padding: 20,
                    borderWidth: 1,
                    borderColor: Colors.primaryBlue,
                    borderRadius: 10,
                    backgroundColor: "#fefefe",
                }}
            >
                <Text
                    style={{
                        fontSize: 30,
                        fontStyle: "italic",
                        fontWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    Register
                </Text>

                <View style={{ width: "100%", gap: 10 }}>
                    <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                        Name
                    </Text>
                    <TextInput
                        placeholder="Enter your name"
                        value={name}
                        onChangeText={setName} // Cập nhật state name
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 8,
                            borderColor: Colors.lightGray,
                            fontSize: 16,
                        }}
                    />
                </View>
                <View style={{ width: "100%", gap: 10 }}>
                    <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                        Email
                    </Text>
                    <TextInput
                        placeholder="Enter your email"
                        value={email}
                        onChangeText={setEmail} // Cập nhật state email
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 8,
                            borderColor: Colors.lightGray,
                            fontSize: 16,
                        }}
                        keyboardType="email-address"
                    />
                </View>
                <View style={{ width: "100%", gap: 10 }}>
                    <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                        Password
                    </Text>
                    <TextInput
                        placeholder="Enter your password"
                        value={password}
                        onChangeText={setPassword} // Cập nhật state password
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 8,
                            borderColor: Colors.lightGray,
                            fontSize: 16,
                        }}
                        secureTextEntry={true}
                    />
                </View>
                <View style={{ width: "100%", gap: 10 }}>
                    <Text style={{ fontStyle: "italic", fontSize: 16 }}>
                        Confirm password
                    </Text>
                    <TextInput
                        placeholder="Enter your confirm password"
                        value={confirmPassword}
                        onChangeText={setConfirmPassword} // Cập nhật state confirmPassword
                        style={{
                            borderWidth: 1,
                            padding: 10,
                            borderRadius: 8,
                            borderColor: Colors.lightGray,
                            fontSize: 16,
                        }}
                        secureTextEntry={true}
                    />
                </View>

                <Pressable
                    style={{
                        backgroundColor: Colors.primaryBlue,
                        width: 150,
                        padding: 5,
                        borderRadius: 10,
                        marginHorizontal: "auto",
                        marginTop: 20,
                    }}
                    onPress={handleSubmit} // Gọi hàm handleSubmit khi nhấn nút
                >
                    <Text
                        style={{
                            color: "white",
                            fontSize: 30,
                            fontWeight: "700",
                            textAlign: "center",
                        }}
                    >
                        Submit
                    </Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Register;
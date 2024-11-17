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

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Hàm xử lý khi nhấn Submit
    const handleLogin = () => {
        if (!email || !password) {
            Alert.alert("Error", "Both email and password are required.");
            return;
        }
        // Kiểm tra định dạng email cơ bản
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            Alert.alert("Error", "Please enter a valid email address.");
            return;
        }
        // Thông báo đăng nhập thành công
        Alert.alert("Success", `Welcome back, ${email}!`);
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
                    Login
                </Text>

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

                <Pressable
                    style={{
                        backgroundColor: Colors.primaryBlue,
                        width: 150,
                        padding: 5,
                        borderRadius: 10,
                        marginHorizontal: "auto",
                        marginTop: 20,
                    }}
                    onPress={handleLogin} // Gọi hàm handleLogin khi nhấn nút
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

export default Login;
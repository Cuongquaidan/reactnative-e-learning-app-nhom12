import React, { useState, useRef } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    FlatList,
    StyleSheet,
    Modal,
    Dimensions,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import "react-native-get-random-values";

const ChatbotComponent = () => {
    const [messages, setMessages] = useState([
        {
            id: "1",
            text: chatbotData[0].question,
            type: "bot",
            options: chatbotData[0].options,
        },
    ]);
    const [isVisible, setIsVisible] = useState(false); // Trạng thái hiển thị chatbox
    const flatListRef = useRef(null); // Tham chiếu FlatList

    const handleOptionSelect = (option) => {
        setMessages((prevMessages) => [
            ...prevMessages,
            { id: Date.now().toString(), text: option.text, type: "user" },
        ]);

        const nextQuestion = chatbotData.find(
            (item) => item.id === option.nextId
        );

        if (nextQuestion) {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: Date.now().toString(),
                    text: nextQuestion.question,
                    type: "bot",
                    options: nextQuestion.options,
                },
            ]);
        }

        // Đợi tin nhắn cập nhật xong và cuộn đến cuối
        setTimeout(() => {
            flatListRef.current?.scrollToEnd({ animated: true });
        }, 100); // Đảm bảo FlatList được render trước khi cuộn
    };

    const resetChat = () => {
        setMessages([
            {
                id: "1",
                text: chatbotData[0].question,
                type: "bot",
                options: chatbotData[0].options,
            },
        ]);
    };

    const renderMessage = ({ item }) => (
        <View
            style={[
                styles.messageContainer,
                item.type === "bot" ? styles.botMessage : styles.userMessage,
            ]}
        >
            <Text
                style={[
                    styles.messageText,
                    item.type === "user" && styles.userText,
                ]}
            >
                {item.text}
            </Text>
            {item.type === "bot" &&
                item.options &&
                item.options.map((option, index) => (
                    <TouchableOpacity
                        key={uuidv4()}
                        style={styles.optionButton}
                        onPress={() => handleOptionSelect(option)}
                    >
                        <Text style={styles.optionText}>{option.text}</Text>
                    </TouchableOpacity>
                ))}
        </View>
    );

    return (
        <View>
            {/* Nút nổi để mở chatbox */}
            <TouchableOpacity
                style={styles.floatingButton}
                onPress={() => setIsVisible(true)}
            >
                <Text style={styles.floatingButtonText}>💬</Text>
            </TouchableOpacity>

            {/* Modal hiển thị chatbox */}
            <Modal
                visible={isVisible}
                animationType="slide"
                transparent={true}
                onRequestClose={() => setIsVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.chatbox}>
                        <FlatList
                            ref={flatListRef} // Tham chiếu FlatList
                            data={messages}
                            renderItem={renderMessage}
                            keyExtractor={(item) => uuidv4()}
                            contentContainerStyle={styles.chatContainer}
                        />
                        <View style={styles.buttonRow}>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={resetChat}
                            >
                                <Text style={styles.actionButtonText}>
                                    🔄 Reset
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={styles.actionButton}
                                onPress={() => setIsVisible(false)}
                            >
                                <Text style={styles.actionButtonText}>
                                    ❌ Close
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    floatingButton: {
        position: "absolute",
        bottom: 100,
        right: 30,
        backgroundColor: "#4CAF50",
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    floatingButtonText: {
        fontSize: 24,
        color: "#fff",
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    chatbox: {
        width: "100%",
        height: Dimensions.get("window").height * 0.7,
        backgroundColor: "#fff",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 16,
    },
    chatContainer: {
        paddingBottom: 80,
    },
    messageContainer: {
        marginBottom: 16,
        padding: 12,
        borderRadius: 12,
        maxWidth: "80%",
    },
    botMessage: {
        backgroundColor: "#E8F5E9",
        alignSelf: "flex-start",
    },
    userMessage: {
        backgroundColor: "#4CAF50",
        alignSelf: "flex-end",
    },
    messageText: {
        fontSize: 16,
    },
    userText: {
        color: "#fff",
    },
    optionButton: {
        marginTop: 8,
        padding: 10,
        backgroundColor: "#4CAF50",
        borderRadius: 6,
    },
    optionText: {
        color: "#fff",
        fontWeight: "bold",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
    },
    actionButton: {
        backgroundColor: "#FF5722",
        padding: 12,
        borderRadius: 6,
        flex: 0.45,
    },
    actionButtonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
    },
});

export default ChatbotComponent;

const chatbotData = [
    {
        id: "1",
        question: "Chào bạn! Bạn cần hỗ trợ về điều gì?",
        options: [
            { text: "Hướng dẫn sử dụng ứng dụng", nextId: "2" },
            { text: "Thông tin về cách đăng bán khóa học", nextId: "3" },
        ],
    },
    {
        id: "2",
        question: "Bạn cần hướng dẫn về tính năng nào trong ứng dụng?",
        options: [
            { text: "Cách thêm vào giỏ hàng", nextId: "4" },
            { text: "Cách lưu khóa học", nextId: "5" },
            { text: "Tìm hiểu về overview khóa học", nextId: "6" },
            { text: "Chi tiết khóa học", nextId: "7" },
            { text: "Quay lại", nextId: "1" },
        ],
    },
    {
        id: "3",
        question:
            "Hiện tại, hệ thống chưa hỗ trợ chức năng đăng bán khóa học dành cho người dùng đăng ký. Nếu có thay đổi trong tương lai, chúng tôi sẽ thông báo đến bạn. Cảm ơn bạn đã quan tâm!",
        options: [{ text: "Quay lại", nextId: "1" }],
    },
    {
        id: "4",
        question:
            "Để thêm khóa học vào giỏ hàng, bạn vào phần *Overview khóa học* và chọn nút *Add to Cart*. Giỏ hàng có thể được truy cập từ trang *Home*.",
        options: [{ text: "Quay lại", nextId: "2" }],
    },
    {
        id: "5",
        question:
            "Để lưu khóa học, bạn chọn biểu tượng lưu ở góc trên của mỗi khóa học. Nhấn lại để hủy lưu. Các khóa học đã lưu có thể được xem ở trang *Profile*.",
        options: [{ text: "Quay lại", nextId: "2" }],
    },
    {
        id: "6",
        question:
            "Phần *Overview* cung cấp video mẫu giúp bạn đánh giá khóa học có phù hợp với nhu cầu của mình hay không trước khi quyết định mua.",
        options: [{ text: "Quay lại", nextId: "2" }],
    },
    {
        id: "7",
        question:
            "Khi xem chi tiết khóa học, bạn sẽ thấy thông tin đầy đủ về nội dung, tài nguyên khóa học, và lợi ích như được giáo viên hỗ trợ sửa các dự án của bạn.",
        options: [{ text: "Quay lại", nextId: "2" }],
    },
];

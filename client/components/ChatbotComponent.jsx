import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Modal, Button } from 'react-native';

const ChatbotComponent = () => {
  const [messages, setMessages] = useState([
    { id: '1', text: chatbotData[0].question, type: 'bot', options: chatbotData[0].options },
  ]);
  const [isVisible, setIsVisible] = useState(false); // Trạng thái hiển thị chatbox

  const handleOptionSelect = (option) => {
    // Thêm câu hỏi của người dùng vào danh sách tin nhắn
    setMessages((prevMessages) => [
      ...prevMessages,
      { id: Date.now().toString(), text: option.text, type: 'user' },
    ]);

    // Tìm câu hỏi hoặc câu trả lời tiếp theo
    const nextQuestion = chatbotData.find((item) => item.id === option.nextId);
    
    if (nextQuestion) {
      // Thêm câu trả lời của bot vào danh sách tin nhắn
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: Date.now().toString(), text: nextQuestion.question, type: 'bot', options: nextQuestion.options },
      ]);
    }
  };

  const resetChat = () => {
    // Đặt lại tin nhắn và bắt đầu lại từ câu hỏi đầu tiên
    setMessages([{ id: '1', text: chatbotData[0].question, type: 'bot', options: chatbotData[0].options }]);
  };

  const renderMessage = ({ item }) => (
    <View style={[styles.messageContainer, item.type === 'bot' ? styles.botMessage : styles.userMessage]}>
      <Text style={[styles.messageText, item.type === 'user' && styles.userText]}>{item.text}</Text>
      {item.type === 'bot' && item.options && item.options.map((option, index) => (
        <TouchableOpacity
          key={index}
          style={styles.optionButton}
          onPress={() => handleOptionSelect(option)}
        >
          <Text style={styles.optionText}>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Nút nổi để mở chatbox */}
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => setIsVisible(true)}
      >
        <Text style={styles.floatingButtonText}>?</Text>
      </TouchableOpacity>

      {/* Modal hiển thị chatbox khi isVisible = true */}
      <Modal
        visible={isVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setIsVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.chatbox}>
            <FlatList
              data={messages}
              renderItem={renderMessage}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.chatContainer}
            />
            <TouchableOpacity
              style={styles.closeButton}
              onPress={() => setIsVisible(false)} // Đóng chatbox khi bấm nút đóng
            >
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            {/* Nút Reset */}
            <TouchableOpacity
              style={styles.resetButton}
              onPress={resetChat} // Reset chat
            >
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButton: {
    position: 'absolute',
    bottom: 100,
    right: 30,
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  floatingButtonText: {
    fontSize: 30,
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  chatbox: {
    position:'relative',
    width: '90%',
    backgroundColor: '#fff',
    padding: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: '90%',
  },
  chatContainer: {
    paddingBottom: 60, // Để có không gian cho nút đóng
  },
  messageContainer: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: '80%',
  },
  botMessage: {
    backgroundColor: '#e5e5ea',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#007AFF',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
    color: '#fff',
  },
  userText: {
    color: '#fff',
  },
  optionButton: {
    marginTop: 5,
    padding: 8,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  optionText: {
    color: '#fff',
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 5,
    height:40,
    width:40,
    justifyContent:'center',
    alignItems:'center'
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  buttonContainer: {
    top:10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  resetButton: {
    backgroundColor: '#FF6347', // Màu của nút reset
    padding: 10,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default ChatbotComponent;

const chatbotData = [
  {
    id: '1',
    question: "Xin chào! Bạn muốn hỏi về điều gì?",
    options: [
      { text: "Hướng dẫn sử dụng sản phẩm", nextId: '2' },
      { text: "Câu hỏi về giá cả", nextId: '3' },
    ],
  },
  {
    id: '2',
    question: "Bạn cần hướng dẫn về phần nào?",
    options: [
      { text: "Cách cài đặt", nextId: '4' },
      { text: "Cách bảo trì", nextId: '5' },
    ],
  },
  {
    id: '3',
    question: "Chúng tôi có thể giúp bạn như thế nào với giá cả?",
    options: [
      { text: "Giá sản phẩm", nextId: '6' },
      { text: "Khuyến mãi", nextId: '7' },
    ],
  },
  // Thêm các bước khác...
];

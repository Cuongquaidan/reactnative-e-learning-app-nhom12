import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { Redirect } from "expo-router";
import { Tab, TabView } from "@rneui/themed";
import { Colors } from "../constants/Colors";
import { useNavigation } from "@react-navigation/native";
import Register from "../components/Register";
import Login from "../components/Login";

const Index = () => {
    // return <Redirect href={"/home"}></Redirect>;
    const [indexTab, setIndexTab] = useState(0);
    const [tabHeights, setTabHeights] = useState([0, 0, 0]); // Để lưu chiều cao của từng tab
    const [contentHeight, setContentHeight] = useState(0);
    const navigation = useNavigation();
    const onTabLayout = (event, tabIndex) => {
        const { height } = event.nativeEvent.layout;
        const updatedHeights = [...tabHeights];
        updatedHeights[tabIndex] = height;
        setTabHeights(updatedHeights);
        setContentHeight(updatedHeights[indexTab]); // Cập nhật chiều cao hiện tại
    };

    useEffect(() => {
        setContentHeight(tabHeights[indexTab]); // Khi tab thay đổi, cập nhật chiều cao tương ứng
    }, [indexTab, tabHeights]);
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (
                <View style={{ justifyContent: "center", width: "100%" }}>
                    <Text
                        style={{
                            textAlign: "center",
                            width: "100%",
                            fontSize: 30,
                            fontWeight: 700,
                        }}
                    >
                        Welcome
                    </Text>
                </View>
            ),
        });
    }, [navigation]);
    return (
        <View style={{ flex: 1 }}>
            <Image
                source={require("../assets/images/index.jpg")}
                width={100}
                height={100}
                alt="online-course"
                style={{ width: "100%", height: 200 }}
                resizeMode="cover"
            ></Image>
            <Tab
                value={indexTab}
                onChange={(e) => setIndexTab(e)}
                indicatorStyle={{
                    backgroundColor: Colors.primaryBlue,
                    height: 3,
                }}
                style={{
                    borderBottomColor: Colors.lightGray,
                    borderBottomWidth: 1,
                    backgroundColor: "white",
                }}
            >
                <Tab.Item
                    title="REGISTER"
                    titleStyle={{
                        fontSize: 20,
                        color:
                            indexTab === 0
                                ? Colors.primaryBlue
                                : Colors.primaryGray,
                    }}
                />

                <Tab.Item
                    title="LOGIN"
                    titleStyle={{
                        fontSize: 20,
                        color:
                            indexTab === 1
                                ? Colors.primaryBlue
                                : Colors.primaryGray,
                    }}
                />
            </Tab>

            <TabView
                value={indexTab}
                onChange={setIndexTab}
                animationType="spring"
                containerStyle={{ height: contentHeight || 500 }}
            >
                <TabView.Item style={{ width: "100%" }}>
                    <View onLayout={(event) => onTabLayout(event, 0)}>
                        <Register></Register>
                    </View>
                </TabView.Item>

                <TabView.Item style={{ width: "100%" }}>
                    <View onLayout={(event) => onTabLayout(event, 1)}>
                        <Login></Login>
                    </View>
                </TabView.Item>
            </TabView>
        </View>
    );
};

export default Index;

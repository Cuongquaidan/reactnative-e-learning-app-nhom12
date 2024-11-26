import {
    View,
    Text,
    FlatList,
    Pressable,
    Image,
    SafeAreaView,
} from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import CourseItem from "../../components/SavedCourse";
import { useAuthContext } from "../../context/AuthContext";
import Constants from "expo-constants";
import { useRouter } from "expo-router";
import { useSavedCoursesContext } from "../../context/SaveContext";

const Profile = () => {
    const router = useRouter();
    const { name, id } = useAuthContext();

    const { setSavedCourses, savedCourses } = useSavedCoursesContext();
    const handleLogout = () => {
        router.replace("/");
    };
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}
        >
            <FlatList
                ListHeaderComponent={() => (
                    <View>
                        <View
                            style={{
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                paddingTop: 30,
                                paddingBottom: 30,
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "600",
                                }}
                            >
                                User's profile
                            </Text>
                            <Pressable
                                style={{
                                    position: "absolute",
                                    right: 0,
                                    flexDirection: "row",
                                    alignItems: "center",
                                    gap: 10,
                                }}
                                onPress={handleLogout}
                            >
                                <Text
                                    style={{
                                        fontWeight: "600",
                                    }}
                                >
                                    Logout
                                </Text>
                                <MaterialIcons
                                    name="logout"
                                    size={30}
                                    color="black"
                                />
                            </Pressable>
                        </View>
                        <View>
                            <View
                                style={{
                                    position: "relative",
                                    height: 150,
                                    width: "100%",
                                    alignItems: "center",
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                    }}
                                    style={{
                                        width: "100%",
                                        height: 150,
                                        borderRadius: 20,
                                    }}
                                />
                                <Image
                                    source={{
                                        uri: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                    }}
                                    style={{
                                        width: 120,
                                        height: 120,
                                        borderRadius: 100,
                                        position: "absolute",
                                        bottom: -60,
                                    }}
                                />
                            </View>
                            <View
                                style={{
                                    alignItems: "center",
                                    marginTop: 80,
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "600",
                                    }}
                                >
                                    {name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color: "#ccc",
                                    }}
                                >
                                    UX/UI Designer
                                </Text>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        marginTop: 30,
                                    }}
                                >
                                    <View
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: 60,
                                            width: "33%",
                                            borderEndWidth: 1,
                                            borderEndColor: "#ccc",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                            }}
                                        >
                                            25
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: "#ccc",
                                            }}
                                        >
                                            Save
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: 60,
                                            width: "33%",
                                            borderEndWidth: 1,
                                            borderEndColor: "#ccc",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                            }}
                                        >
                                            24
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: "#ccc",
                                            }}
                                        >
                                            On Going
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent: "center",
                                            alignItems: "center",
                                            height: 60,
                                            width: "33%",
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize: 18,
                                                fontWeight: 700,
                                            }}
                                        >
                                            98
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize: 13,
                                                color: "#ccc",
                                            }}
                                        >
                                            Completed
                                        </Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View
                            style={{
                                paddingTop: 10,
                            }}
                        >
                            <Text
                                style={{
                                    marginTop: 20,
                                    marginBottom: 10,
                                    fontSize: 22,
                                    fontWeight: 700,
                                }}
                            >
                                Saved courses
                            </Text>
                        </View>
                    </View>
                )}
                data={savedCourses.courses}
                keyExtractor={(item) => item._id}
                renderItem={({ item }) => <CourseItem courseId={item._id} />}
                style={{
                    paddingHorizontal: 20,
                }}
                contentContainerStyle={{
                    rowGap: 10,
                }}
            />
        </SafeAreaView>
    );
};

export default Profile;

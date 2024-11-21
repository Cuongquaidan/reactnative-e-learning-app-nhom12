import { View, Text, FlatList, Pressable, Image,SafeAreaView } from "react-native";
import React from "react";
import SavedCourse from "../../components/SavedCourse";
import Entypo from '@expo/vector-icons/Entypo';
import CourseItem from "../../components/SavedCourse";
import { useAuthContext } from "../../context/AuthContext";
import Constants from "expo-constants";

const Profile = () => {
    const [savedCoursesData, setSavedCoursesData] = React.useState(null);
    const {name} = useAuthContext();
    React.useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courses`
            );
            if (!response) throw new Error("Fetch courses failed");
            const resjson = await response.json();
            setSavedCoursesData(resjson);
        };
        fetchData();
    }, []);


    return (   
        <SafeAreaView
            style={{
                flex:1
            }}
        >
            <FlatList
                ListHeaderComponent={()=>(
                    <View>
                        <View
                            style={{
                                flexDirection:"row",
                                justifyContent:"center",
                                alignItems:"center",
                                paddingTop:30,
                                paddingBottom:30
                            }}
                        >
                            <Text
                                style={{
                                    fontSize: 24,
                                    fontWeight: "600"
                                }}
                            >
                                User's profile
                            </Text>
                            <Pressable
                                style={{
                                    position: "absolute",
                                    right:0
                            }}>
                                <Entypo name="dots-three-vertical" size={28} color="black" />
                            </Pressable>
                        </View>
                        <View>
                            <View
                                style={{
                                    position:"relative",
                                    height:150,
                                    width:"100%",
                                    alignItems:"center"
                                }}
                            >
                            <Image 
                                source={{uri:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} 
                                style={{width:'100%',height:150, borderRadius:20}}
                            />
                            <Image 
                            source={{uri:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}} 
                                style={{
                                    width:120,
                                    height:120,
                                    borderRadius:100,
                                    position:"absolute",
                                    bottom:-60
                                }}
                            />
                            </View>
                            <View
                                style={{
                                    alignItems:"center",
                                    marginTop:80
                                }}
                            >
                                <Text
                                    style={{
                                        fontSize: 24,
                                        fontWeight: "600"
                                    }}
                                >
                                    {name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 16,
                                        color:'#ccc'
                                    }}
                                >UX/UI Designer</Text>
                                <View
                                style={{
                                    flexDirection:"row",
                                    justifyContent:"center",
                                    alignItems:"center",
                                    marginTop:30
                                }}>
                                    <View
                                        style={{
                                            justifyContent:"center",
                                            alignItems:"center",
                                            height:60,
                                            width:"33%",
                                            borderEndWidth:1,
                                            borderEndColor:'#ccc'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:18,
                                                fontWeight:700
                                            }}
                                        >
                                            25
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:13,
                                                color:'#ccc'
                                            }}
                                        >
                                            Save
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent:"center",
                                            alignItems:"center",
                                            height:60,
                                            width:"33%",
                                            borderEndWidth:1,
                                            borderEndColor:'#ccc'
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:18,
                                                fontWeight:700
                                            }}
                                        >
                                            24
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:13,
                                                color:'#ccc'
                                            }}
                                        >
                                            On Going
                                        </Text>
                                    </View>
                                    <View
                                        style={{
                                            justifyContent:"center",
                                            alignItems:"center",
                                            height:60,
                                            width:"33%"
                                        }}
                                    >
                                        <Text
                                            style={{
                                                fontSize:18,
                                                fontWeight:700
                                            }}
                                        >
                                            98
                                        </Text>
                                        <Text
                                            style={{
                                                fontSize:13,
                                                color:'#ccc'
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
                                paddingTop:10
                            }}
                        >
                            <Text
                                style={{
                                    marginTop:20,
                                    marginBottom:10,
                                    fontSize:22,
                                    fontWeight:700
                                }}
                            >
                                Saved courses
                            </Text>
                        </View>
                    </View>
                )}
                data={savedCoursesData}
                keyExtractor={item=>item._id}
                renderItem={({item})=><CourseItem course={item}/>}
                style={{
                    paddingHorizontal:20
                }}
                contentContainerStyle={{
                    rowGap:10
                }}
            />
        </SafeAreaView>
    )
}

export default Profile;

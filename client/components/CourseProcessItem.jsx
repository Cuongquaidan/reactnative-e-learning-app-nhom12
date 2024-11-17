import {View,Image,Text, Pressable} from 'react-native';
import React from 'react';
import { Colors } from "../constants/Colors";

const CourseProcess=({course})=>{
    let {courseName,courseImage,courseTime,courseProcess}=course;
    return(
        <Pressable
            style={{
                padding:10,
                borderWidth:1,
                borderColor: Colors.lightGray,
                borderRadius: 5,
                display:'flex'
            }}
        >
            <View
                style={{
                    flexDirection:'row',
                    height:100
                }}
            >
                <Image
                    style={{
                        width:100,
                        height:100,
                        borderRadius:5
                    }}
                    source={{uri:courseImage}}
                />
                <View
                    style={{
                        justifyContent:'space-between',
                        flex:1,
                        paddingHorizontal:10,
                        paddingVertical:5
                    }}
                >
                    <View>
                        <Text
                            style={{
                                fontSize:16,
                                fontWeight:700
                            }}
                        >
                            {courseName}
                        </Text>
                        <Text
                            style={{
                                fontSize:16,
                                color:Colors.lightGray
                            }}
                        >
                            {courseTime}
                        </Text>
                    </View>
                    <View>
                        <Text
                            style={{
                                fontSize:16,
                                color:Colors.lightGray
                            }}
                        >
                            {courseProcess}% Complete
                        </Text>
                        <View
                            style={{
                                position:'relative'
                            }}
                        >
                            <View
                                style={{
                                    position:'absolute',
                                    width:'100%',
                                    backgroundColor:'#d0def7',
                                    height:5,
                                    borderRadius:10
                                }}
                            >
                            </View>
                            <View
                                style={{
                                    position:'absolute',
                                    width:`${courseProcess}%`,
                                    backgroundColor:Colors.primaryBlue,
                                    height:5,
                                    borderRadius:5
                                }}
                            >
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </Pressable>
    )
}
export default CourseProcess
import {View,Text,FlatList,Pressable} from 'react-native';
import React from 'react';
import { Colors } from "../constants/Colors";
import CourseProcess from './CourseProcessItem';

const CourseProcessList=({courseList})=>{
    return(
        <View
            style={{
                width:'100%'
            }}
        >
            <View
                style={{
                    display:'flex',
                    flexDirection:'row',
                    marginBottom:20
                }}
            >
                <Pressable
                    style={{
                        paddingHorizontal:20,
                        paddingVertical:10,
                        borderBottomColor:Colors.primaryBlue,
                        borderBottomWidth:2,
                        alignItems:'center',
                        justifyContent:'center',
                        width:'30%'
                    }}
                    onPress={()=>{}}
                >
                    <Text
                        style={{
                            textAlign:'center',
                            color:Colors.primaryBlue
                        }}
                    >
                        ALL
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        paddingHorizontal:20,
                        paddingVertical:10,
                        borderBottomColor:Colors.lightGray,
                        borderBottomWidth:2,
                        alignItems:'center',
                        justifyContent:'center',
                        width:'35%'
                    }}
                    onPress={()=>{}}
                >
                    <Text
                        style={{
                            textAlign:'center'
                        }}
                    >
                        ON GOING
                    </Text>
                </Pressable>
                <Pressable
                    style={{
                        paddingHorizontal:20,
                        paddingVertical:10,
                        borderBottomColor:Colors.lightGray,
                        borderBottomWidth:2,
                        alignItems:'center',
                        justifyContent:'center',
                        width:'35%'
                    }}
                    onPress={()=>{}}
                >
                    <Text
                        style={{
                            textAlign:'center'
                        }}
                    >
                        COMPLETED
                    </Text>
                </Pressable>
            </View>
            <FlatList
                data={courseList}
                keyExtractor={item=>item.id}
                renderItem={({item})=>(
                    <CourseProcess course={item}></CourseProcess>
                )}
                ItemSeparatorComponent={(
                    <View style={{height:15}}></View>
                )}
            >
            </FlatList>
        </View>
    )
}
export default CourseProcessList
import {View,FlatList,Text,Pressable,Image} from 'react-native'
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';

const SavedCourse=({item})=>{
    return(
        <Pressable
            style={{
                flexDirection:'row',
                width:'100%',
                justifyContent:'center',
                padding:10,
                borderColor:'#ccc',
                borderWidth:1,
                borderRadius:10
            }}
        >
            <Image
                source={{uri:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}}
                style={{
                    width:120,
                    height:120,
                    borderRadius:10
                }}
            />
            <View
                style={{
                    paddingStart:10,
                    flex:1
                }}
            >   
                <View
                    style={{
                        flexDirection:'row'
                    }}
                >
                    <Text
                        style={{
                            flex:1,
                            fontSize:20,
                            fontWeight:700
                        }}
                    >
                        {item.courseName}
                    </Text>
                    <Pressable>
                    <Feather name="bookmark" size={30} color="#00bcd5"/>
                    </Pressable>
                </View>
                <Text
                    style={{
                        fontSize:15,
                        color:"#6D6D6D"
                    }}
                >
                    {item.teacherName}
                </Text>
                <Text
                    style={{
                        fontSize:19,
                        fontWeight:700,
                        color:"#00bcd5"
                    }}
                >
                    ${item.price}
                </Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                >
                    <EvilIcons name="star" size={20} color="#F5BF02" />
                    <Text>
                        {item.rate}
                    </Text>
                    <Text
                        style={{
                            color:"#6D6D6D",
                            marginEnd:20,
                            marginStart:5
                        }}
                    >
                        ({item.numberOfRating})
                    </Text>
                    <Text>
                        {item.numberOfLesson}
                    </Text>
                    <Text
                        style={{
                            color:"#6D6D6D",
                            marginStart:5
                        }}
                    >
                        lessons
                    </Text>
                </View>
            </View>
        </Pressable>
    )
}
export default SavedCourse;
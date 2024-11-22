import {View,FlatList,Text,Pressable,Image} from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import EvilIcons from '@expo/vector-icons/EvilIcons';
import React from "react";
import { useRouter } from "expo-router";
import Constants from "expo-constants";

const SavedCourse=({course,type='overview'})=>{
const router = useRouter();
const {
    _id,
    title,
    desc,
    image,
    price,
    rating,
    numberRating,
    numberOfLessons,
    slug,
} = course;
const [courseDetail, setCourseDetail] = React.useState(
    {
        author: '',
        avatar: '',
        work: '',
        desc: '',
        benefit: [],
        price: 0,
        discount: 0,
        courseName: '',
        slug: '',
        rating: 0,
        numberRating: 0,
        source: [],
        courseId: _id
    }
);
React.useEffect(() => {
    try {
        const getCourseDetail = async () => {
            const response = await fetch(
                `${Constants.expoConfig.extra.API_PREFIX}/courseDetails/${_id}`
            );
            const data = await response.json();
            setCourseDetail(data);
        };
        getCourseDetail();
    } catch (error) {
        console.log(error);
    }
}, [course]);

const handleOnPress = () => {
    router.push({
        pathname: `/${type}/${slug}`,
        params: {
            courseId: JSON.stringify(_id),
        },
    });
};
    return(
        <Pressable
            style={{
                flexDirection:'row',
                width:'100%',
                justifyContent:'center',
                padding:10,
                borderColor:'#ccc',
                borderWidth:1,
                borderRadius:10,
                
            }}
            onPress={handleOnPress}
        >
            <Image
                source={{ uri: image }}
                style={{
                    width:120,
                    height:120,
                    borderRadius:10,
                    resizeMode:'cover'
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
                        {title}
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
                    {courseDetail.author}
                </Text>
                <Text
                    style={{
                        fontSize:19,
                        fontWeight:700,
                        color:"#00bcd5",
                        marginVertical:5
                    }}
                >
                    ${price}
                </Text>
                <View
                    style={{
                        flexDirection:'row',
                        alignItems:'center'
                    }}
                >
                    <EvilIcons name="star" size={20} color="#F5BF02" />
                    <Text>
                        {rating}
                    </Text>
                    <Text
                        style={{
                            color:"#6D6D6D",
                            marginEnd:20,
                            marginStart:5
                        }}
                    >
                        ({numberRating})
                    </Text>
                    <Text>
                        {numberOfLessons}
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
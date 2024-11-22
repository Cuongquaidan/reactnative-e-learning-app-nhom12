// import { View, Text, ScrollView, Pressable,SafeAreaView,FlatList} from "react-native";
// import React from "react";
// import BannerSales from "../../components/BannerSales";
// import CourseProcess from "../../components/CourseProcessItem";
// import { Colors } from "../../constants/Colors";

// const Mycourses = () => {
//     const saleOffer = {
//         courseName: "PROJECT MANAGEMENT",
//         percentSales: 20,
//         slug: "",
//         image: "",
//     };
//     const courseList=[
//         {
//             id:1,
//             courseName:'java1',
//             courseImage:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             courseTime:'2hrs 30mins',
//             courseProcess:'50'
//         },
//         {
//             id:2,
//             courseName:'java2',
//             courseImage:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             courseTime:'2hrs 40mins',
//             courseProcess:'10'
//         },
//         {
//             id:3,
//             courseName:'java3',
//             courseImage:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             courseTime:'5hrs 30mins',
//             courseProcess:'100'
//         },
//         {
//             id:4,
//             courseName:'java4',
//             courseImage:"https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
//             courseTime:'1hrs 44mins',
//             courseProcess:'60'
//         }
//     ]

//     return (
//         <SafeAreaView>
//             <FlatList
//                 ListHeaderComponent={
//                     <View>
//                         <View
//                             style={{
//                                 alignItems:"center",
//                                 justifyContent:"center",
//                                 paddingVertical:25
//                             }}
//                         >
//                             <Text
//                                 style={{
//                                     fontSize:28,
//                                     fontWeight:600
//                                 }}
//                             >
//                                 My Courses
//                             </Text>
//                         </View>
//                         <BannerSales saleOffer={saleOffer}></BannerSales>
//                         <View
//                             style={{
//                                 alignItems:"center",
//                                 display:"flex"
//                             }}
//                         >
//                             <View
//                                 style={{
//                                     width:'100%'
//                                 }}
//                             >
//                                 <View
//                                     style={{
//                                         display:'flex',
//                                         flexDirection:'row',
//                                         marginBottom:20
//                                     }}
//                                 >
//                                     <Pressable
//                                         style={{
//                                             paddingHorizontal:20,
//                                             paddingVertical:10,
//                                             borderBottomColor:Colors.primaryBlue,
//                                             borderBottomWidth:2,
//                                             alignItems:'center',
//                                             justifyContent:'center',
//                                             width:'30%'
//                                         }}
//                                         onPress={()=>{}}
//                                     >
//                                         <Text
//                                             style={{
//                                                 textAlign:'center',
//                                                 color:Colors.primaryBlue
//                                             }}
//                                         >
//                                             ALL
//                                         </Text>
//                                     </Pressable>
//                                     <Pressable
//                                         style={{
//                                             paddingHorizontal:20,
//                                             paddingVertical:10,
//                                             borderBottomColor:Colors.lightGray,
//                                             borderBottomWidth:2,
//                                             alignItems:'center',
//                                             justifyContent:'center',
//                                             width:'35%'
//                                         }}
//                                         onPress={()=>{}}
//                                     >
//                                         <Text
//                                             style={{
//                                                 textAlign:'center'
//                                             }}
//                                         >
//                                             ON GOING
//                                         </Text>
//                                     </Pressable>
//                                     <Pressable
//                                         style={{
//                                             paddingHorizontal:20,
//                                             paddingVertical:10,
//                                             borderBottomColor:Colors.lightGray,
//                                             borderBottomWidth:2,
//                                             alignItems:'center',
//                                             justifyContent:'center',
//                                             width:'35%'
//                                         }}
//                                         onPress={()=>{}}
//                                     >
//                                         <Text
//                                             style={{
//                                                 textAlign:'center'
//                                             }}
//                                         >
//                                             COMPLETED
//                                         </Text>
//                                     </Pressable>
//                                 </View>
//                             </View>
//                         </View>
//                     </View>
//                 }
//                 data={courseList}
//                 keyExtractor={item=>item.id}
//                 renderItem={({item})=>(
//                     <CourseProcess course={item}></CourseProcess>
//                 )}
//                 style={{
//                     paddingHorizontal:20
//                 }}
//                 ItemSeparatorComponent={(
//                     <View style={{height:15}}></View>
//                 )}
//             />

//         </SafeAreaView>
//     );
// };

// export default Mycourses;

import { View, Text, SafeAreaView, FlatList } from "react-native";
import React from "react";
import BannerSales from "../../components/BannerSales";
import CourseProcess from "../../components/CourseProcessItem";
import { Colors } from "../../constants/Colors";
import { Tab } from "@rneui/themed";

const Mycourses = () => {
    const [indexTab, setIndexTab] = React.useState(0);
    const courseList = [
        {
            id: 1,
            courseName: 'java1',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '2hrs 30mins',
            courseProcess: '50'
        },
        {
            id: 2,
            courseName: 'java2',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '2hrs 40mins',
            courseProcess: '10'
        },
        {
            id: 3,
            courseName: 'java3',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '5hrs 30mins',
            courseProcess: '100'
        },
        {
            id: 4,
            courseName: 'java4',
            courseImage: "https://images.pexels.com/photos/8135545/pexels-photo-8135545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            courseTime: '1hrs 44mins',
            courseProcess: '60'
        }
    ];

    const filterCoursesByTab = () => {
        switch (indexTab) {
            case 1: // ON GOING
                return courseList.filter(course => parseInt(course.courseProcess) < 100);
            case 2: // COMPLETED
                return courseList.filter(course => parseInt(course.courseProcess) === 100);
            default: // ALL
                return courseList;
        }
    };

    const saleOffer = {
        courseName: "PROJECT MANAGEMENT",
        percentSales: 20,
        slug: "",
        image: "",
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ alignItems: "center", justifyContent: "center", paddingVertical: 25 }}>
                <Text style={{ fontSize: 28, fontWeight: "600" }}>My Courses</Text>
            </View>
            <BannerSales saleOffer={saleOffer} />
            <View style={{ paddingHorizontal: 35, paddingVertical:10,flex: 1}}>
                <Tab
                    value={indexTab}
                    onChange={(selectedTab) => setIndexTab(selectedTab)}
                    indicatorStyle={{ backgroundColor: Colors.primaryBlue }}
                >
                    <Tab.Item
                        title="ALL"
                        titleStyle={{ textAlign: 'center', color: Colors.primaryBlue }}
                    />
                    <Tab.Item
                        title="ON GOING"
                        titleStyle={{ textAlign: 'center', color: Colors.primaryBlue }}
                    />
                    <Tab.Item
                        title="COMPLETED"
                        titleStyle={{ textAlign: 'center', color: Colors.primaryBlue }}
                    />
                </Tab>
                <FlatList
                    data={filterCoursesByTab()}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <CourseProcess course={item} />}
                    ItemSeparatorComponent={(
                        <View style={{height:15}}></View>
                    )}
                    style={{
                        marginTop:10
                    }}
                />
            </View>
        </SafeAreaView>
    );
};

export default Mycourses;
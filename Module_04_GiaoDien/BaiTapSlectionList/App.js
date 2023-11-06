// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View,SectionList } from 'react-native';
// import StackNaviagtion from './screens/StackNaviagtion';

// const User = [
//   {
//     id:1,
//     name:'Bai01',
//     data:["Html","NodeJs","Css"]
//   },
//   {
//     id:2,
//     name:'Bai02',
//     data:["BootStrapt","JavaScript","Java"]
//   },
//   {
//     id:3,
//     name:'Bai03',
//     data:["Html","NodeJs","Css"]
//   },
//   {
//     id:4,
//     name:'Bai04',
//     data:["Html","NodeJs","Css"]
//   },
// ]
// export default function App() {
//   return (
//     <View>

//         <SectionList
//           sections={User}
//           renderItem={({item}) => (

//             <Text style={{fontSize:18,color:'red'}}>{item}</Text>
//           )}
//           renderSectionHeader={({section:{name}}) => (
//             <Text style={{fontSize:19,color:'blue'}}>${name}</Text>
//           )}

//         />

//     </View>
//   );
// }

import { View, Text, SectionList ,Image} from "react-native";
import React from "react";

let dataA = [
  {
    id: 1,
    value: "AA 1",
    image: require("./assets/bifour_-removebg-preview.png"),
  },
  {
    id: 2,
    value: "AA 2",
    image: require("./assets/bifour_-removebg-preview.png"),
  },
];

let dataB = [
  {
    id: 3,
    value: "BB 1",
    image: require("./assets/bifour_-removebg-preview.png"),
  },
  {
    id: 4,
    value: "BB 2",
    image: require("./assets/bifour_-removebg-preview.png"),
  },
];

let dataC = [
  {
    id: 5,
    value: "CC 1",
    image: require("./assets/bifour_-removebg-preview.png"),
  },
  {
    id: 6,
    value: "CC 2",
    image: require("./assets/bifour_-removebg-preview.png"),
  },
];

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <SectionList
        //đường gạch dưới
        ItemSeparatorComponent={() => {
          return (
            <View
              style={{ height: 0.5, width: "100%", backgroundColor: "red" }}
            />
          );
        }}
        //nhận dữ liệu mãng vào
        sections={[
          { title: "Header A", data: dataA }, //sau khi nhận dữ liệu mãng vào mỗi title nó sẽ chứa dataA,dataB,dataC
          { title: "Header B", data: dataB },
          { title: "Header C", data: dataC },
        ]}
        //header
        renderSectionHeader={({ section }) => (
          <Text style={{ fontSize: 20, backgroundColor: "green" }}>
            {section.title}
          </Text>
        )}
        //cái này sẽ do renderSectionHeader này quản lí
        renderItem={({ item }) => (
          <View style={{flexDirection:'row',alignItems:'center'}}> 
            
            <Image style={{width:40,height:40}} source={item.image}/>
            <Text onPress={() => alert(JSON.stringify(item))}>
              {item.value}
            </Text>
           
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default App;

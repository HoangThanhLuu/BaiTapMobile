import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import SearchFoot from "./SearchFoot";

const WelcomeHome = ({navigation,route}) => {
  const [data, setData] = useState([]);
  const [backgroundButton, setBackgroundButton] = useState(null);
 
 
  useEffect(() => {
    dataFect();
  }, []);
  const dataFect = () => {
    return fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/Lab07_02")
      .then((res) => res.json())
      .then((json) => setData(json));
  };
  const handledBackground = (backgroundButton) => {
      setBackgroundButton(backgroundButton);
    
  };
  const handledPinkDounut= (btnFloating) => {
     const floating =   data.filter((item) => item.name1 === "Pink Donut")
      
        setData(floating)
  }
  const handledFloating= (btnFloating) => {
    const floating =   data.filter((item) => item.name1 === "Floating")
     
       setData(floating)
 }
 const handledTastyDonut= (btnFloating) => {
  const floating =   data.filter((item) => item.name1 === "Tasty Donut")
   
     setData(floating)
}

  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}
    >
      <View style={{ flex: 1, width: "95%", height: "100%" }}>
        <Text style={{ fontSize: 20 }}>Welcome HTL</Text>
        <Text style={{ fontSize: 20, fontWeight: "700", marginTop: 15 }}>
          Choice you Best food
        </Text>
        <SearchFoot  />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => [handledBackground("Dounut"),handledTastyDonut("Dounut")]}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
              backgroundColor:backgroundButton === "Dounut" ? "orange" : "white"
              
            }}
          >
            <Text style={{ fontSize: 16, color: "black" }}>Dounut</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => [setBackgroundButton("Floating"),handledFloating("Floating")]}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginHorizontal: 10,
              borderWidth: 1,
              backgroundColor:backgroundButton === "Floating" ? "orange" : "white"
           
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
              
              }}
            >
              Floating
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
               onPress={() => [setBackgroundButton("Pink Donut"),handledPinkDounut()]}
            style={{
              width: 80,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 1,
            backgroundColor:backgroundButton === "Pink Donut" ? "orange" : "white"
            }}
          >
            <Text
              style={{
                fontSize: 16,
                color: "black",
               
              }}
            >
              PinkDonut
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          numColumns={1}
          renderItem={({ item, index }) => {
            return (
              <ScrollView>
                <View
                  style={{
                    backgroundColor: "#F4DDDD",
                    width: "100%",
                    height: 110,
                    marginTop: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      padding: 10,
                    }}
                  >
                    <Image
                      style={{ width: 90, height: 90, borderRadius: 10 }}
                      source={item.avatar}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <Text style={{ fontSize: 18, fontWeight: "400" }}>
                        {item.name1}
                      </Text>
                      <Text style={{ fontSize: 18, color: "#000000" }}>
                        {item.name2}
                      </Text>
                      <Text style={{ fontSize: 18, fontWeight: "400" }}>
                        {item.money}
                      </Text>
                    </View>
                  </View>
                  <Pressable onPress={() => {navigation.navigate('AddHome',{item})}}>
                    <Image
                      style={{
                        width: 40,
                        height: 40,
                        position: "absolute",
                        right: 1,
                        bottom: 1,
                      }}
                      source={require("../assets/plus_button.png")}
                    />
                  </Pressable>
                </View>
              </ScrollView>
            );
          }}
        />
      </View>
    </View>
  );
};

export default WelcomeHome;
// import React, { useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';

// const WelcomeHome = () => {
//   const [selectedButton, setSelectedButton] = useState(null);

//   const handleButtonPress = (buttonName) => {
//     setSelectedButton(buttonName);
//   };

//   return (
//     <View style={{ flex: 1, width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
//       <TouchableOpacity
//         style={{
//           width: 80,
//           height: 40,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginHorizontal: 10,
//           borderWidth: 1,
//           backgroundColor: selectedButton === 'Dounut' ? 'blue' : 'white', // Change color based on selectedButton
//         }}
//         onPress={() => handleButtonPress('Dounut')}
//       >
//         <Text style={{ fontSize: 16, color: 'black' }}>Dounut</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           width: 80,
//           height: 40,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginHorizontal: 10,
//           borderWidth: 1,
//           backgroundColor: selectedButton === 'Dounut2' ? 'blue' : 'white', // Change color based on selectedButton
//         }}
//         onPress={() => handleButtonPress('Dounut2')}
//       >
//         <Text style={{ fontSize: 16, color: 'black' }}>Dounut</Text>
//       </TouchableOpacity>

//       <TouchableOpacity
//         style={{
//           width: 80,
//           height: 40,
//           justifyContent: 'center',
//           alignItems: 'center',
//           marginHorizontal: 10,
//           borderWidth: 1,
//           backgroundColor: selectedButton === 'Dounut3' ? 'blue' : 'white', // Change color based on selectedButton
//         }}
//         onPress={() => handleButtonPress('Dounut3')}
//       >
//         <Text style={{ fontSize: 16, color: 'black' }}>Dounut</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// export default WelcomeHome;

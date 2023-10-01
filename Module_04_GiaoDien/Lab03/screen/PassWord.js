import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign } from '@expo/vector-icons';
const PassWord = () => {
  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <LinearGradient
        colors={["#3B3B98", "transparent"]} // Mảng màu sử dụng trong gradient
        start={{ x: 1, y: 0.8 }} // Điểm bắt đầu gradient nằm ở phía trên bên trái của LinearGradient.
        end={{ x: 0, y: 0 }} // Điểm kết thúc gradient nằm ở bên phải
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "90%",
            
            height: "90%",
            flexDirection: "column",

            alignItems: "center",
            backgroundColor: "#23235B",
            borderRadius: 20,
            shadowOffset: { width: 5, height: 3 }, // Độ dịch của shadow
            shadowOpacity: 0.8, // Độ trong suốt của shadow
            shadowRadius: 20, // Bán kính của shadow
            elevation: 15, // (Android) Độ cao của shadow, dùng elevation thay thế cho các thuộc tính shadow
          }}
        >
          <View
            style={{
              width: 200,
              height: 60,
              
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "white",
                fontWeight: "800",
                textAlign: "center",
              }}
            >
              PASSWORD{"\n"} GENERATOR
            </Text>
          </View>
          <View
            style={{
              width: "90%",
              height: "70%",
              
              flexDirection: "column",
              marginTop: 5,
              alignItems: "center",
            }}
          >
            <View
              style={{
                width: "100%",
                height: 50,
                backgroundColor: "#151537",
                marginTop: 10,
              }}
            />

            <View
              style={{
                width: "100%",
                height: 50,
                
                marginTop: 20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
               
              }}
            >
              <Text style={{fontSize:20,color:'white'}}>Password length</Text>
              <View style={{height:30,width:110,backgroundColor:'white'}}></View>
            </View>

            <View
              style={{
                width: "100%",
                height: 50,
                
                marginTop: 20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
               
              }}
            >
              <Text style={{fontSize:20,color:'white'}}>Include lower case letters</Text>
              <View style={{height:30,width:30,backgroundColor:'white'}}><AntDesign name="check" size={30} color="black" /></View>
            </View>

            <View
              style={{
                width: "100%",
                height: 50,
                
                marginTop: 20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
               
              }}
            >
              <Text style={{fontSize:20,color:'white'}}>Include upcase letters </Text>
              <View style={{height:30,width:30,backgroundColor:'white'}}></View>
            </View>


            <View
              style={{
                width: "100%",
                height: 50,
                
                marginTop: 20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
               
              }}
            >
              <Text style={{fontSize:20,color:'white'}}>Include number</Text>
              <View style={{height:30,width:30,backgroundColor:'white'}}><AntDesign name="check" size={30} color="black" /></View>
            </View>
            <View
              style={{
                width: "100%",
                height: 50,
                
                marginTop: 20,
                flexDirection:'row',
                justifyContent:'space-between',
                alignItems:'center',
               
              }}
            >
              <Text style={{fontSize:20,color:'white'}}>Include upcase letters </Text>
              <View style={{height:30,width:30,backgroundColor:'white'}}></View>
            </View>
           

             <TouchableOpacity style={{width:'90%',height:50,marginTop:15,backgroundColor:'#3B3B98',justifyContent:'center',alignItems:'center'}}><Text style={{fontWeight:'800',fontSize:19,color:'white'}}>GENERATE PASSWORD</Text></TouchableOpacity>













          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default PassWord;

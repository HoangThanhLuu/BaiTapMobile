import { View, Text, Pressable, Image } from "react-native";
import React from "react";

const HomeCricle = ({navigation}) => {
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}
    >
      <View
        style={{
          width: "98%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          borderWidth: 1,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            top: 20,
            fontSize: 20,
            fontWeight: "700",
          }}
        >
          A premium online store for {"\n"} sporter and their stylish choice
        </Text>
        <View
          style={{
            width: "100%",
            height: "50%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#F8E6E5",
            borderRadius: 20,
          }}
        >
          <Image
            style={{ width: "80%", height: "80%", resizeMode: "contain" }}
            source={require("../assets/bifour_-removebg-preview.png")}
          />
        </View>

        <Text
          style={{
            textAlign: "center",
            fontSize: 25,
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Power Bike {"\n"} Shop
        </Text>
        <Pressable
        onPress={() => {navigation.navigate('SelectCricle')}}
          style={{
            width: "70%",
            justifyContent: "center",
            alignItems: "center",
            bottom: 18,
            height: 50,
            backgroundColor: "red",
            borderRadius: 20,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "700", color: "white" }}>
            Get Started
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default HomeCricle;

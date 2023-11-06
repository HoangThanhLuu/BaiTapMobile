import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
const BuyCricle = ({ route,navigation }) => {
  const { item } = route.params; //trích xuất các biến từ một đối tượng và gán nó cùng tên để dẽ gọi nó
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View
        style={{
          width: "95%",
          height: "100%",
          flexDirection: "column",
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <View
          style={{
            width: "100%",
            height: "40%",
            backgroundColor: "#F8E6E5",
            justifyContent: "center",
            alignItems: "ce",
          }}
        >
          <Image
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
            source={item.image}
          />
        </View>

        <Text style={{ fontSize: 24, fontWeight: "700", marginTop: 30 }}>
          {item.name}
        </Text>
        <View style={{ flexDirection: "row", marginLeft: 10, marginTop: 30 }}>
          <Text style={{ color: "##000000", fontSize: 20 }}>
            15% OFF I {(item.money * 15) / 100}$
          </Text>

          <Text style={{ marginLeft: 30, fontSize: 20 }}>
            {item.money - (item.money * 15) / 100}
            <View
              style={{
                height: 1,
                width: 40,
                backgroundColor: "black",
                left: 1,
                top: "60%",
                position: "absolute",
              }}
            ></View>
          </Text>
        </View>
        <Text style={{ fontSize: 20, fontWeight: "700", marginVertical: 15 }}>
          Description
        </Text>
        <Text>
          It is a very important form of writing as{"\n"} we write almost
          everything in{"\n"} paragraphs, be it an answer, essay, story, emails,
          etc.
        </Text>

        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            marginVertical: 30,
          }}
        >
          <AntDesign name="hearto" size={30} color="black" />
          <TouchableOpacity
            onPress={() => navigation.navigate('SelectCricle')}
            style={{
              width: "60%",
              height: 50,
              backgroundColor: "red",
              marginRight: 20,
              justifyContent:'center',
              alignItems:'center',
              borderRadius:15
            }}
          >
            <Text style={{fontSize:20,color:'white'}}>Add to card</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BuyCricle;

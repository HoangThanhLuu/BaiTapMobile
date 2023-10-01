import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const USB = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          flex: 1,
          width: "90%",
          height: "100%",
         
          alignItems: "center",
        }}
      >
        <View
          style={{ flexDirection: "row", height: 100, alignItems: "center" }}
        >
          <Image
            style={{ width: 100, height: 100 }}
            source={require("../assets/usb.png")}
          ></Image>
          <Text style={{ marginLeft: 20, fontWeight: "600" }}>
            USB Bluetooth Music Receiver P{"\n"} HJX-001- Biến loa thường thành
            loa {"\n"}bluetooth
          </Text>
        </View>
        <Text style={{ fontWeight: "800", marginTop: 10 }}>
          Cực kì hài lòng
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            width: "70%",
            justifyContent: "space-between",
          }}
        >
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Star.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Star.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Star.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Star.png")}
          />
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../assets/Star.png")}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            borderColor: "#1511EB",
            marginTop: 15,
            alignItems: "center",
            width: "85%",
            borderWidth: 1,
            height: 70,
            justifyContent: "center",
          }}
        >
          <Entypo name="camera" size={35} color="black" />
          <Text style={{ fontSize: 20, marginLeft: 10, fontWeight: "700" }}>
            Thêm hình ảnh
          </Text>
        </View>

        <View
          style={{
            marginTop: 25,

            width: "85%",
            borderWidth: 1,
            height: 250,
          }}
        >
          <TextInput
            placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
            multiline={true} // Cho phép nhiều dòng
            numberOfLines={5} // Điều này chỉ định số dòng ban đầu
          />
        </View>


        <View
          style={{
            marginTop: 15,

            width: "85%",
            borderWidth: 1,
            height: 35,backgroundColor:'#0D5DB6'
          }}
        >
          <TouchableOpacity style={{justifyContent:"center",alignItems:'center'}}><Text style={{fontSize:20,color:'white',fontWeight:'700'}}>Gửi</Text></TouchableOpacity>
        </View>




      </View>
    </View>
  );
};

export default USB;

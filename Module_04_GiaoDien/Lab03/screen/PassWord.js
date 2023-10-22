import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

export default function PassWord() {
 

  const [colorStar, setColorStar] = useState(0);
const [displayText, setDisplayText] = useState("");
  const handleStarPress = (starValue) => {
    setColorStar(starValue);

    switch (starValue) {
        case 1:
          setDisplayText("Rất tệ");
          break;
        case 2:
          setDisplayText("Không hài lòng");
          break;
        case 3:
          setDisplayText("Bình thường");
          break;
        case 4:
          setDisplayText("Hài lòng");
          break;
        case 5:
          setDisplayText("Cực kỳ hài lòng");
          break;
        default:
          setDisplayText("");
      }
   
    
  };

  const handleSend = () => {
    Alert.alert("Success", "Gửi đánh giá thành công!");
  };

  return (
    <View style={styles.myWalletScreen}>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 100,
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 60, resizeMode: "contain" }}
          source={require("../assets/usb.png")}
        />
        <View style={{ width: "80%", marginLeft: 10 }}>
          <Text style={{ fontWeight: "bold" }}>
            USB Bluetooth Music Receiver HJX-001- Biến loa thường thành loa
            bluetooth
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
       <Text>{displayText}</Text>
        <View style={{ flexDirection: "row" }}>
     
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity
              onPress={() => handleStarPress(star)} //khi có truyền tham số vào thì cho () =>
              key={star}
            >
              {console.log("star", star)}
              {console.log("colorStar", colorStar)}
              <Entypo
                name="star"
                size={40}
                color={star <= colorStar ? "#f2dd1b" : "gray"}
                //sau khi trạng thái thay đổi 1 = 1, 1< 2,3,4,5 thì chỉ có 1 mới đổi màu
              />
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          margin: 20,
          alignItems: "center",
          borderColor: "blue",
          borderWidth: 1,
          borderRadius: 10,
          paddingHorizontal: 40,
          paddingVertical: 10,
        }}
      >
        <Entypo name="camera" size={40} color="black" />
        <Text style={{ marginLeft: 20, fontWeight: "bold", fontSize: 16 }}>
          Thêm hình ảnh
        </Text>
      </View>

      <View>
        <TextInput
          placeholder="Hãy chia sẻ những điều mà bạn thích về sản phẩm"
          style={{
            marginLeft: 10,
            width: "90%",
            height: 150,
            color: "black",
            borderColor: "gray",
            borderWidth: 1,
            borderRadius: 10,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}
        />
      </View>
      <TouchableOpacity
        // onPress={handleSend}
        style={{ width: "100%", alignItems: "center" }}
      >
        <View
          style={{
            backgroundColor: "#0d5db6",
            width: "80%",
            height: 50,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "#fff" }}>
            Gửi
          </Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  myWalletScreen: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

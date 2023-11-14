import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const AddHome = ({ route }) => {
  console.log(route);
  const { item } = route.params;
  const [number, setNumber] = useState(1);
  const [money, setMoney] = useState(item.money);
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}
    >
      <View
        style={{
          flex: 1,
          width: "95%",
          height: "100%",
          alignItems: "center",
          borderWidth: 1,
          backgroundColor: "white",
        }}
      >
        <Image
          style={{ width: "100%", height: "40%", resizeMode: "contain" }}
          source={item.avatar}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <View>
            <Text style={{ fontSize: 20, fontWeight: "600" }}>
              {item.name1}
            </Text>
            <Text style={{ fontSize: 20 }}>{item.name2}</Text>
          </View>
          <Text style={{ fontSize: 20, fontWeight: "600" }}>${money}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            marginTop: 20,
            justifyContent: "space-between",
          }}
        >
          <View>
            <View style={{ flexDirection: "row", marginBottom: 10 }}>
              <Image
                style={{ width: 30, height: 30 }}
                source={require("../assets/Vector.png")}
              />
              <Text style={{ marginLeft: 10 }}>Delivery in</Text>
            </View>
            <Text style={{ marginTop: 15, marginLeft: 12 }}>30 min</Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "ce",
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setNumber(number - 1), setMoney(money - 10.0);
              }}
              style={{
                backgroundColor: "orange",
                height: 15,
                width: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{}}>-</Text>
            </TouchableOpacity>
            <Text style={{ marginHorizontal: 15 }}>{number}</Text>
            <TouchableOpacity
              onPress={() => {
                setNumber(number + 1), setMoney(money + 10.0);
              }}
              style={{
                backgroundColor: "orange",
                height: 15,
                width: 15,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{}}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{ width: "100%" }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "700",
              marginTop: 10,
              marginBottom: 15,
            }}
          >
            Restaurants info
          </Text>
          <Text>
            Order a Large Pizza but the size is the equivalent{"\n"} of a
            medium/small from other places at the{"\n"} same price range.
          </Text>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: "#F1B000",
            position: "absolute",
            bottom: 2,
            width: "60%",
            height: 40,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddHome;

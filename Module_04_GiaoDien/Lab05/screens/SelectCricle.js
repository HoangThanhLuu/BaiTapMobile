import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Image,
  Pressable,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const data = [
  {
    id: 1,
    image: require("../assets/bifour_-removebg-preview.png"),
    name: "Pina Mountain",
    money: "1800",
  },
  {
    id: 2,
    image: require("../assets/bione-removebg-preview.png"),
    name: "Pina Mountai",
    money: "1800",
  },
  {
    id: 3,
    image: require("../assets/bithree_removebg-preview (1).png"),
    name: "Pina Bike",
    money: "1900",
  },
  {
    id: 4,
    image: require("../assets/bitwo-removebg-preview.png"),
    name: "Pinarello",
    money: "2000",
  },
  {
    id: 5,
    image: require("../assets/bithree_removebg-preview (1).png"),
    name: "Pina Mountain",
    money: "1800",
  },
  {
    id: 6,
    image: require("../assets/bifour_-removebg-preview.png"),
    name: "Pinarello",
    money: "$1800",
  },
  {
    id: 7,
    image: require("../assets/bifour_-removebg-preview.png"),
    name: "Pina Mountain",
    money: "1800",
  },
  {
    id: 8,
    image: require("../assets/bione-removebg-preview.png"),
    name: "Pina Mountain",
    money: "1800",
  },
  {
    id: 9,
    image: require("../assets/bithree_removebg-preview (1).png"),
    name: "Pinarello",
    money: "1800",
  },
  {
    id: 10,
    image: require("../assets/bitwo-removebg-preview.png"),
    name: "Pina Mountain",
    money: "1800",
  },
];
const SelectCricle = ({ navigation }) => {
  const [RoadBike, setRoaadBike] = useState(data);

  const hanledRoad = () => {
    const RoadA = data.filter((item) => item.name === "Pina Mountain");
    setRoaadBike(RoadA);
  };
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "",
      headerLeft: () => (
        <View>
          <Text style={{ fontSize: 20, color: "red", fontWeight: "900" }}>
            The world’s Best Bike
          </Text>
        </View>
      ),
    });
  });
  return (
    <View
      style={{ flex: 1, alignItems: "center", width: "100%", height: "100%" }}
    >
      <View
        style={{
          width: "98%",
          height: "100%",
          flexDirection: "column",
          zIndex: 4,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 14,
          }}
        >
          <TouchableOpacity
            onPress={() => {
                setRoaadBike(data);
            }}
            style={{
              padding: 20,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "red",
            }}
          >
            <Text>ALL</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={hanledRoad}
            style={{
              padding: 20,
              marginHorizontal: 10,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "red",
            }}
          >
            <Text>RoadBike</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 20,
              borderRadius: 15,
              borderWidth: 1,
              borderColor: "red",
            }}
          >
            <Text>Mountain</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={RoadBike}
          numColumns={2}
          renderItem={({ item, index }) => (
            <ScrollView>
              <Pressable
                onPress={() => {
                  navigation.navigate("BuyCricle", { item });
                }}
                style={{
                  flex: 1,
                  width: "90%",
                  height: 400,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                  marginVertical: 10,
                  marginHorizontal: 4,
                  backgroundColor: "#FEF5ED",
                  shadowRadius: 10,
                  shadowOffset: 0.8,
                  shadowOpacity: { width: 2, height: 5 },
                  shadowColor: "black",
                }}
              >
                <AntDesign
                  style={{ position: "absolute", left: 3, top: 3 }}
                  name="hearto"
                  size={24}
                  color="black"
                />
                <Image
                  style={{ width: "90%", height: 150, resizeMode: "contain" }}
                  source={item.image}
                />
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                  {item.name}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 18, color: "#F7BA83" }}>$</Text>
                  <Text>{item.money}</Text>
                </View>
              </Pressable>
            </ScrollView>
          )}
        />
      </View>
    </View>
  );
};

export default SelectCricle;

import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
const App = () => {
 
 const [hoveredTextId, setHoveredTextId] = useState(null);
  const data = [
   
    {
      id: 1,
      image: require("./assets/ca_nau_lau.png"),
      name: "Cá nấu lẩu ,nấu mì mini",
      name1: "Shop Devang",
    },
    {
      id: 2,
      image: require("./assets/ga_bo_toi (1).png"),
      name: "1kg khô gà bở tỏi",
      name1: "Shop LTD Food",
    },
    {
      id: 3,
      image: require("./assets/xa_can_cau.png"),
      name: "Xe cần cẩu đa năng",
      name1: "Shop Đồ chơi",
    },
    {
      id: 4,
      image: require("./assets/do_choi_dang_mo_hinh.png"),
      name: "Đồ chơi dạng mô hình",
      name1: "Shop đồ chơi",
    },
    {
      id: 5,
      image: require("./assets/lanh_dao_gian_don.png"),
      name: "Lãnh đạo đơn giản",
      name1: "Shop Devang",
    },
    {
      id: 6,
      image: require("./assets/hieu_long_con_tre.png"),
      name: "Hiếu lòng con tre",
      name1: "Shop Devang",
    },
    {
      id: 7,
      image: require("./assets/trump 1.png"),
      name: "Thiên tài lãnh đạo",
      name1: "Shop Devang",
    },
  ];
//const heder = ????????
 

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 40,
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          zIndex: 4,
        }}
      >
        <Feather name="arrow-left" size={30} color="white" />
        <Text style={{ color: "white", fontSize: 28 }}>Chat</Text>
        <AntDesign name="shoppingcart" size={30} color="white" />
      </View>

      <ScrollView>
        <FlatList
          ListHeaderComponent={<Text>Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!</Text>}
          ListHeaderComponentStyle={{height:80,justifyContent:'center',alignItems:'center',fontSize:19,backgroundColor:'#E4E4E4'}}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onMouseEnter={() => setHoveredTextId(item.id)}//dùng để rê chuột vào thì sẽ đổi màu đặt cho nó một cái id để biết được rê vào chỗ nào thì đổi màu
              onMouseLeave={() => setHoveredTextId(null)}//đây là sự kiện khi rời chuột khỏi phần tử
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 3,
                  backgroundColor: "#E4E4E4",
                  borderWidth: 1,
                }}
              >
                <Image style={{ width: 90, height: 90 }} source={item.image} />
                <View style={{ marginVertical: 10 }}>
                  <Text
                    style={{marginVertical:10,
                      color: hoveredTextId === item.id ? "blue" : "black",
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text style={{ color: hoveredTextId === item.name1 ? "blue" :'red' }}>{item.name1}</Text>
                </View>
              </View>{" "}
            </TouchableOpacity>
          )}
        />
      </ScrollView>

      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#1BA9FF",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          position: "absolute",
          bottom: 10,
          padding: 10,
        }}
      >
        <MaterialIcons name="subject" size={30} color="black" />

        <AntDesign name="shoppingcart" size={30} color="black" />
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/Vector (2).png")}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

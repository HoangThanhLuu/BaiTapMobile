import { View, Text } from "react-native";
import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./reudx/ProductSlice";

const DemoApp = () => {
  const dispatch = useDispatch();
   const productions = useSelector((state) => state); // Giả sử 'products' là thuộc tính trong state của bạn
  //const productions = useSelector((state) => state.product.products) || [];
console.log(productions);
//   useEffect(() => {
//     dispatch(fetchProducts());
//   }, []); // Gửi hành động khi thành phần được tạo ra

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text
        onPress={() => {
          dispatch(fetchProducts());
        }}
      >
        Gọi API
      </Text>
      {/* {Array.isArray(productions) &&
        productions.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
          </View>
        ))} */}
    </View>
  );
};

export default DemoApp;

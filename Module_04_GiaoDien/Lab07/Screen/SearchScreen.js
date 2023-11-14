import { View, Text, TextInput } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

const SearchScreen = () => {
  return (

      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "80%",
          height: 50,
          borderWidth:1,
          borderColor:'#C8C8C8C8',
          marginTop:10
          
        }}
      >
        <AntDesign name="search1" size={24} color="black" />
        <TextInput
          style={{ marginLeft: 4 ,flex:1}}
          placeholder="Search"
        ></TextInput>
      </View>

  );
};

export default SearchScreen;

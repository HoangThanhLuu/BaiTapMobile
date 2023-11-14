import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import SearchScreen from "./SearchScreen";

const AddJob = ({ navigation, route }) => {
  const { textJob } = route?.params;
  const [data, setData] = useState([]);
  const [dataUpdate, setdataUpdate] = useState([]);
  useEffect(() => {
    dataEffect();
  }, []);

  useEffect(() => {
   // handledUpdate();//b2:sau khi update xong thì sẽ gọi lại để in ra
    dataEffect()
  }, [dataUpdate]);//kiểm tra sate có sự thay đổi không

  const handledUpdate = () => {
    console.log(2);
    return fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/todo", {
      method: "POST",
      body: JSON.stringify({
        Job: textJob,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => {
        // Update the state with the new data
        setdataUpdate(json);
        // Fetch the latest data from the API
        dataEffect();
      })
      .catch((err) => console.log(err));
  };
  
  const dataEffect = () => {
    return fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/todo")
      .then((res) => res.json())
      .then((json) => setData(json));
  };

  const { email } = route?.params;
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerRight: () => (
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            style={{ width: 40, height: 40, borderRadius: "50%" }}
            source={require("../assets/Frame.png")}
          />
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 18, fontWeight: "600" }}>{email}</Text>
            <Text>Have agrate day a head</Text>
          </View>
        </View>
      ),
    });
  }, []);
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}
    >
      <View
        style={{
          flex: 1,
          width: "95%",
          height: "100%",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
        }}
      >
        <SearchScreen />

        <FlatList
          data={data}
          numColumns={1}
          renderItem={({ item, index }) => (
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "80%",
                  height: 40,
                  borderRadius: 15,
                  marginTop: 20,
                  backgroundColor: "#DDDDDD",
                  shadowColor: "black",
                  shadowOffset: 0.8,
                  shadowOpacity: { width: 10, height: 10 },
                }}
              >
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../assets/Frame (2).png")}
                />
                <Text
                  style={{
                    marginHorizontal: 75,
                    fontSize: 18,
                    fontWeight: "600",
                  }}
                >
                  {item.Job}
                </Text>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require("../assets/Frame (4).png")}
                />
              </View>
            </View>
          )}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("Screen03", { email })}
            style={{
              width: 80,
              height: 80,
              borderRadius: "50%",
              backgroundColor: "#21ABBE",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Image
              style={{ width: 50, height: 50 }}
              source={require("../assets/Frame (3).png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddJob;

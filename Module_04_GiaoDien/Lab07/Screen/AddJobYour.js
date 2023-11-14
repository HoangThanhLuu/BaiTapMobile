import { View, Text, Image, TextInput, Pressable } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";

const AddJobYour = ({ navigation, route }) => {
  console.log(route);
  const { email } = route?.params;
  const [textJob, setTextJob] = useState("");
  useLayoutEffect(() => {
    navigation.setOptions({
      title: "",
      headerLeft: () => (
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
      headerRight: () => (
        <AntDesign
          onPress={() => navigation.navigate('Screen02')}
          name="arrowleft"
          size={30}
          color="black"
          style={{ marginRight: 20 }}
        />
      ),
    });
  }, []);
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}
    >
      <Text style={{ marginVertical: 20, fontSize: 20, fontWeight: "700" }}>
        ADD YOUR JOB
      </Text>
      <View
        style={{
          width: "70%",
          height: 45,
          borderWidth: 1,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 30, height: 30 }}
          source={require("../assets/Frame (5).png")}
        />
        <TextInput
          style={{ flex: 1, marginLeft: 10 }}
          placeholder="Enter your job"
          value={textJob}
          onChangeText={(val) => setTextJob(val)}
        />
      </View>
      <Text>{textJob}</Text>
      <Pressable
      onPress={() => navigation.navigate('Screen02',{textJob})}
        style={{
          flexDirection: "row",
          width: 130,
          height: 40,
          marginTop: 40,
          backgroundColor: "#21ABBE",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ color: "white" }}>FINISH</Text>
        <AntDesign
          style={{ color: "white" }}
          name="arrowright"
          size={24}
          color="black"
        />
      </Pressable>
    </View>
  );
};

export default AddJobYour;

// import { View, Text, TextInput, Pressable } from "react-native";
// import React, { useState } from "react";
// import { MaterialCommunityIcons } from "@expo/vector-icons";
// import { AntDesign } from "@expo/vector-icons";
// const HomeScreen = ({ navigation }) => {
//   const [text, setText] = useState("");
//   return (
//     <View
//       style={{ flex: 1, alignItems: "center", width: "auto", height: "auto" }}
//     >
//       <View
//         style={{
//           flex: 1,
//           alignItems: "center",
//           width: "90%",
//           height: "auto",
//           borderWidth: 1,
//           flexDirection: "column",
//           justifyContent: "center",
//         }}
//       >
//         <Text style={{ color: "#8353E2", fontSize: 25, fontWeight: "700" }}>
//           MANAGE YOUR TASK
//         </Text>
//         <View
//           style={{
//             flexDirection: "row",
//             justifyContent: "space-around",
//             width: "80%",
//             height: 30,
//             borderWidth: 2,
//             borderRadius: 10,
//             marginTop: 30,
//           }}
//         >
//           <MaterialCommunityIcons
//             name="email-outline"
//             size={24}
//             color="black"
//             style={{marginHorizontal:10}}
//           />
//           <TextInput
//           style={{flex:1}}
//             value={text}
//             onChangeText={(val) => setText(val)}
//             placeholder="Enter your email"
//           />
//         </View>

//         <Pressable
//         onPress={() => navigation.navigate('SearchHome',{text})}
//           style={{
//             backgroundColor: "#00BDD6",
//             flexDirection: "row",
//             position: "absolute",
//             bottom: 70,
//             justifyContent: "center",
//             alignItems: "center",
//             borderRadius: 10,
//             padding: 10,
//           }}
//         >
//           <Text style={{ fontSize: 24, fontWeight: "700", color: "white" }}>
//             Get Started
//           </Text>
//           <AntDesign name="arrowright" size={24} color="white" />
//         </Pressable>
//       </View>
//     </View>
//   );
// };

// export default HomeScreen;

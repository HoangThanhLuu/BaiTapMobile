// import React, { useEffect, useState } from "react";
// import { View, Text, TouchableOpacity,Modal, TextInput } from "react-native";

// const App = () => {
//   const [text1, setText1] = useState([]);
//   const [modal,setModal] = useState(false);

//   const [firstName,setFistName] = useState('');
//   const [lastName,setlastName] = useState('');
//   const [gender,setGender] = useState('');
//   const [email,setEmailName] = useState('');
//   const [tell,setTell] = useState('');
//   const [description,setDescription] = useState('');
//   useEffect(() => {
//     AddFect();
//   }, []);

//   const AddFect = () => {
//     return fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD", {
//       method: "GET",
//     })
//       .then((res) => res.json())
//       .then((json) => setText1(json));
//   };
//   const handledDelete = (item) => {
//     fetch(`https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD/${item.id}`, {
//       method: "DELETE",
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json), AddFect()); //sau khi xóa xong gọi lại fectEffect cập nhập lại danh sách
//   };

//   const handleModal = () => {
//     setModal(true)
//   }

//   const handleSave = () => {
//     fetch('https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD', {
//       method: "POST",
// //Khi bạn gọi JSON.stringify như trong đoạn mã, nó sẽ chuyển đổi đối tượng thành chuỗi JSON để có thể gửi dữ liệu đó đến máy chủ thông qua HTTP POST request.
//       body:JSON.stringify({//đưa dữ liệu từ object về kiểu chuỗi(để ngôn ngữ có thể hiểu) firstName => "firstName"
//         "firstName": firstName,
//         "lastName":lastName,
//         "gender":gender,
//         "tell":tell,
//         "email":email,

//       }),
//       headers: {
//         Accept: "application/json",
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => res.json())
//       .then((json) => console.log(json),setModal(false), AddFect());

//   }

//   return (
//     <View style={{ flex: 1 }}>

//       <Modal visible={modal}>
//       <View style={{flexDirection:'row'}}>
//           <Text>firstName:</Text>
//           <TextInput onChangeText={(text) => setFistName(text)} style={{width:'auto',height:30,borderWidth:1}}/>
//           </View>

//       <View style={{flexDirection:'row'}}>
//           <Text>lastName:</Text>
//           <TextInput onChangeText={(text) => setlastName(text)} style={{width:'auto',height:30,borderWidth:1}}/>
//           </View>

//       <View style={{flexDirection:'row'}}>
//           <Text>Gender:</Text>
//           <TextInput onChangeText={(text) => setGender(text)} style={{width:'auto',height:30,borderWidth:1}}/>
//           </View>

//       <View style={{flexDirection:'row'}}>
//           <Text>tell:</Text>
//           <TextInput onChangeText={(text) => setTell(text)} style={{width:'auto',height:30,borderWidth:1}}/>
//           </View>

//           <View style={{flexDirection:'row'}}>
//           <Text>email:</Text>
//           <TextInput onChangeText={(text) => setEmailName(text)} style={{width:'auto',height:30,borderWidth:1}}/>
//           </View>

//       <View style={{flexDirection:'row'}}>
//           <Text>description:</Text>
//           <TextInput onChangeText={(text) => setDescription(text)} style={{width:'auto',height:30,borderWidth:1}}/>
//           </View>
//         <TouchableOpacity onPress={handleSave} style={{width:100,height:50,backgroundColor:'yellow',justifyContent:'center',alignItems:'center'}}>
//             <Text>save</Text>
//         </TouchableOpacity>
//       </Modal>
//       <View style={{flexDirection:'row',justifyContent:'space-between'}}>
//         <Text style={{ fontSize: 20, fontWeight: "700" }}>
//           Độ dài của dữ liệu:{text1.length}
//         </Text>
//         <TouchableOpacity onPress={handleModal}>
//           <Text style={{color:'blue',fontSize:20}}>New</Text>
//         </TouchableOpacity>
//       </View>

//       {text1.map((item, index) => {
//         return (
//           <View
//             style={{
//               borderBottomWidth: 1,
//               padding: 10,
//               width: "auto",
//               flexDirection: "row",
//               justifyContent: "space-between",
//             }}
//           >
//             <View key={index}>
//               <Text>
//                 {item.firstName} {item.lastName}
//               </Text>
//               <Text>{item.lastName}</Text>
//               <Text>{item.gender}</Text>
//               <Text>{item.tell}</Text>
//               <Text>{item.email}</Text>
//             </View>
//             <TouchableOpacity onPress={() => handledDelete(item)}>
//               <Text style={{ fontSize: 20, color: "red" }}>Delete</Text>
//             </TouchableOpacity>
//           </View>
//         );
//       })}
//     </View>
//   );
// };

// export default App;

// import React, { useReducer } from 'react';
// import { View, Text, Button } from 'react-native';

// const initialState = {
//   count: 0,
// };

// const reducer = (stat, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count:stat.count +1};
//     case 'DECREMENT':
//       return { count: stat.count - 1 };
//     default:
//       return stat;
//   }
// };

// const Counter = () => {

//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <View>
//       <Text>Count: {state.count}</Text>
//       <Button
//         title="Increment"
//         onPress={() => dispatch({ type: 'INCREMENT' })}
//       />
//       <Button
//         title="Decrement"
//         onPress={() => dispatch({ type: 'DECREMENT' })}
//       />
//     </View>
//   );
// };

// export default Counter;

import {
  View,
  Text,
  FlatList,
  ScrollView,
  Pressable,
  Modal,
  TextInput,
  Button,
  Alert,
} from "react-native";
import React, { useEffect, useState } from "react";

const App = () => {
  const [list, setList] = useState([]);
  const [modalName, setModalName] = useState(false);
  const [firstName, setFistName] = useState("");
  const [lastName, setlastName] = useState("");
  const [age, setAge] = useState(0);
  const [idName, setId] = useState(null);

  const handleFect = () => {
    return fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((json) => setList(json))
      .catch((err) => console.log(err));
  };

  const handleDelete = (item) => {
    // Update local state immediately
    const updatedList = list.filter((i) => i.id !== item.id);
    setList(updatedList);

    // Make the server request
    fetch(`https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD/${item.id}`, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };

  //Thêm dữ liệu vào
  const handleCreate = () => {
    if (idName === null) {
      // Update local state immediately
      const newItem = { firstName, lastName, age };
      const updatedList = [...list, newItem];
      setList(updatedList);

      // Make the server request
      fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD", {
        method: "POST", //Thêm vào
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json), setModalName(false), clearForm())
        .catch((err) => console.log(err));
    } else {
      // Update local state immediately
      const newItem = { idName, firstName, lastName, age };
      const updatedList = [...list, newItem];
      setList(updatedList);

      // Make the server request
      fetch("https://6545bca8fe036a2fa954bb70.mockapi.io/CRUD", {
        method: "PUST", //Cập nhập
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => console.log(json), setModalName(false), clearForm())
        .catch((err) => console.log(err));
    }
  };

  const clearForm = () => {
    setFistName("");
    setlastName("");
    setAge(0);
    setId(null);
  };

  const handleEdit = (item) => {
    setFistName(item.firstName);
    setlastName(item.lastName);
    setAge(0);
    setId(item.id);
    setModalName(true);
  };
  useEffect(() => {
    handleFect();
  }, []);
  return (
    <View
      style={{ flex: 1, width: "100%", height: "100%", alignItems: "center" }}
    >
      <View style={{ flex: 1, width: "95%", height: "100%" }}>
        <Modal visible={modalName}>
          <Pressable
            onPress={() => setModalName(false)}
            style={{ color: "red" }}
          >
            Colose
          </Pressable>
          <View style={{ flexDirection: "column" }}>
            <View style={{ flexDirection: "column" }}>
              <Text>FirstName</Text>
              <TextInput
                value={firstName}
                onChangeText={(val) => setFistName(val)}
                style={{
                  width: "95%",
                  height: 40,
                  borderWidth: 2,
                  marginTop: 20,
                }}
                placeholder="firstName"
              ></TextInput>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>LastName</Text>
              <TextInput
                value={lastName}
                onChangeText={(val) => setlastName(val)}
                style={{
                  width: "95%",
                  height: 40,
                  borderWidth: 2,
                  marginTop: 20,
                }}
                placeholder="LastName"
              ></TextInput>
            </View>
            <View style={{ flexDirection: "column" }}>
              <Text>Age</Text>
              <TextInput
                value={age}
                onChangeText={(val) => setAge(val)}
                style={{
                  width: "95%",
                  height: 40,
                  borderWidth: 2,
                  marginTop: 20,
                  color: "gray",
                }}
                placeholder="age"
              ></TextInput>
            </View>
            <Button onPress={handleCreate} title="Save"></Button>
          </View>
        </Modal>

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{ fontSize: 19, fontWeight: "700" }}>
            Length List:{list.length}
          </Text>
          <Pressable onPress={() => setModalName(true)}>
            <Text style={{ fontSize: 19, color: "blue" }}>New</Text>
          </Pressable>
        </View>
        <ScrollView>
          {list.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottomWidth: 1,
                }}
              >
                <View style={{ padding: 20 }}>
                  <Text style={{ fontSize: 20, fontWeight: "700" }}>
                    {item.firstName}
                  </Text>
                  <Text>{item.lastName}</Text>
                  <Text>{item.age}</Text>
                </View>

                <Pressable onPress={() => handleDelete(item)}>
                  <Text style={{ fontSize: 19, color: "red" }}>Delete</Text>
                </Pressable>
                <Pressable onPress={() => handleEdit(item)}>
                  <Text style={{ fontSize: 19, color: "red" }}>Edit</Text>
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

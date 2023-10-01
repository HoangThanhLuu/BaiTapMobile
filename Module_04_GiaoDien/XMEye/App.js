import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
export default function App() {
  return (
    <View style={styles.container}>
      
        <Image
          style={styles.image}
          source={require("./assets/eye.png")}
        ></Image>

        <View style={styles.email}>
          <FontAwesome5 name="user-alt" size={24} color="black" />

          <TextInput style={styles.textEmail} placeholder="Please enter email"></TextInput>
        </View>

        <View style={styles.lock}>
        <Ionicons name="ios-lock-closed" size={24} color="black" />

          <TextInput style={styles.textEmail} placeholder="Please enter password"></TextInput>
        </View>

        <TouchableOpacity style={styles.btnLogin}>
            <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>


        
        <View style={styles.RegisterForgot}>
          <Text style={styles.textRegister}>Register</Text>
          <Text style={styles.textForges}>Forgot Password</Text>
        </View>

        <View style={styles.Other}>
          <View style={styles.widhtA}></View>
          
          <Text style={styles.textOther}>Other Login Methed</Text>
          <View style={styles.widhtB}></View>
        </View>

    <View style={styles.btnIcon}> 
    <TouchableOpacity style={styles.btnIconA}>
      <Feather name="user-plus" size={40} color="black" />
    </TouchableOpacity >
    <TouchableOpacity style={styles.btnIconB}>
      <MaterialIcons name="wifi" size={40} color="black" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.btnIconC}>
      <SimpleLineIcons name="social-facebook" size={40} color="black" />
    </TouchableOpacity>
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent:'space-around',
    alignItems:'center'
  },
  image: {
    width: 100,
    height: 100,
  },
  email:{
    flexDirection:'row',
    width:'70%',
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#C4C4C4',
    
    alignItems:'center'
    
    
  },
  lock:{
    flexDirection:'row',
    width:'70%',
    height:40,
    borderBottomWidth:1,
    borderBottomColor:'#C4C4C4',
    alignItems:'center'
    
  },
  textEmail:{
    marginHorizontal:10
  },
  btnLogin:{
    width:'70%',
    height:40,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#386FFC',
    borderRadius:10
  },


  textLogin:{
    color:'white',
    fontWeight:'800',
    fontSize:20
  },
  RegisterForgot:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'70%',
    height:30,
   
  },
  Other:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'70%',
    height:30,
  },
  textOther:{
    width:'50%',
    
  },
  widhtA:{
    height:1,
    width:'23%',
    marginHorizontal:2,
    borderWidth:1,
    color:'#0E18F5 '
  },
  widhtB:{
    height:1,
    width:'26%',
    color:'#0E18F5 ',
    borderWidth:1
    
  },
  btnIcon:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    width:'70%',
    height:50,
    
    
  },
  btnIconA:{
    width:70,
    height:70,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#3AB4FF'
    
  },
  btnIconB:{
    width:70,
    height:70,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'red'
    
  },
  btnIconC:{
    width:70,
    height:70,
    borderWidth:1,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'yellow'
    
  }
});

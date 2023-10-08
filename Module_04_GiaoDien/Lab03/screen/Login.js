import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { SimpleLineIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const Login = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <View style={{position:'absolute',left:10}}>
          <Text style={styles.textLOGIN}>LOGIN</Text>
        </View>
        <View style={[styles.email,{flexDirection:'row',alignItems:'center',backgroundColor:'#DCBE3B',borderColor:'white',shadowColor:'#DCBE3B',shadowOpacity:0.8}]}>
          <FontAwesome5 name="user-alt" size={24} color="black" />
          <TextInput style={styles.textEmail} placeholder="Email"></TextInput>
        </View>
        <View style={[styles.password,{flexDirection:'row',alignItems:'center',backgroundColor:'#DCBE3B',borderColor:'white',shadowColor:'#DCBE3B',shadowOpacity:0.8}]} >
        <MaterialIcons name="lock" size={30} color="black" />
          <TextInput style={styles.textPass} placeholder="Password"></TextInput>
          <AntDesign name="eyeo" size={30} color="black" />
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Shoppe')}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.textCount}>
          <Text style={styles.textWhen}>
          Forgot your password?
          </Text>
          
        </View>

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#C69F01",
  },
  textLOGIN: {
    fontSize: 30,
    fontWeight: "900",
    color: "black",
  },
  body: {
    flex: 1,
    flexDirection: "column", //theo cột
    // justifyContent: "space-around", //dãn theo cột
    marginVertical:30,
    alignItems: "center",
  },
  email: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    marginVertical:40,
    marginTop:90
  },
  textEmail: {
    width: "80%",
    marginLeft: 10,
    borderTopColor: "#D8EFDF",
    borderColor: "#D8EFDF",
  },
  password: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  textPass: {
    width: "80%",
    marginLeft: 10,
    borderTopColor: "#D8EFDF",
    borderColor: "#D8EFDF",
  },
  btnLogin: {
    width: "80%",
    height: 50,
    borderWidth: 1,
    marginVertical:30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    marginTop:40,
    marginVertical:70
  },
  textLogin: {
    color: "white",
    fontSize: 17,
    fontWeight: "800",
  },
  textCount: {
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    
  },
  textWhen: {
    marginVertical: 6,
    
  },
  textFor: {
    color: "#5D25FA",
    fontSize:10,
    fontWeight:'700'
  },
  textOr: {},

  btnCount:{
    flexDirection: "row",
    
    alignItems: "center",
  },
  btnFace:{
    width:70,
    height:40,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#275A8E'
  },
  btnz:{
    width:70,
    height:40,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#1593C6'
  },
  textz:{
    fontSize:26,
    fontWeight:'900',
    color:'white'
  },
  btnGoogle:{
    width:70,
    height:40,
    borderWidth:1,
    justifyContent:'center',
    alignItems:'center',
    
  }
});

export default Login;

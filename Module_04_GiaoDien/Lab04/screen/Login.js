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


const Login = ({navigation}) => {
 
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text style={styles.textLOGIN}>LOGIN</Text>
        <View style={styles.email}>
          <TextInput style={styles.textEmail} placeholder="Email"></TextInput>
        </View>
        <View style={styles.password}>
          <TextInput style={styles.textPass} placeholder="Password"></TextInput>
          <AntDesign name="eyeo" size={30} color="black" />
        </View>

        <TouchableOpacity style={styles.btnLogin} onPress={() => navigation.navigate('Shoppe')}>
          <Text style={styles.textLogin}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.textCount}>
          <Text style={styles.textWhen}>
            When you agree to terms and conditions
          </Text>
          <Text style={styles.textFor}>For got your password?</Text>
          <Text style={styles.textOr}> Or login with</Text>
        </View>

        <View style={styles.btnCount}>
          <TouchableOpacity style={styles.btnFace}><SimpleLineIcons name="social-facebook" size={24} color="black" /></TouchableOpacity>
          
          <TouchableOpacity style={styles.btnz}><Text style={styles.textz}>Z</Text></TouchableOpacity>
          <TouchableOpacity style={styles.btnGoogle}><Fontisto name="google" size={24} color="black" /></TouchableOpacity>
          
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8EFDF",
  },
  textLOGIN: {
    fontSize: 30,
    fontWeight: "900",
    color: "black",
  },
  body: {
    flex: 1,
    flexDirection: "column", //theo cột
    justifyContent: "space-around", //dãn theo cột
    alignItems: "center",
  },
  email: {
    width: "80%",
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: "center",
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

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
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


import React from "react";
import { View, Text, Button,StyleSheet,TouchableOpacity } from "react-native";


import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function HomeScreen() {
  const navigation = useNavigation();
  return (
    <LinearGradient colors={["rgba(0,156,199,1)", "rgba(255,255,255,1)", "rgba(1,149,223,1)"]}
    style={styles.lineargradient}
    
    >
    <View style={styles.container}>
        <View style={styles.screen1}>
          <TouchableOpacity style={styles.screen} onPress={()=>navigation.navigate('USB')}>
              <Text style={styles.text1}>USB</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screen} onPress={()=>navigation.navigate('PassWord')}>
              <Text style={styles.text1}>Password</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.screen2}>
          <TouchableOpacity style={styles.screen} onPress={()=>navigation.navigate('Login')}>
              <Text style={styles.text1}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.screen} onPress={()=>navigation.navigate('ortherBook')}>
              <Text style={styles.text1}>OrtherBook</Text>
          </TouchableOpacity>
          
         
        </View>
        



    </View>

    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  lineargradient:{
    flex:1,
    backgroundColor:'transparent'
  },
  container:{
    flex:1,
    width:'100%',
    height:'100%',
    alignItems:'center',
    justifyContent:'center'
  },
  screen1:{
    flexDirection:'row',
    justifyContent:'space-between',
    width:'70%',
    
  },
  screen2:{
    marginVertical:20,
    flexDirection:'row',
    justifyContent:'space-between',
    width:'70%',
  },
  
  screen:{
    backgroundColor:'red',
    width:120,
    height:50,
    borderWidth:2,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center',
    borderColor:'white',
    shadowColor:'black',
    shadowOpacity:0.5,
    shadowOffset:0.2

  },
  text1:{
    color:'black',
    fontSize:15,
    fontWeight:'800'
  },
})
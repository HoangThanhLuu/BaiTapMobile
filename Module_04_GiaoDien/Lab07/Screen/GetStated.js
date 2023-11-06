import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, Image, TextInput, Pressable } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export default function GetStated({navigation}) {
    const [email, setEmail] = React.useState('ReactNative');

    return (
        <View style={styles.container}>
          
            <Text style={{ fontSize: 24, fontWeight: "bold", color: "violet",textAlign:'center',marginBottom:20 }}>MANAGE YOUR {'\n'} TASK</Text>
            <View style={{width: '300px', height: '50px', borderColor: "#111", borderWidth: 1, borderRadius: 10, flexDirection: "row", alignItems: "center" }}>
                <MaterialCommunityIcons style={{marginLeft: 10}} name="email-outline" size={30} color="black" />
                <TextInput style={{outlineStyle: 'none', marginLeft: 10,width: "80%", height: "100%", fontSize: 20 }} value={email} onChangeText={setEmail} placeholder="Enter your name" />
            </View>
            <Pressable onPress={()=>{navigation.navigate("Home", {email})}}  style={{marginTop: 20,width: 200, height: 45, backgroundColor: "#00bdd5", borderRadius: 10, justifyContent: "center", alignItems: "center", flexDirection: "row"}}>
                <Text style={{fontSize: 18, fontWeight: "bold", color: "#fff"}}>GET STARTED</Text>
                <AntDesign name="arrowright" size={24} color="#fff" />
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
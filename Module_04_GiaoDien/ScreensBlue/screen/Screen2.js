import { View, Text,Image, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'

const Screen2 = ({navigation,router}) => {
    const [buttonColor,setButtonColor] = useState(require('../assets/MobileBllu.png'));
    
  
  
    return (
    
    <View style={{flex:1}}>
        <View style={{width:'100%',height:'30%'}}>
            <View style={{flexDirection:'row',top:20}}>
                <Image style={{width:150,height:150,resizeMode:'center'}} source ={buttonColor}></Image>
                <Text style={{fontSize:20,fontWeight:'500'}}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>

            </View>
        </View>

        <View style={{flex:1,width:'100%',borderWidth:1,backgroundColor:'#C4C4C4'}}>
            <Text style={{top:10,left:10}}>Chọn một màu bên dưới:</Text>
            <View  style={{width:'100%',marginTop:18,flex:1}}>
                <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:"center"}}>
                    <Pressable onPress={() => setButtonColor(require('../assets/vs_blue.png'))} style={{width:80,height:80,backgroundColor:'#C5F1FB',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5',marginVertical:20}}></Pressable>
                    <Pressable onPress={() => setButtonColor(require('../assets/vs_red.png'))}  style={{width:80,height:80,backgroundColor:'red',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5'}}></Pressable>
                    <Pressable onPress={() => setButtonColor(require('../assets/vs_black.png'))}  style={{width:80,height:80,backgroundColor:'black',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5',marginVertical:20}}></Pressable>
                    <Pressable onPress={() => setButtonColor(require('../assets/vs_silver.png'))}  style={{width:80,height:80,backgroundColor:'#234896',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5'}}></Pressable>
                    
            
            
            <TouchableOpacity style={{width:'90%',height:40,borderRadius:20,backgroundColor:'#4D6DC1',marginTop:10,justifyContent:'center',alignItems:'center'}} onPress={() =>navigation.navigate('Screen1',{mau:buttonColor})}>
                <Text style={{fontSize:17,color:'white',fontWeight:'700'}}>
                    Xong
                </Text>
            </TouchableOpacity>
            </View>
            </View>

            

            
        </View>
    </View>
  )
}

export default Screen2
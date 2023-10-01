import { View, Text,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const Screen2 = ({navigation}) => {
    
  return (
    <View style={{flex:1}}>
        <View style={{width:'100%',height:'30%'}}>
            <View style={{flexDirection:'row',top:20}}>
                <Image style={{width:150,height:150,resizeMode:'center'}} source ={require('../assets/MobileBllu.png')}></Image>
                <Text style={{fontSize:20,fontWeight:'500'}}>Điện Thoại Vsmart Joy 3 {'\n'}Hàng chính hãng</Text>

            </View>
        </View>

        <View style={{flex:1,width:'100%',borderWidth:1,backgroundColor:'#C4C4C4'}}>
            <Text style={{top:10,left:10}}>Chọn một màu bên dưới:</Text>
            <View  style={{width:'100%',marginTop:18,flex:1}}>
                <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:"center"}}>
                    <View style={{width:80,height:80,backgroundColor:'#C5F1FB',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5',marginVertical:20}}></View>
                    <View style={{width:80,height:80,backgroundColor:'red',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5'}}></View>
                    <View style={{width:80,height:80,backgroundColor:'black',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5',marginVertical:20}}></View>
                    <View style={{width:80,height:80,backgroundColor:'#234896',shadowColor:'rgba(0,0,0,0.5)',shadowOffset:'width:0,height:5'}}></View>
                    
            
            
            <TouchableOpacity style={{width:'90%',height:40,borderRadius:20,backgroundColor:'#4D6DC1',marginTop:10,justifyContent:'center',alignItems:'center'}} onPress={() =>navigation.navigate('Screen1')}>
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
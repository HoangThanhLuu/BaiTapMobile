import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchFoot = () => {
  return (
    <View>
       <View style={{width:'60%',height:40,borderWidth:1,marginTop:10}}>
        <TextInput style={{flex:1}} placeholder='Search foot'/>
       </View>
    </View>
  )
}

export default SearchFoot
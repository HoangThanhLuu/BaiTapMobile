import { View, Text, FlatList, Pressable,Image } from 'react-native'
import React from 'react'
import AppNavigation from './Navigation/AppNavigation'

const App = () => {

  const places = [

    {
      id:1,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg'
    },
    {
      id:2,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/21/17/41/sports-8267310_640.jpg'
    },
    {
      id:3,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg'
    },
    {
      id:4,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg'
    },
    {
      id:5,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/18/13/51/cat-8260638_640.jpg'
    },
    {
      id:6,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg'
    },
    {
      id:7,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg'
    },
    {
      id:8,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/16/23/53/loon-8257638_640.jpg'
    },
    {
      id:9,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/19/12/34/dog-8262506_640.jpg'
    },
    {
      id:10,
      name:'Name1',
      image:'https://cdn.pixabay.com/photo/2023/09/16/23/53/loon-8257638_640.jpg'
    },
  ]
  
const header= () =>{
  return (
  <View style={{height:200,width:'auto',justifyContent:'center',alignItems:'center',backgroundColor:'yellow'}}>
    <Text>PLACES</Text>
  </View>
  
  )
}

  return (



    <FlatList
      data={places}
      ListHeaderComponent={header}
      numColumns={2}
      //điều chỉnh cho container chung columnWrapperStyle
      columnWrapperStyle={{flex:1,flexDirection:'row',justifyContent:'space-between',marginHorizontal:10}}
      renderItem={({item,index}) => 
        <Pressable>
           <View style={{flexDirection:'column',alignItems:'center',borderBottomWidth:1}}>
           <Image style={{width:100,height:100,marginHorizontal:20,marginVertical:20,borderRadius:20}} source={{ uri: item.image }} />
            <Text>{item.name}</Text>
           </View>
        </Pressable>
    
    
    }
    
    
    />
  )
}

export default App
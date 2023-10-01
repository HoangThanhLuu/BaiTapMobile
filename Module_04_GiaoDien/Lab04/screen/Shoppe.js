import { View, Text ,FlatList, Pressable,Image} from 'react-native'
import React from 'react'


const shoppes =[
    {
        id:1,
        name:'Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với Shop',
        
    },
    {
        id:2,
        name:'',
        shopName:'',
        image:require('../assets/ca_nau_lau.png')
    },
    {
        id:3,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:4,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:5,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:6,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:7,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:8,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:9,
        name:'',
        shopName:'',
        image:''
    },
    {
        id:10,
        name:'',
        shopName:'',
        image:''
    },
   
];

const Header =() =>{
    reutrn (

        <View style={{backgroundColor:'blue',width:'100%',height:40,borderWidth:1}}>
            
        </View>
    )
}
const Shoppe = () => {
  return (
    <View>
      <FlatList


        data={shoppes}
        ListHeaderComponent={Header}
        renderItem={({item}) => 
            <Pressable>
                <Image src={item.image}/>
            </Pressable>
    
    }
      
      />
    </View>
  )
}

export default Shoppe
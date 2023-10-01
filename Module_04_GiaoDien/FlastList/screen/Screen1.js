import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
const Screen1 = () => {

    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image
          style={styles.imageBlue}
          source={require("../assets/MobileBllu.png")}
        />

        <View style={styles.allCenter}>
          <Text style={styles.textMobile}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
          <View style={styles.imgStar}>
            <View style={styles.imgStarFire}>
                <Image
                  style={styles.imageStar}
                  source={require("../assets/Star.png")}
                />
                <Image
                  style={styles.imageStar}
                  source={require("../assets/Star.png")}
                />
                <Image
                  style={styles.imageStar}
                  source={require("../assets/Star.png")}
                />
                <Image
                  style={styles.imageStar}
                  source={require("../assets/Star.png")}
                />
                <Image
                  style={styles.imageStar}
                  source={require("../assets/Star.png")}
                />
            </View>
            <Text style={styles.textStar}>(Xem 828 đánh giá)</Text>
          </View>

          <View style={styles.number}>
            <Text style={styles.numberA}>1.790.000 đ</Text>
            <Text style={styles.numberB}>
              1.790.000 đ <View style={styles.underline}></View>
            </Text>
          </View>

          <View style={styles.textWhere}>
            <Text style={styles.whereA}>Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
            <View style={styles.whereB}>
              <Text style={styles.textQues}>?</Text>
            </View>
          </View>

          <View style={styles.btnButton}>
            <TouchableOpacity style={styles.btnSelection} onPress={()=>navigation.navigate('Screen2')}>
              <Text style={styles.textColor}>4 MÀU-CHỌN MÀU</Text>
              
              <AntDesign style={styles.btnIconColor}  name="right" size={24} color="black" />
            </TouchableOpacity>

          </View>

          <View style={styles.btnButton}>
            <TouchableOpacity style={styles.btnBuy}>
              <Text style={styles.textColorBuy}>CHỌN MUA</Text>
              
              <AntDesign style={styles.btnIconColor}  name="right" size={24} color="black" />
            </TouchableOpacity>

          </View>




        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  body: {
    flex: 1,
    height: "100%",
    width: "80%",
    // borderWidth:1
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },

  imageBlue: {
    height: 300,
    width: 300,
    resizeMode: "center",
  },
  allCenter: {
    flexDirection: "column",
    justifyContent: "space-around",
    height: 350,
    width: 350,
    
  },
  textMobile:{
    fontSize:18
  },
  imgStar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  imgStarFire:{
    flexDirection: "row",
  },
  imageStar: {
    width: 30,
    height: 30,
    

    
  },
  textStar:{
    right:40
  },
  number: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  numberA: {
    fontSize: 28,
    fontWeight: "700",
  },
  numberB: {
    right: 45,
    position: "relative",
    width: "auto",
    height: "auto",
  },
  underline: {
    position: "absolute",
    height: 1,
    width: "100%",
    borderWidth: 1,
    right: 1,
    top: "50%",
  },
  textWhere: {
    flexDirection: "row",
  },
  whereA: {
    fontWeight: "500",
    color: "red",
  },
  whereB: {
    width: 20,
    height: 20,
    borderWidth: 2,
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },

  textQues: {
    fontSize: 15,
  },
  btnButton:{
    width:'auto',
    height:40,
    
    alignItems:'center',
    justifyContent:'center'
   
  },
  btnSelection: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu shadow (ví dụ: màu đen với độ trong suốt 50%)
    shadowOffset: { width: 0, height: 3 }, // Điểm độ lệch theo chiều ngang và chiều dọc
    shadowOpacity: 1, // Độ trong suốt của shadow (1 là hoàn toàn rõ nét)
    shadowRadius: 4, // Bán kính của shadow
  },
  textColor:{
    fontWeight:'600',
  },
  btnIconColor:{
    position:'absolute',
    right:7
  },
  btnBuy:{
    width: '100%',
    backgroundColor:'red',
    height: 40,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)', // Màu shadow (ví dụ: màu đen với độ trong suốt 50%)
    shadowOffset: { width: 0, height: 3 }, // Điểm độ lệch theo chiều ngang và chiều dọc
    shadowOpacity: 1, // Độ trong suốt của shadow (1 là hoàn toàn rõ nét)
    shadowRadius: 4, // Bán kính của shadow
  },
  textColorBuy:{
    fontSize:17,
    fontWeight:'700',
    color:'white'
  }
  
});
export default Screen1;

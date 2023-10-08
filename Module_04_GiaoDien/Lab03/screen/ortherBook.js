import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const ortherBook = () => {
  const [text, setText] = useState(0);
  const [currentTotal, setCurrentTotal] = useState(141.8); //tính tiền

  //   const resultIncresa = (operation) => {
  //     const productPrice = 141.800;
  //     let newTotal = currentTotal;

  //     if (operation === "+") {
  //       newTotal += productPrice;
  //     } else if (operation === "-") {
  //       newTotal -= productPrice;
  //     }
  //  // Làm tròn newTotal đến 3 số sau dấu thập phân
  //  newTotal =parseFloat(newTotal.toFixed(5));
  //     setCurrentTotal(newTotal);
  //   };

  const resultIncresa = (operation) => {
    const book = 141.8;
    let newTotal = currentTotal; // trạng thái lần đầu là 141.800 ,nếu nhắn + liên tục thì giá trị công lại sẽ được gán quá newTotal
    if (operation === "+") {
      //nếu tham số truyền vào bằng với giá trị đặt ở Touchable
      newTotal += book;
    } else if (operation === "-") {
      newTotal -= book;
    }
    //parseFloat(...): Hàm parseFloat được sử dụng để
    //chuyển một chuỗi số thành một số thực (float). Trong trường hợp này, nó được sử dụng để chuyển chuỗi "141.800" thành số 141.8.trong javaScrip khi làm tròn thì nó sẽ loại bỏ những số 0 sau dấu chẩm phẩy
    newTotal = parseFloat(newTotal.toFixed(3)); //khi sử dụng toFixed kết quả sẽ là chuỗi không phải là số nữa nên phải dùng parseFloat

    setCurrentTotal(newTotal); //cứ sau mỗi lần nhấn trạng thái sẽ được thay đổi
  };
  return (
    <View
      style={{
        flex: 1,
        width: "100%",
        height: "100%",
        alignItems: "center",
      }}
    >
      <View
        style={{
          width: "95%",
          height: "25%",

          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Image
          style={{ width: 120, height: 150, resizeMode: "contain" }}
          source={require("../assets/book.png")}
        ></Image>
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>
            Nguyên hàm tích phân và ứng dụng
          </Text>
          <Text style={{ fontWeight: "700", fontSize: 14, marginVertical: 10 }}>
            Cung cấp bởi Tiki Trading
          </Text>

          <Text style={{ fontWeight: "700", fontSize: 17, color: "red" }}>
            {currentTotal}
          </Text>
          {/* thanh căn giữa và số */}
          <View style={{ width: 40, height: 40 }}>
            <Text
              style={{
                fontWeight: "700",
                fontSize: 14,
                marginVertical: 10,
                color: "#808080",
              }}
            >
              {currentTotal}
            </Text>
            <View
              style={{
                height: 1,
                width: "100%",
                borderWidth: 1,
                position: "absolute",
                left: 0,
                top: "50%",
              }}
            ></View>
          </View>
          {/* -+ */}
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View
              style={{ flexDirection: "row", justifyContent: "flex-start" }}
            >
              <TouchableOpacity
                onPress={() => [resultIncresa("-"), setText(text - 1)]}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#808080",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    alignItems: "center",
                    backgroundColor: "#808080",
                  }}
                >
                  -
                </Text>
              </TouchableOpacity>
              <Text style={{ marginHorizontal: 10, fontSize: 15 }}>{text}</Text>
              <TouchableOpacity
                onPress={() => [resultIncresa("+"), setText(text + 1)]}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: "#808080",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "800",
                    alignItems: "center",
                    backgroundColor: "#808080",
                  }}
                >
                  +
                </Text>
              </TouchableOpacity>
            </View>

            <Text style={{ color: "#134FEC", fontWeight: "600" }}>Mua Sau</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          width: "95%",
          height: "5%",
        }}
      >
        <Text style={{ marginRight: 10, fontWeight: "500" }}>
          Mã giảm giá đã lưu
        </Text>
        <Text style={{ fontWeight: "500" }}>Xem tai đây</Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          width: "95%",
          height: "10%",

          justifyContent: "space-between",
        }}
      >
        <View
          style={{
            width: "50%",
            height: "70%",

            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{ width: 50, height: 20, backgroundColor: "yellow" }}
          ></View>
          <Text style={{ fontSize: 20, fontWeight: "500", marginLeft: 10 }}>
            Mã giảm giá
          </Text>
        </View>
        <View
          style={{
            width: "30%",
            height: "70%",
            backgroundColor: "#0A5EB7",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500" }}>Áp Dụng</Text>
        </View>
      </View>

      <View
        style={{
          width: "95%",
          height: "40%",

          flexDirection: "column",
          backgroundColor: "#C4C4C4",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "20%",
            backgroundColor: "#FFFFFF",
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Bạn có phiếu quà tặng Tiki/Got it/ Urbox?</Text>
          <Text style={{ color: "#134FEC" }}>Nhập tại đây?</Text>
        </View>
        <View
          style={{
            width: "100%",
            height: "25%",
            backgroundColor: "#FFFFFF",
            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginLeft: 40, fontSize: 17, fontWeight: "700" }}>
            Tạm tính
          </Text>
          <Text style={{ color: "red", marginRight: 30, fontSize: 16 }}>
            {currentTotal}
          </Text>
        </View>
      </View>

      <View
        style={{
          width: "95%",
          height: "20%",

          flexDirection: "column",
        }}
      >
        <View
          style={{
            width: "100%",
            height: "20%",

            marginVertical: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ marginLeft: 40, fontSize: 23, fontWeight: "700" }}>
            Thành tiền
          </Text>
          <Text style={{ color: "red", marginRight: 30, fontSize: 23 }}>
            {currentTotal}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#E53935",
            width: "100%",
            height: 50,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 23, fontWeight: "700", color: "white" }}>
            Tiến hành đặt hàng
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ortherBook;

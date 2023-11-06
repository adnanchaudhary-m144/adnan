import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    SafeAreaView,
    ScrollView,
  } from "react-native";
  import React from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { addToCart, decrementQuantity, incrementQuantity, removeFromCart } from "../CartReducer";
  
  const HomeScreen = () => {
    const cart = useSelector((state) => state.cart.cart);

    const dispatch = useDispatch();
    const images = [
      {
        id: "0",
        image:
          "https://th.bing.com/th/id/OIP.-TewSDSNm70OB1PuLvoMfQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Samung",
        price:1000
      },
      {
        id: "1",
        image:
          "https://th.bing.com/th?id=OIP.UiKYzKeI_jW0UH-sHBCORwHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        name: "Huawei",
        price:2000
      },
      {
        id: "2",
        image:
          "https://th.bing.com/th/id/OIP.qK3elWQ0g2l9Yext-uVYyQHaEK?w=234&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "Oppo",
        price:3000
      },
      {
        id: "3",
        image:
          "https://th.bing.com/th?id=OIP.TQudHRS9quZ5zqssM_1uVgAAAA&w=335&h=139&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        name: "Realme",
        price:4000
      },
      {
        id: "4",
        image:
          "https://th.bing.com/th?id=OIP.r02YiDFZMmo6wq7hDBI7mQHaEK&w=333&h=187&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
        name: "Vivo",
        price:5000
      },
      {
      id: "5",
        image:
          "https://th.bing.com/th/id/OIP.Iile97g1Vu__xO5-gCvIMQHaEK?w=314&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        name: "QMobile",
        price:6000
      },
      {
        id: "6",
          image:
            "https://th.bing.com/th/id/OIP.c-IB6S11G7Xt3hjlKosMAAHaFA?w=248&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
          name: "Nokia",
          price:7000
        }
    ];

    const calculateTotalPrice = () => {
      let total = 0;
      cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    };

    const addItemToCart = (item) => {
      dispatch(addToCart(item));
    };
    const removeItemFromCart = (item) => {
      dispatch(removeFromCart(item));
    };
    const increaseQuantity = (item) => {
      dispatch(incrementQuantity(item));
    }
    const decreaseQuantity = (item) => {
      if(item.quantity == 1){
        dispatch(removeFromCart(item));
      }else{
        dispatch(decrementQuantity(item));
      }
    }
    return (
      <View>
        <ScrollView style={{marginBottom:55}}>
      <SafeAreaView>
        <Text style={{ textAlign: "center",padding:15 ,color:'black', fontSize: 35, fontWeight:'bold', backgroundColor:'#F0F0F0', elevation:1, borderRadius:5, }}>
            ITEMS LIST
        </Text>
        {images.map((item) => (
          <Pressable
            key={item.id}
            style={{ flexDirection: "row", alignItems: "center",}}
          >
            <View style={{ margin: 10, marginLeft:20 , padding:5}}>
              <Image
                style={{ width: 100, height: 100, borderRadius: 8 }}
                source={{ uri: item.image }}
              />
            </View>
            <View style={{marginLeft:20}}>
              <Text style={{ fontWeight: "bold", fontSize:25 }}>{item.name}</Text>
              <Text style={{ fontWeight: "bold", fontSize:20 }}>${item.price}</Text>
              {cart.some((value) => value.id == item.id) ? (
                <Pressable onPress={() => removeItemFromCart(item)}>
                  <Text
                    style={{
                      marginVertical:10,
                      padding:4,
                      color:'white',
                      fontWeight:'bold',
                      fontSize:16,
                      borderRadius:10,
                      backgroundColor:'red',
                      paddingLeft:10,
                      justifyContent:'center'
                    }}
                  >
                    REMOVE FROM CART
                  </Text>
                  
                </Pressable>
              ) : (
                <Pressable onPress={() => addItemToCart(item)}>
                  <Text
                    style={{
                      marginVertical: 10,
                      padding: 5,
                      color:'white',
                      fontWeight:'bold',
                      fontSize:16,
                      borderRadius:10,
                      backgroundColor:'blue',
                      paddingLeft:10,
                      justifyContent:'center'
                    }}
                  >
                    Add to cart
                  </Text>
                 
                  </Pressable>
              )}
            </View>
            </Pressable>
             
        ))}
        
 <Text style={{fontSize:20, fontWeight:'bold', textAlign: "center",   marginTop: 45,}}>CART ITEM</Text>
        {cart.map((item,index) => (
          
          <View style={{padding:10,}} key={index}>
            <Text style={{ fontWeight: "bold", fontSize:20 }}>{item.name}</Text>
            <Image style={{ width: 118, height: 100, borderRadius: 8,marginTop:10 }}
                source={{ uri: item.image }}/>
            <Pressable
              style={{
                flexDirection: "row",
                marginTop:20,
                alignItems: "center",
                backgroundColor: "#FF3366",
                borderRadius: 5,
                width: 120,
              }}
            >
              <Pressable onPress={() => decreaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 25,
                    color: "white",
                    paddingHorizontal: 18
                  }}
                >
                  -
                </Text>
              </Pressable>
  
              <Pressable>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  {item.quantity}
                </Text>
              </Pressable>
  
              <Pressable onPress={() => increaseQuantity(item)}>
                <Text
                  style={{
                    fontSize: 20,
                    color: "white",
                    paddingHorizontal: 10,
                  }}
                >
                  +
                </Text>
              </Pressable>
            </Pressable>
          </View>
        ))}
      </SafeAreaView>
      
      </ScrollView>
      <View style={{position:"absolute", bottom:0,width:"100%", borderRadius:5, padding:10, backgroundColor:'#F0F0F0',}}>      
        <Text style={{ fontSize: 25, fontWeight: "bold", textAlign: "center", color:'black'}}>
      Total Price: ${calculateTotalPrice()}
    </Text>
    </View>

    </View>

    );
  };
  
  export default HomeScreen;
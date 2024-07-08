import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Cards from "../components/Cards";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      const items = await getCart();
      setCartItems(items);
    };

    fetchCartItems();
  }, []);

  const getCart = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("cart");
      return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch (e) {
      console.error(e);
      return [];
    }
  };

  const removeItem = async (id) => {
    try {
      const updatedCartItems = cartItems.filter((item) => item.id !== id);
      setCartItems([...updatedCartItems]);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCartItems));
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Image
            style={styles.logo}
            source={require("../assets/images/Logo2.png")}
          />
        </View>
        <TouchableOpacity style={styles.left}>
          <AntDesign name="search1" size={30} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.checkout}>
        <Image
          style={styles.checkoutImage}
          source={require("../assets/images/checkout.png")}
        />
      </View>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={cartItems}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Cards
              image={item.image}
              icon={item.icon}
              title={item.title}
              description={item.description}
              price={item.price}
              removeFromCart={() => removeItem(item.id)} // Pass removeItem function
              cartView={true} // Indicate that this is the cart view
            />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()} // Ensure item.id is string or number
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <View
          style={{
            paddingHorizontal: 20,
            height: 50,
            alignItems: "center",
            backgroundColor: "white",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: 500 }}>EST. TOTAL</Text>
          <Text style={{ fontSize: 18, fontWeight: 500, color: "orange" }}>
            $120
          </Text>
        </View>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: 50,
            gap: 10,
            backgroundColor: "black",
            right: 0,
            left: 0,
          }}
        >
          <Ionicons name="bag-outline" size={26} color="white" />
          <Text style={{ fontSize: 18, fontWeight: "500", color: "white" }}>
            CHECKOUT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    marginTop: 30,
    flex: 1,
    backgroundColor: "white",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
  header: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    position: "absolute",
    right: 10,
  },
  logo: {
    width: 100,
    height: 60,
  },
  checkout: {
    padding: 0,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutImage: {
    width: 180,
    height: 50,
  },
});

export default Cart;

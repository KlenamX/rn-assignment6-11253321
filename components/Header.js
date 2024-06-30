import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image source={require("../assets/images/Menu.png")} />
      </TouchableOpacity>
      <View>
        <Image
          style={styles.logo}
          source={require("../assets/images/Logo2.png")}
        />
      </View>
      <View style={styles.left}>
        <TouchableOpacity>
          <Image source={require("../assets/images/Search.png")} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("../assets/images/shoppingBag.png")} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // backgroundColor: "blue",
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    gap: 10,
  },
  logo: {
    width: 100,
    height: 60,
  },
});

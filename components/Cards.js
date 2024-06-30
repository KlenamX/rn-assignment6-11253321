import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Cards({ image, icon, title, description, price }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={image} />
        <Image style={styles.icon} source={icon} />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 165,
  },
  imageContainer: {
    height: 220,
    width: 165,
  },
  image: {},
  icon: {
    position: "absolute",
    right: 6,
    bottom: 6,
  },
  info: {
    marginTop: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    fontSize: 13,
    fontWeight: "400",
  },
  price: {
    fontSize: 20,
    fontWeight: "600",
    color: "orange",
  },
});

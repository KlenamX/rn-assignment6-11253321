import { View, StyleSheet, FlatList } from "react-native";
import React from "react";
import Cards from "../components/Cards";

const DATA = [
  {
    id: "1",
    image: require("../assets/images/dress1.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "Office Wear",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "2",
    image: require("../assets/images/dress2.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "Black",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "3",
    image: require("../assets/images/dress3.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "Church Wear",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "4",
    image: require("../assets/images/dress4.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "Lamerei",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "5",
    image: require("../assets/images/dress5.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "21WN",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "6",
    image: require("../assets/images/dress6.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "Lopo",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "7",
    image: require("../assets/images/dress7.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "21WN",
    description: "reversible angora cardigan",
    price: "$120",
  },
  {
    id: "8",
    image: require("../assets/images/dress1.png"),
    icon: require("../assets/images/add_circle.png"),
    title: "Lopo",
    description: "reversible angora cardigan",
    price: "$120",
  },
];

export default function Products() {
  return (
    <View style={styles.container}>
      {/* <Cards
        image={require("../assets/images/dress1.png")}
        icon={require("../assets/images/add_circle.png")}
        title={"Casual Wear"}
        description={"reversible angora cardigan"}
        price={"$40"}
      /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={DATA}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Cards
              image={item.image}
              icon={item.icon}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          </View>
        )}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={styles.row}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,

    flex: 1,
  },
  row: {
    flex: 1,
    justifyContent: "space-between",
  },
  itemContainer: {
    flex: 1,
    margin: 5,
  },
});

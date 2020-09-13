import React from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";

const renderGirdItem = (itemData) => {
  return (
    <View style={styles. gridItem}>
      <Text>{itemData.item.title}</Text>
    </View>
  );
};

function CategoriesScreen(props) {
  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGirdItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gridItem:{
      flex:1,
      margin: 15,
      height: 150,
  }
});



export default CategoriesScreen;

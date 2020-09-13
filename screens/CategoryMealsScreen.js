import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

function CategoryMealsScreen(props) {
  return (
    <View style={styles.screen}>
      <Text>The Category Meals screen!</Text>
      <Button
        title="Go to meal detail!"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
          });
        }}
      />

      <Button title='Go Back' onPress={() =>{
          props.navigation.pop();
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealsScreen;

import { Category } from "@/types/meal";
import { router } from "expo-router";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function CategoryItem(item: Category) {
  return (
    <View style={[style.gridItem]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.button, { opacity: 0.5 }] : style.button
        }
        onPress={() => {
          router.push({
            pathname: "/(home)/meal/MealOverview",
            params: { categoryId: item?.id },
          });
        }}
      >
        <View style={[style.innerContainer, { backgroundColor: item.color }]}>
          <Text>{item.title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 2,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  button: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,

    // backgroundColor: "red",
  },
});

import { Category, Meal } from "@/types/meal";
import { router } from "expo-router";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function MealItem(item: Meal) {
  return (
    <View style={[style.gridItem]}>
      <Pressable
        style={({ pressed }) =>
          pressed ? [style.button, { opacity: 0.5 }] : style.button
        }
        onPress={() => {
          router.push({
            pathname: "/(home)/meal/MealDetail",
            params: { mealId: item?.id },
          });
        }}
      >
        <View style={[style.innerContainer]}>
          <Image style={style.image} source={{ uri: item?.imageUrl }} />
          <Text style={style.mealTitle}>{item.title}</Text>
          <View style={style.otherInfo}>
            <Text>{`${item.duration}mins`} </Text>
            <Text>{item?.affordability.toLocaleUpperCase()} </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    backgroundColor: "white",
    // height: 150,
    borderRadius: 8,
    elevation: 2,
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
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  image: {
    height: 200,
    width: "100%",
  },
  otherInfo: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  mealTitle: {
    marginTop: 10,
    fontWeight: 600,
  },
});

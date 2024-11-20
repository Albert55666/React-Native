import { Text, View } from "@/components/Themed";
import MealItem from "@/Meal/MealItem";
import { categories, MEALS } from "@/utils/dummy-data";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

export default function MealDetail() {
  const param = useLocalSearchParams<{ mealId: string }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const displayedMeal = MEALS.find((meals) => meals.id === param.mealId);
    navigation.setOptions({ title: displayedMeal?.title });
  }, []);

  const displayedMeal = MEALS.find((meals) => meals.id === param.mealId);

  return (
    <View style={style.layout}>
      <View>
        <Text style={style.title}>Ingredients</Text>
        {displayedMeal?.ingredients?.map((ingredient, index) => (
          <Text key={index}>{ingredient}</Text>
        ))}
      </View>
      <View>
        <Text style={style.title}>Steps To Prepare</Text>
        {displayedMeal?.steps?.map((step, index) => (
          <Text key={index}>{`${index + 1}. ${step}`}</Text>
        ))}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  layout: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

import { Text, View } from "@/components/Themed";
import MealItem from "@/Meal/MealItem";
import { categories, MEALS } from "@/utils/dummy-data";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useEffect, useLayoutEffect } from "react";
import { FlatList, StyleSheet } from "react-native";

export default function MealOverview() {
  const param = useLocalSearchParams<{ categoryId: string }>();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    const getCategory = categories?.find(
      (item) => item.id === param.categoryId
    );
    navigation.setOptions({ title: getCategory?.title });
  }, []);

  const displayedMeal = MEALS.filter((meals) =>
    meals.categoryIds.includes(param.categoryId)
  );

  return (
    <View style={style.layout}>
      <FlatList
        data={displayedMeal}
        renderItem={(itemData) => {
          return <MealItem {...itemData.item} />;
        }}
        keyExtractor={(item) => item.id}
        // numColumns={2}
      ></FlatList>
    </View>
  );
}

const style = StyleSheet.create({
  layout: {},
});

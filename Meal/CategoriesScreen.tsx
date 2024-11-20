import { FlatList } from "react-native";
import CategoryItem from "./CategoryItem";
import { categories } from "@/utils/dummy-data";
import { Category } from "@/types/meal";

export default function CategoriesScreen() {
  function RenderItems(item: Category) {
    return <CategoryItem {...item} />;
  }

  return (
    <FlatList
      data={categories}
      renderItem={(itemData) => {
        return <RenderItems {...itemData.item} />;
      }}
      keyExtractor={(item) => item.id}
      numColumns={2}
    ></FlatList>
  );
}

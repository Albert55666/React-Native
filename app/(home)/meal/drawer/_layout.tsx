import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer
        screenOptions={{ drawerContentStyle: { backgroundColor: "#111" } }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "All Categories",
            title: "Category",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}

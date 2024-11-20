import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="drawer" options={{ headerShown: false, title: "" }} />
      {/* <Stack.Screen
        name="drawer-layout"
        options={{ headerShown: true }} // Hides the header for the drawer layout
      /> */}
      <Stack.Screen name="MealOverview" options={{ headerShown: true }} />
      <Stack.Screen name="MealDetail" options={{ presentation: "modal" }} />

      {/* <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Home',
            title: 'overview',
          }}
        />
        <Drawer.Screen
          name="user/[id]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'User',
            title: 'overview',
          }}
        />
      </Drawer>
    </GestureHandlerRootView> */}
    </Stack>
  );
}

{
  /* <Stack.Screen name="modal" options={{ presentation: "modal" }} /> 
   options={({ navigation, route }: { navigation: any; route: any }) => {
          const catId = route.params;
          return { headerShown: true };
          // return { headerShown: true, title: `Meal - ${catId?.categoryId}` };
        }}
  */
}

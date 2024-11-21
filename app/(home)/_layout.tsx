import React from "react";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router, Tabs } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useAppDispatch } from "@/store";
import { logUserOut } from "@/store/slice/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
  color: string;
}) {
  return (
    <MaterialCommunityIcons size={28} style={{ marginBottom: -3 }} {...props} />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const dispatch = useAppDispatch();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        // title:
        headerBackButtonDisplayMode: "minimal",
        // headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: true,
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={async () => {
                dispatch(logUserOut());
                await AsyncStorage.removeItem("user");
                router.replace("/Login");
              }}
            >
              {({ pressed }) => (
                <MaterialCommunityIcons
                  name="logout"
                  size={25}
                  color={Colors[colorScheme ?? "light"].text}
                  style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                />
              )}
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="meal"
        options={{
          title: "Meal",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pause-circle" color={color} />
          ),
        }}
      />
      {/* <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      /> */}
    </Tabs>
  );
}

const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "red",
    flex: 1,
  },
});

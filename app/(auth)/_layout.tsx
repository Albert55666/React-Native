import { router, Stack } from "expo-router";
import { Pressable, SafeAreaView, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { View } from "@/components/Themed";

export default function RootLayout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", paddingTop: 10 }}>
      <View style={style.buttonContainer}>
        <Pressable onPress={() => router.back()} style={style.button}>
          <Ionicons name="chevron-back-outline" size={24} color="black" />
        </Pressable>
      </View>

      <Stack>
        <Stack.Screen name="Login" options={{ headerShown: false }} />
        <Stack.Screen name="Register" options={{ headerShown: false }} />
      </Stack>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  buttonContainer: {
    alignItems: "flex-start",
  },
  button: {
    borderColor: "#c7c7c7",
    borderWidth: 1,
    padding: 5,
    borderRadius: 6,
    marginLeft: 20,
  },
});

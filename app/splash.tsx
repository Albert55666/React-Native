import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import Button from "@/components/Button";
import { router } from "expo-router";

export default function Welcome() {
  return (
    <View style={style.wrapper}>
      <Text style={style.welcomeText}>WELCOME TO SHONTREATS</Text>
      <Text>Click Button To Get Started </Text>
      <Button
        onPress={() => {
          router.push("/Login", {});
        }}
        style={style.button}
      >
        Get Started
      </Button>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    gap: 10,
  },
  button: {
    // backgroundColor: "#0057b7",
    backgroundColor: "black",
    width: "100%",
    padding: 10,
    textAlign: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

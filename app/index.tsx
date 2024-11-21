import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { router } from "expo-router";

export default function LandingLayout() {
  useEffect(() => {
    setTimeout(() => {
      router.push("/splash");
    }, 1500);
  }, []);

  return (
    <View style={style.wrapper}>
      <View style={[style.splashScreenBackground]}>
        <Text style={style.logo}>FOOD APP</Text>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    // backgroundColor: "red",
    flex: 1,
  },
  splashScreenBackground: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ffffff",
    // backgroundColor: "#0057b7",
    backgroundColor: "black",
  },
  logo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});

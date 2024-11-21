import { Image, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";
import { useEffect, useState } from "react";
import { router } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/store";
import { SelectAuth, setUser } from "@/store/slice/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LandingLayout() {
  // const { user } = useAppSelector(SelectAuth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let user: any;
    async function getToken() {
      user = await AsyncStorage.getItem("user");
      dispatch(setUser(JSON.parse(user!)));
    }
    getToken();

    setTimeout(async () => {
      if (user) {
        return router.push("/home");
      } else {
        router.push("/splash");
      }
      // console.log("is not user");
    }, 1500);
  }, []);

  return (
    <View style={style.wrapper}>
      <View style={[style.splashScreenBackground]}>
        <Text style={style.logo}>SHONTREATS</Text>
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

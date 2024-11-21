import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";
import { useAppSelector } from "@/store";
import { SelectAuth } from "@/store/slice/auth";

export default function TabTwoScreen() {
  const { user } = useAppSelector(SelectAuth);

  return (
    <View style={style.wrapper}>
      <View style={style.welcomeCard}>
        <Text style={style.welcomeText}>Welcome Onboard {user?.username}</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
    flex: 1,
    padding: 20,
  },
  welcomeCard: {
    height: 130,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    // backgroundColor: "#0057b7",
  },
  welcomeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

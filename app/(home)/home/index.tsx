import { StyleSheet } from "react-native";
import { Text, View } from "@/components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={style.wrapper}>
      <View style={style.welcomeCard}>
        <Text style={style.welcomeText}>Welcome Onboard Albert</Text>
      </View>
    </View>
  );
}
const style = StyleSheet.create({
  wrapper: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingHorizontal: 20,
  },
  welcomeCard: {
    height: 130,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#0057b7",
  },
  welcomeText: {
    color: "#ffffff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

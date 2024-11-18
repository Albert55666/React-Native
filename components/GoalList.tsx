import { Pressable, StyleSheet, Text, View } from "react-native";

export default function GoalList({
  goal,
  handleDelete,
}: {
  goal: string;
  handleDelete: () => void;
}) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#5e0acc" }}
        style={({ pressed }) => pressed && styles.pressedItem}
        onPress={handleDelete}
      >
        <Text style={styles.goalText}>{goal}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    borderRadius: 6,
    backgroundColor: "#5c0acc",
    color: "#FFFFFF",
    marginTop: 10,
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    padding: 10,
    color: "#FFFFFF",
  },
});

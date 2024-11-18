import { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { View, Text, Pressable } from "react-native";

export default function PrimaryButton({
  children,
  style,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <View style={[styles.buttonContainer, style]}>
      <Pressable
        android_ripple={{ color: "e4d0ff" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer2, styles.buttonInerPress]
            : styles.buttonContainer2
        }
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#7e38e0",
    margin: 12,
    borderRadius: 6,
    elevation: 2,
    shadowColor: "black",
    shadowOffset: { height: 2, width: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
  },
  buttonContainer2: {
    padding: 8,
  },
  buttonInerPress: {
    opacity: 0.5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

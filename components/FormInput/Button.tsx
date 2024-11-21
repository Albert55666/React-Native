import { ReactNode } from "react";
import { StyleProp, StyleSheet, ViewStyle } from "react-native";
import { View, Text, Pressable } from "react-native";

export default function CustomButton({
  children,
  style,
  onPress,
  loading,
}: {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  loading?: boolean;
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
        onPress={onPress}
      >
        <Text style={styles.buttonText}>
          {loading ? "loading...." : children}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 9,
    // elevation: 2,
    // shadowColor: "black",
    // shadowOffset: { height: 2, width: 0 },
    // shadowOpacity: 0.5,
    // shadowRadius: 6,
    padding: 10,
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
    textAlign: "center",
  },
});

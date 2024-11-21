import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextStyle,
} from "react-native";
import { TextInput } from "react-native";
import { Text, View } from "../Themed";

export default function CustomFieldInput({
  onChangeText,
  placeholder,
  value,
  style,
  keyboardType = "default",
  label,
  name,
  error,
}: {
  onChangeText: (e: string) => void;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
  label?: string;
  name: string;
  error: string;
}) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <Text style={styles.errMsg}>{error}</Text>
      <TextInput
        onChangeText={onChangeText}
        style={[styles.textInput, style]}
        placeholder={placeholder}
        value={value}
        keyboardType={keyboardType}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative",
  },
  textInput: {
    borderColor: "#c7c7c7",
    borderWidth: 1,
    color: "#120438",
    padding: 15,
    borderRadius: 6,
  },
  label: {
    marginVertical: 10,
  },
  errMsg: {
    color: "red",
    position: "absolute",
    right: 0,
    top: -17,
    zIndex: 1,

    // fontSize: 10,
  },
});

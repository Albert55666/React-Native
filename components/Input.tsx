import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  ViewStyle,
} from "react-native";
import { TextInput } from "react-native";

export default function FieldInput({
  onChangeText,
  placeholder,
  value,
  style,
  keyboardType = "default",
}: {
  onChangeText: (e: string) => void;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <TextInput
      onChangeText={onChangeText}
      style={[styles.textInput, style]}
      placeholder={placeholder}
      value={value}
      keyboardType={keyboardType}
    />
  );
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "#120438",
    borderWidth: 1,
    padding: 12,
    borderRadius: 6,
  },
});

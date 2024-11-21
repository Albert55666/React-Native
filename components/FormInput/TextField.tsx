import {
  KeyboardTypeOptions,
  NativeSyntheticEvent,
  StyleProp,
  StyleSheet,
  TextInputFocusEventData,
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
  onBlur,
  loading,
}: {
  onChangeText: (e: string) => void;
  onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  placeholder: string;
  value: string;
  keyboardType?: KeyboardTypeOptions;
  style?: StyleProp<TextStyle>;
  label?: string;
  name: string;
  error: string;
  loading?: boolean;
}) {
  // console.log(name);

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
        onBlur={onBlur}
        secureTextEntry={name === "password"}
        editable={!loading}
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
    top: -15,
    zIndex: 1,

    // fontSize: 10,
  },
});

import CustomButton from "@/components/FormInput/Button";
import CustomFieldInput from "@/components/FormInput/TextField";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";
import Zocial from "@expo/vector-icons/Zocial";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import useAuthHooks from "@/hooks/authHooks";

export default function Login() {
  const { login } = useAuthHooks();
  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <Text style={style.welcomeText}>
          Welcome Back To ShonTreats! Glad To See You, Again
        </Text>

        <View style={style.inputContainer}>
          <CustomFieldInput
            onChangeText={login.handleChange("email")}
            value={login.values.email}
            error={login.errors.email!}
            name="email"
            placeholder="Enter Your Email "
            keyboardType="email-address"
            style={style.input}
          />

          <CustomFieldInput
            onChangeText={login.handleChange("password")}
            value={login.values.password}
            error={login.errors.password!}
            name="password"
            placeholder="Enter Your Password "
            keyboardType="visible-password"
            style={style.input}
            // label="Email"
          />

          <CustomButton style={style.loginButton}>Login</CustomButton>
        </View>

        <View style={style.optionalContainer}>
          <Text>Or Login With </Text>
          <View style={style.stackHorizontal}>
            <CustomButton style={style.fadedBorder}>
              <Zocial name="facebook" size={24} color="black" />{" "}
            </CustomButton>
            <CustomButton style={style.fadedBorder}>
              <Zocial name="twitter" size={24} color="black" />
            </CustomButton>
            <CustomButton style={style.fadedBorder}>
              <MaterialCommunityIcons name="apple" size={24} color="black" />
            </CustomButton>
          </View>
        </View>
      </View>

      <Text style={style.footerText}>
        Don't Have An Account?.{" "}
        <Link href={"/(auth)/Register"}>Register Now</Link>
      </Text>
    </View>
  );
}

const style = StyleSheet.create({
  wrapper: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 20,
    gap: 30,
  },
  container: {
    flex: 1,
    gap: 30,
  },
  input: {
    width: "100%",
    backgroundColor: "#F7F8F9",
  },
  welcomeText: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 40,
  },
  infoText: {
    fontSize: 15,
  },
  inputContainer: {
    gap: 25,
  },
  loginButton: {
    backgroundColor: "black",
    color: "white",
    marginTop: 20,
  },
  footerText: {
    textAlign: "center",
  },
  optionalContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 30,
  },
  stackHorizontal: {
    flexDirection: "row",
    gap: 20,
  },
  fadedBorder: {
    borderColor: "#c7c7c7",
    borderWidth: 1,
    paddingVertical: 10,
  },
});

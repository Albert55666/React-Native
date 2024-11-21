import CustomButton from "@/components/FormInput/Button";
import CustomFieldInput from "@/components/FormInput/TextField";
import { Text, View } from "@/components/Themed";
import { StyleSheet } from "react-native";
import Zocial from "@expo/vector-icons/Zocial";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link } from "expo-router";
import useAuthHooks from "@/hooks/authHooks";

export default function Register() {
  const { register } = useAuthHooks();
  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <Text style={style.welcomeText}>Hello! Register To Get Started</Text>

        <View style={style.inputContainer}>
          <CustomFieldInput
            onChangeText={register.handleChange("username")}
            placeholder="Username"
            value={register.values.username}
            error={register.errors.username!}
            name="username"
            keyboardType="default"
            style={style.input}
            // label="Email"
          />

          <CustomFieldInput
            onChangeText={register.handleChange("email")}
            placeholder="Enter Your Email "
            keyboardType="email-address"
            style={style.input}
            value={register.values.email}
            error={register.errors.email!}
            name="email"
          />

          <CustomFieldInput
            onChangeText={register.handleChange("password")}
            placeholder="Enter Your Password "
            value={register.values.password}
            error={register.errors.password!}
            name="password"
            keyboardType="visible-password"
            style={style.input}
            // label="Email"
          />

          <CustomFieldInput
            placeholder="Enter Your Password "
            onChangeText={register.handleChange("confirmPassword")}
            value={register.values.confirmPassword}
            error={register.errors.confirmPassword!}
            name="confirmPassword"
            keyboardType="visible-password"
            style={style.input}
            // label="Email"
          />

          <CustomButton style={style.loginButton}>Register</CustomButton>
        </View>

        <View style={style.optionalContainer}>
          <Text>Or Register With </Text>
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
        Already Have An Account?. <Link href={"/Login"}>Login Now</Link>
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
    gap: 15,
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

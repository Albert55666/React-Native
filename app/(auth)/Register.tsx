import CustomButton from "@/components/FormInput/Button";
import CustomFieldInput from "@/components/FormInput/TextField";
import { Text, View } from "@/components/Themed";
import { Alert, StyleSheet } from "react-native";
import Zocial from "@expo/vector-icons/Zocial";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Link, router } from "expo-router";
import useAuthHooks from "@/hooks/authHooks";
import { useFormik } from "formik";
import { initialRegister } from "@/Formik/InitialValues/auth";
import { registerSchema } from "@/Formik/Validations/auth";
import { useAppDispatch } from "@/store";
import { registeration } from "@/store/service/auth";
import { setUser } from "@/store/slice/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const dispatch = useAppDispatch();

  const register = useFormik({
    initialValues: initialRegister,
    validationSchema: registerSchema,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setSubmitting(true);
        dispatch(
          registeration({
            email: values.email,
            password: values.password,
            returnSecureToken: true,
          })
        );
        const jsonValue = JSON.stringify(values);
        await AsyncStorage.setItem("user", jsonValue);

        dispatch(setUser({ ...values, token: Date.now() }));

        router.push("/home");

        setSubmitting(false);
      } catch (error: any) {
        console.log(error);

        setSubmitting(false);
        Alert.alert("Registeration Failed", "", [{ style: "cancel" }]);
      }
    },
  });
  return (
    <View style={style.wrapper}>
      <View style={style.container}>
        <Text style={style.welcomeText}>Hello! Register To Get Started</Text>

        <View style={style.inputContainer}>
          <CustomFieldInput
            onChangeText={register.handleChange("username")}
            onBlur={register.handleBlur("username")}
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
            onBlur={register.handleBlur("email")}
            placeholder="Enter Your Email "
            keyboardType="email-address"
            style={style.input}
            value={register.values.email}
            error={register.errors.email!}
            name="email"
          />

          <CustomFieldInput
            onChangeText={register.handleChange("password")}
            onBlur={register.handleBlur("password")}
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
            onBlur={register.handleBlur("confirmPassword")}
            value={register.values.confirmPassword}
            error={register.errors.confirmPassword!}
            name="confirmPassword"
            keyboardType="visible-password"
            style={style.input}
            // label="Email"
          />

          <CustomButton
            loading={register.isSubmitting}
            onPress={register.handleSubmit}
            style={style.loginButton}
          >
            Register
          </CustomButton>
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

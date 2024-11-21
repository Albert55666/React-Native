import * as Yup from "yup";

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Invalid email"),
  password: Yup.string().min(7, "Too Short!").max(50, "Too Long!").required(),
});

export const registerSchema = Yup.object().shape({
  username: Yup.string()
    .required("username Required")
    .min(2, "Too Short!")
    .matches(/^[a-zA-Z]*$/, "First name cannot contain special characters"),
  password: Yup.string()
    .min(6, "Too Short!")
    .required("Password is Required")
    .matches(/[A-Z]/, "Password must contain at least one uppercase letter") // Validation for one uppercase letter
    .matches(/\d/, "Password must contain at least one number") // Validation for one number
    .matches(
      /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/,
      "Password must contain at least one special character"
    ),
  email: Yup.string()
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email address"
    )
    .required("Invalid email"),
  confirmPassword: Yup.string()
    .required("Required")
    .oneOf([Yup.ref("password"), "null"], "Password Miss-Match"),
});

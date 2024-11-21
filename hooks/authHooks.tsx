import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { initialLogin, initialRegister } from "../Formik/InitialValues/auth";
import { loginSchema, registerSchema } from "../Formik/Validations/auth";

import { SelectAuth } from "../store/slice/auth";
import { useAppDispatch, useAppSelector } from "@/store";
import { registeration, signIn } from "@/store/service/auth";

export default function useAuthHooks() {
  const dispatch = useAppDispatch();
  const {} = useAppSelector(SelectAuth);

  const login = useFormik({
    initialValues: initialLogin,
    validationSchema: loginSchema,
    validateOnMount: false,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      try {
        const { data } = await dispatch(signIn(values)).unwrap();
        console.log(data);
      } catch (error) {}
    },
  });

  const register = useFormik({
    initialValues: initialRegister,
    validationSchema: registerSchema,
    validateOnMount: false,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const formObj = { ...values };
        // formObj.phone = formObj.phone.toString();
        const { message } = await dispatch(registeration(formObj)).unwrap();
        // return navigate.push(routes.dashboard.usersdashboard);
      } catch (error) {}
    },
  });

  return {
    login,
    register,
  };
}

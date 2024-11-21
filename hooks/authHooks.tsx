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
        // let redirect = query.get("redirect");

        const { data } = await dispatch(signIn(values)).unwrap();
        console.log(data);

        // if (redirect) {
        //   return navigate.push(redirect as string);
        // }
        // toast.success("Login Successful");
        // if (data?.legacy_v2?.user?.role === "USER") {
        //   return navigate.push(routes.dashboard.usersdashboard);
        // }
        // return navigate.push(routes.admin.dashboard);
      } catch (error) {
        // return toast.error(error as string);
      }
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

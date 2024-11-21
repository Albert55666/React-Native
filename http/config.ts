import axios, { AxiosInstance, AxiosResponse } from "axios";

// Initializes an instance of axios
export const buildInstance = () => {
  const instance: AxiosInstance = axios.create({
    baseURL: `${process.env.REACT_APP_API_BASE_URL}`,
    timeout: 500000,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    transformRequest: [
      (data) => {
        return JSON.stringify(data);
      },
    ],
  });
  const setDefaultHeaders = (instance: AxiosInstance) => {};
  setDefaultHeaders(instance);
  // const userInfo = localStorage.getItem(authConfig.storageTokenKeyName);
  // if (!userInfo) {
  // } else {
  //   instance.defaults.headers.common["Authorization"] = userInfo
  //     ? `Bearer ${userInfo}`
  //     : "";
  // }
  return instance;
};

// Handles axios response
export const extractResponseData = ({ data, status }: AxiosResponse): any => {
  if (data.message === "unauthorized access") {
    console.log("unauthorized access");
  }
  if (status >= 400) {
    console.log(data.message);

    throw new Error(data.message);
  }
  return data;
};

// checks for axios errors
export const errBody = (err: any) => {
  if (err?.response?.statusText === "Unauthorized") {
    console.log("log me out");
    // store.dispatch({ type: "auth/logout" });
  }

  if (err.code === "ERR_NETWORK") {
    throw new Error("Network Error, try again later");
  }

  const errMsg = err.response.data.message as string;
  // const errObj = err.response.data as object;

  throw new Error(errMsg);
};

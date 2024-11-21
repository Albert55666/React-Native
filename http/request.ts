import { AxiosRequestConfig } from "axios";
import { extractResponseData, errBody, buildInstance } from "./config";

const get = async (url: string, config?: AxiosRequestConfig) => {
  return await buildInstance()
    .get(url, config)
    .then(extractResponseData, errBody);
};
const patch = async (url: string, data: any, config: AxiosRequestConfig) => {
  return await buildInstance()
    .patch(url, data, config)
    .then(extractResponseData, errBody);
};
const post = async (url: string, data: any, config: AxiosRequestConfig) => {
  return await buildInstance()
    .post(url, data, config)
    .then(extractResponseData, errBody);
};
const pop = async (url: string, data: any, config: AxiosRequestConfig) => {
  return await buildInstance()
    .delete(url, data)
    .then(extractResponseData, errBody);
};

export { get, post, pop, patch };

import axios from "axios";
import { getFromLocalStorage } from "../utils/storage.utils";
import { baseUrl } from "./endpoint";

const axiosInstance = axios.create({
  baseURL: baseUrl,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getFromLocalStorage("token");
    if (token !== null && token !== undefined) {
      config.headers["x-access-token"] = token;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;

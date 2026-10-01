import axios from "axios";
import { getCookie, setCookie } from "cookies-next";
import { refreshTokenFns } from "./api-function/auth.function";

const api = axios.create({ baseURL: process.env.NEXT_PUBLIC_SURVER_URL });

api.interceptors.request.use(
  (config) => {
    const token = getCookie("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (error) => {
    // return Promise.reject(error);

    const originalReq = error.config;

    if (error.response.status === 401 || error.response.status === 403) {
      const refreshToken = getCookie("refreshToken");
      if (refreshToken) {
        error._retry = true;
        const res = await refreshTokenFns(refreshToken);

        originalReq.headers.Authorization = `Bearer ${res.accessToken}`;

        setCookie("token", res.accessToken);
        console.log("res in the refreshTokenFns", res);

        console.log("axious interceptor error ", error.response);
        return api(originalReq) 
      } else {
        window.location.href = "/";
      }
    }
  },
);

export default api;

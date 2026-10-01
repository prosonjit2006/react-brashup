import { LoginPayload, SignupPayload, VERIFY_EMAIL_Payload } from "@/types";
import api from "../api";
import { EndPoint } from "@/services/helper/endPoint";
import { deleteCookie, setCookie } from "cookies-next";
import axios from "axios";

export const SignupFns = async (payload: SignupPayload) => {
  try {
    const res = await api.post(`${EndPoint.auth.signup}`, payload);

    if (res.data.success) {
      setCookie("email", payload.email, { maxAge: 600 });
    }
    return res.data;
  } catch (error: any) {
    // console.log(error)
    return error?.response?.data;
  }
};

export const LoginFns = async (payload: LoginPayload) => {
  try {
    const res = await api.post(`${EndPoint.auth.login}`, payload);

    if (res.data.success) {
      setCookie("token", res.data.accessToken);
      setCookie("refreshToken", res.data.refreshToken);
      setCookie("role", res.data.user.role);
    }

    return res.data;
  } catch (error: any) {
    // console.log(error)
    return error?.response?.data;
  }
};

export const VerifyFns = async (payload: VERIFY_EMAIL_Payload) => {
  try {
    const res = await api.post(`${EndPoint.auth.verify}`, payload);
    return res.data;
  } catch (error: any) {
    // console.log(error)
    return error?.response?.data;
  }
};

export const refreshTokenFns = async (refreshToken: string) => {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_SURVER_URL}/auth/refresh-token`,
      { refreshToken },
    );
    return res.data;
  } catch (error: any) {
    deleteCookie("token");
    deleteCookie("refreshToken");
    deleteCookie("role");
    return error.response.data;
  }
};

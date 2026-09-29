import React, { ReactNode, useReducer } from "react";
import AuthContext from "./AuthContext";
import { authInitialState, authReducer } from "@/reducer/auth.reducer";
import {
  AuthMode,
  LoginPayload,
  SignupPayload,
  VERIFY_EMAIL_Payload,
} from "@/types";
import {
  LoginFns,
  SignupFns,
  VerifyFns,
} from "@/api/api-function/auth.function";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // let userName = "Prosonjit"

  const [authState, authDispatch] = useReducer(authReducer, authInitialState);
  const openAuthDialog = () => {
    authDispatch({
      type: "Open_Dialog",
    });
  };
  const closeAuthDialog = () => {
    authDispatch({
      type: "Close_Dialog",
    });
  };

  const authModeChange = (mode: AuthMode) => {
    authDispatch({
      type: "Auth_Mode_Change",
      payload: mode,
    });
  };

  const registeruser = async (payload: SignupPayload) => {
    authDispatch({ type: "Start_Register" });

    const res = await SignupFns(payload);
    console.log("res from authProvider - ", res);
    if (res.success) {
      authDispatch({ type: "Success_Register", payload: res });
    } else {
      authDispatch({ type: "Failed_Register", payload: res });
    }
    return res;
  };

  const loginuser = async (payload: LoginPayload) => {
    authDispatch({ type: "Start_Login" });

    const res = await LoginFns(payload);
    console.log("res from authProvider for loginfns - ", res);
    if (res.success) {
      authDispatch({ type: "Success_Login", payload: res });
    } else {
      authDispatch({ type: "Failed_Login", payload: res });
    }
    return res;
  };
  const verifyEmailuser = async (payload: VERIFY_EMAIL_Payload) => {
    authDispatch({ type: "Start_VerifyEmail" });

    const res = await VerifyFns(payload);
    console.log("res from authProvider - ", res);
    if (res.success) {
      authDispatch({ type: "Success_VerifyEmail", payload: res });
    } else {
      authDispatch({ type: "Failed_VerifyEmail", payload: res });
    }
    return res;
  };

  return (
    <AuthContext
      value={{
        authState,
        openAuthDialog,
        closeAuthDialog,
        authModeChange,
        registeruser,
        loginuser,
        verifyEmailuser,
      }}
    >
      {children}
    </AuthContext>
  );
};

export default AuthProvider;

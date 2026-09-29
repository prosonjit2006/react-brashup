import { CookieValueTypes } from "cookies-next";
import { PascalCase } from "./../../node_modules/type-fest/source/pascal-case.d";
import { Path } from "react-hook-form";

export type AuthMode =
  | "LOGIN"
  | "SIGNUP"
  | "VERIFY_EMAIL"
  | "RESEND_OTP"
  | "FORGOT_PASSWORD"
  | "RESET_PASSWORD";

export interface AuthState {
  authDialog: boolean;
  authMode: AuthMode;
  isLoading: boolean;
  isError: string | null;
}

export interface AuthContextProps {
  authState: AuthState;
  openAuthDialog: () => void;
  closeAuthDialog: () => void;
  authModeChange: (mode: AuthMode) => void;
  registeruser: (payload: SignupPayload) => Promise<any>;
  loginuser: (payload: LoginPayload) => Promise<any>;
  verifyEmailuser: (payload: VERIFY_EMAIL_Payload) => Promise<any>;

}

export type AuthAction =
  | {
      type: "Open_Dialog";
    }
  | {
      type: "Close_Dialog";
    }
  | {
      type: "Auth_Mode_Change";
      payload: AuthMode;
    }
  | {
      type: "Start_Register";
    }
  | {
      type: "Success_Register";
      payload: any;
    }
  | {
      type: "Failed_Register";
      payload: string | null;
    }
  | {
      type: "Start_VerifyEmail";
    }
  | {
      type: "Success_VerifyEmail";
      payload: any;
    }
  | {
      type: "Failed_VerifyEmail";
      payload: string | null;
    }
  | {
      type: "Start_Login";
    }
  | {
      type: "Success_Login";
      payload: any;
    }
  | {
      type: "Failed_Login";
      payload: string | null;
    };

export interface SignupPayload {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export interface SignupInputField {
  label: string;
  name: Path<SignupPayload>;
  type?: string;
  isTextarea?: boolean;
  required?: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface LoginInputField {
  label: string;
  name: Path<LoginPayload>;
  type?: string;
  isTextarea?: boolean;
  required?: boolean;
}


export interface VERIFY_EMAIL_Payload {
  email: CookieValueTypes | Promise<CookieValueTypes>;
  otp: string;
}

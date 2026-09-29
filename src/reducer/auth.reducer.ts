import { AuthAction, AuthState } from "@/types";

export const authInitialState: AuthState = {
  authDialog: false,
  authMode: "LOGIN",
  isLoading: false,
  isError: null,
};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case "Open_Dialog":
      // console.log("data is flowing ")
      return {
        ...state,
        authDialog: true,
      };

    case "Close_Dialog":
      return {
        ...state,
        authDialog: false,
        authMode: "LOGIN",
      };

    case "Auth_Mode_Change":
      return {
        ...state,
        authMode: action.payload,
      };

    case "Start_Register":
    case "Start_Login":
    case "Start_VerifyEmail":
      return {
        ...state,
        isLoading: true,
        isError: null,
      };

    case "Success_Register":
      return {
        ...state,
        isLoading: false,
        authMode: "VERIFY_EMAIL",
        isError: null,
      };

    case "Success_VerifyEmail":
      return {
        ...state,
        isLoading: false,
        authMode: "LOGIN",
        isError: null,
      };

    case "Success_Login":
      return {
        ...state,
        isLoading: false,
        isError: null,
        authDialog: false,
      };

    case "Failed_Register":
    case "Failed_Login":
    case "Failed_VerifyEmail":
      return {
        ...state,
        isLoading: false,
        isError: action?.payload?.message,
      };

    default:
      return state;
  }
};


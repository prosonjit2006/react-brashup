"use client";

import AuthContext from "@/context/auth/AuthContext";
import { useContext } from "react";

const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext) {
    throw new Error("Auth-context is not provided");
  }

  return authContext;
};

export default useAuth;


// try - useForm Hook using useState 
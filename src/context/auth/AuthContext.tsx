import { AuthContextProps } from "@/types";
import { createContext } from "react";

const AuthContext = createContext<AuthContextProps | null>(null);

export default AuthContext;

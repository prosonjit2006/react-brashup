import { LoginPayload, SignupPayload, VERIFY_EMAIL_Payload } from "@/types";
import api from "../api";
import { EndPoint } from "@/services/helper/endPoint";
import { setCookie } from "cookies-next";

export const SignupFns = async (payload: SignupPayload)=> {
    try {
        const res = await api.post(`${EndPoint.auth.signup}`, payload)

        if(res.data.success){
            setCookie("email", payload.email, {maxAge: 600})
        }
        return res.data
        
    } catch (error: any) {
        // console.log(error)
        return error?.response?.data 
    }
}

export const LoginFns = async (payload: LoginPayload)=> {
    try {
        const res = await api.post(`${EndPoint.auth.login}`, payload)
        return res.data
        
    } catch (error: any) {
        // console.log(error)
        return error?.response?.data 
    }
}

export const VerifyFns = async (payload: VERIFY_EMAIL_Payload)=> {
    try {
        const res = await api.post(`${EndPoint.auth.verify}`, payload)
        return res.data
        
    } catch (error: any) {
        // console.log(error)
        return error?.response?.data 
    }
}


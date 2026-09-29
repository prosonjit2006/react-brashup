import * as yup from "yup"
export const RegisterSchema = yup.object({
    name:yup.string().required("Name is required"),
    phone:yup.string().required("Phone Number is required").min(10,"Minimum 10 number"),
    email:yup.string().email().required("Email is required"),
    password:yup.string().required("Password is Required")
    })
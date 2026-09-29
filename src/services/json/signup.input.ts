import { SignupInputField } from "@/types";

export const SignupinputField: SignupInputField[] = [
  {
    label: "Name",
    name: "name",
    type: "text",
    required: true,
  },
  {
    label: "Email Address",
    name: "email",
    type: "text",
    required: true,
  },
  {
    label: "Phone No",
    name: "phone",
    type: "text",
    required: true,
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    required: true,
  },
];
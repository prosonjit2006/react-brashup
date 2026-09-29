import React from "react";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { SignupinputField } from "@/services/json/signup.input";
import DynamicInput from "./common/DynamicInput";
import { SignupPayload } from "@/types";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { RegisterSchema } from "@/services/validation/register.validation";
import useAuth from "@/hooks/useAuth";

const SignupForm = () => {

    const auth = useAuth()

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SignupPayload>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
    resolver: yupResolver(RegisterSchema),
  });

  const onSubmit = async (data: SignupPayload) => {
    // console.log(data);
    const res = await auth.registeruser(data)
    console.log("res in signup page", res)
  };
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {SignupinputField.map((itm) => (
        <DynamicInput
          register={register}
          errors={errors}
          name={itm.name}
          label={itm.label}
          type={itm.type}
          key={itm.name}
          required={itm.required}
        />
      ))}

      {auth?.authState?.isError && <p>{auth?.authState?.isError}</p>}

      <DialogFooter className="mt-4">
        <Button type="submit" disabled={auth?.authState?.isLoading}>
          Save Changes
        </Button>
      </DialogFooter>
    </form>
  );
};

export default SignupForm;

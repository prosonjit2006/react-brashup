import React from "react";
import { Input } from "./ui/input";
import { useForm } from "react-hook-form";
import useAuth from "@/hooks/useAuth";
import { VERIFY_EMAIL_Payload } from "@/types";
import { DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { CookieValueTypes, getCookie } from "cookies-next";

const VerifyEmail = () => {

    const email: CookieValueTypes | Promise<CookieValueTypes> =
      getCookie("email");

  const auth = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<VERIFY_EMAIL_Payload>({
    defaultValues: {
      email: email,
      otp: "",
    },
  });

  const onSubmit = async (data: VERIFY_EMAIL_Payload) => {
    // console.log(data);
    const res = await auth.verifyEmailuser(data);
    console.log("res in verify page", res);
  };

  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Input placeholder="Enter your otp" {...register("otp")} />

      {auth?.authState?.isError && <p>{auth?.authState?.isError}</p>}

      <DialogFooter className="mt-4">
        <Button type="submit" disabled={auth?.authState?.isLoading}>
          Save Changes
        </Button>
      </DialogFooter>
    </form>
  );
};

export default VerifyEmail;

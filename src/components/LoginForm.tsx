import React from 'react'
import DynamicInput from './common/DynamicInput';
import { DialogFooter } from './ui/dialog';
import { Button } from './ui/button';
import { LogininputField } from '@/services/json/login.input';
import { LoginPayload } from '@/types';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '@/services/validation/login.validation';
import useAuth from '@/hooks/useAuth';

const LoginForm = () => {
    const auth = useAuth();

   const {
     register,
     reset,
     handleSubmit,
     setValue,
     formState: { errors },
   } = useForm<LoginPayload>({
     defaultValues: {
       email: "",
       password: "",
     },
     resolver: yupResolver(LoginSchema),
   });
  
    const onSubmit = async (data: LoginPayload) => {
      // console.log(data);
      const res = await auth.registeruser(data)
      console.log("res in signup page", res)
    };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {LogininputField.map((itm) => (
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
}

export default LoginForm
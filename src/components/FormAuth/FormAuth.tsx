import React from "react";
import { StyledForm } from "./styled";
import { Button, Input } from "components";
import { SubmitHandler, useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

interface AuthValues {
  email: string;
  password: string;
}
export const FormAuth = () => {
  const { register, handleSubmit } = useForm<AuthValues>();

  const onSubmit: SubmitHandler<AuthValues> = ({ email, password }) => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user;
      console.log(userCredential);
    });
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <input type="text" {...register("email")} placeholder="email" />
      <input type="password" {...register("password")} placeholder="password" />
      <Button type="submit">Submit</Button>
    </StyledForm>
  );
};

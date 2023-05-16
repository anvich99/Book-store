import React from "react";
import { AddEmail, Subtitle, TitleForm } from "./styled";
import { Button, Input } from "components";
import { useForm } from "react-hook-form";

export const FormEmail = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = () => {};
  return (
    <AddEmail onSubmit={handleSubmit(onSubmit)}>
      <TitleForm>Subscribe to Newsletter</TitleForm>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Subtitle>
      <Input placeholder="Your email" />
      <Button type="submit">Subscribe</Button>
    </AddEmail>
  );
};

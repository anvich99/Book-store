import React from "react";
import { AddEmail, Subtitle, TitleForm } from "./styled";
import { Button, Input } from "components";

export const FormEmail = () => {
  return (
    <AddEmail>
      <TitleForm>Subscribe to Newsletter</TitleForm>
      <Subtitle>
        Be the first to know about new IT books, upcoming releases, exclusive offers and more.
      </Subtitle>
      <Input placeholder="Your email" />
      <Button buttonName="Subscribe" />
    </AddEmail>
  );
};

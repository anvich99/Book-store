import React from "react";
import { ButtonHTMLAttributes } from "react";
import { ButtonStyled } from "./styles";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <ButtonStyled {...props}>{props.children}</ButtonStyled>;
};

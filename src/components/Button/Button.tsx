import React from "react";
import { ButtonHTMLAttributes } from "react";
import { StyledButton } from "./styled";

export const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

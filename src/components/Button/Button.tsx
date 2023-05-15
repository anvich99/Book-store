import React from "react";
import { ButtonStyled } from "./styles";
interface ButtonProps {
  buttonName: string;
}
export const Button = ({ buttonName }: ButtonProps) => {
  return <ButtonStyled>{buttonName}</ButtonStyled>;
};

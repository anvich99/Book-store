import React, { InputHTMLAttributes } from "react";
import { InputStyle } from "./styled";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export const Input = (props: InputProps) => {
  return <InputStyle {...props} />;
};

import React, { ReactNode } from "react";
import { TitlePage } from "./styled";
interface TitleProps {
  children: ReactNode;
}
export const Title = ({ children }: TitleProps) => {
  return <TitlePage>{children}</TitlePage>;
};

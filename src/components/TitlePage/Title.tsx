import React from "react";
import { TitlePage } from "./styled";
interface TitleProps {
  title: string;
}
export const Title = ({ title }: TitleProps) => {
  return <TitlePage>{title}</TitlePage>;
};

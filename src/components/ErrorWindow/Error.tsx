import React from "react";
import { ErrorBlock } from "./styled";

interface ErrorProps {
  error: string | null;
}
export const ErrorWindow = ({ error }: ErrorProps) => {
  return <ErrorBlock>{error}</ErrorBlock>;
};

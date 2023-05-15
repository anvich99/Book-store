import React from "react";
import { SpinnerCircle, SpinnerContainer } from "./styled";

export const Spinner = () => {
  return (
    <SpinnerContainer>
      <SpinnerCircle />
      <SpinnerCircle />
      <SpinnerCircle />
      <SpinnerCircle />
      <SpinnerCircle />
    </SpinnerContainer>
  );
};

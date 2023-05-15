import React, { ReactNode } from "react";
import { Container } from "./styles";
import { Footer, Header } from "components";
interface TemplateProps {
  children: ReactNode;
}
export const Template = ({ children }: TemplateProps) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

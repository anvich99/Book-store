import React, { ReactNode } from "react";
import { Container } from "./styles";
import { Footer, Header } from "components";
import { Main } from "ui";

interface TemplateProps {
  children: ReactNode;
}

export const Template = ({ children }: TemplateProps) => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Container>
  );
};

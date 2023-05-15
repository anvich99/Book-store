import { Title } from "components";
import React from "react";
import { Template } from "templates";
import { Book } from "types";
import { Container } from "ui";
interface BookPageProps {
  bookName: Pick<Book, "title">;
}
export const BookPage = () => {
  return (
    <Container>
      <Template>
        <Title>ff</Title>
      </Template>
    </Container>
  );
};

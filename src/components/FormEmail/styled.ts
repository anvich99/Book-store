import styled from "styled-components";
import { Colors, HeadlineTwo, SublineText } from "ui";

const AddEmail = styled.form`
  padding: 56px 64px;
  background-color: ${Colors.Purple};
`;
const TitleForm = styled.h2`
  ${HeadlineTwo}
`;
const Subtitle = styled.p`
  ${SublineText};
  margin-bottom: 32px;
`;

export { AddEmail, TitleForm, Subtitle };

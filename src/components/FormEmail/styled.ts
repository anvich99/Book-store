import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import styled from "styled-components";
import { Colors, HeadlineTwo, SublineText } from "ui";

const AddEmail = styled.form`
  padding: 56px 64px;
  background-color: ${Colors.Purple};
`;
const InputEmail = styled(Input)`
  max-width: 830px;
`;
const TitleForm = styled.h2`
  ${HeadlineTwo}
`;
const Subtitle = styled.p`
  ${SublineText};
  margin-bottom: 32px;
`;
const ButtonSubscribe = styled(Button)`
  padding: 16px 40px;
`;

export { AddEmail, TitleForm, Subtitle, InputEmail, ButtonSubscribe };

import { Button } from "components/Button/Button";
import { Input } from "components/Input/Input";
import styled from "styled-components";
import { Colors, HeadlineTwo, MediaBreakpoints, SublineText } from "ui";

const AddEmail = styled.form`
  padding: 56px 64px;
  background-color: ${Colors.Purple};
  ${MediaBreakpoints.sm} {
    padding: 24px;
  }
`;
const InputEmail = styled(Input)`
  max-width: 80%;
  ${MediaBreakpoints.sm} {
    margin-bottom: 24px;
    max-width: 100%;
  }
`;
const TitleForm = styled.h2`
  ${HeadlineTwo}
`;
const Subtitle = styled.p`
  ${SublineText};
  margin-bottom: 32px;
`;
const ButtonSubscribe = styled(Button)`
  max-width: 19%;
  width: 100%;
  padding: 16px 0;
  ${MediaBreakpoints.sm} {
    max-width: 100%;
  }
`;

export { AddEmail, TitleForm, Subtitle, InputEmail, ButtonSubscribe };

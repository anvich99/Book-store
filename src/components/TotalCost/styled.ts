import styled from "styled-components";
import { HeadlineTwo, SublineText } from "ui";

const StyledTotalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTotal = styled.p`
  ${HeadlineTwo}
`;
const StyledSum = styled.p`
  ${SublineText}
`;

export { StyledTotal, StyledSum, StyledTotalContainer };

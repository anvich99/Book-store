import styled from "styled-components";
import { Colors, SublineText } from "ui";
const FooterBlock = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 36px 0;
  border-top: 1px solid ${Colors.LightGrey};
`;
const FooterText = styled.p`
  ${SublineText}
`;
export { FooterBlock, FooterText };

import styled from "styled-components";
import { Colors, ButtonText } from "ui";

const ButtonStyled = styled.button`
  border: none;
  background-color: ${Colors.Primary};
  ${ButtonText}
  cursor: pointer;
`;
const ButtonSuscribe = styled(ButtonStyled)`
  padding: 16px 40px;
`;
export { ButtonStyled, ButtonSuscribe };

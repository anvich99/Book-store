import styled from "styled-components";
import { Colors, ButtonText } from "ui";

const StyledButton = styled.button`
  border: none;
  background-color: ${Colors.Primary};
  ${ButtonText}
  cursor: pointer;
`;

export { StyledButton };

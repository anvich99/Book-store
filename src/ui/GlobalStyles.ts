import { createGlobalStyle } from "styled-components";
import { Colors, reset } from "ui";

export const GlobalStyles = createGlobalStyle`
${reset}
body{
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.Primary};
  background-color: ${Colors.White};
}

`;

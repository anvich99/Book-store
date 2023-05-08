import { createGlobalStyle } from "styled-components";
import { Colors } from ".";

export const GlobalStyles = createGlobalStyle`
body{
  background-color: ${Colors.Primary};
}
`;

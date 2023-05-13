import { createGlobalStyle } from "styled-components";
import { Colors } from "ui";

export const GlobalStyles = createGlobalStyle`

body{
  font-family: 'Bebas Neue', cursive;
  font-weight: 400;
  font-size: 16px;
  line-height: 32px;
  color: ${Colors.Primary};
  background-color: ${Colors.White};
}
h1{
  font-weight: 700;
  font-size: 56px;
  line-height: 64px;
  color: ${Colors.Primary};
}
h2{
  font-weight: 700;
  font-size: 40px;
  line-height: 60px;
  color: ${Colors.Primary};
}
h3{
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  color: ${Colors.Primary};
}
`;

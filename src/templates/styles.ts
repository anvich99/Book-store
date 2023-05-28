import styled from "styled-components";
import { MediaBreakpoints } from "ui";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1120px;
  width: 100%;
  ${MediaBreakpoints.xl} {
    padding: 0 30px;
  }
  ${MediaBreakpoints.md} {
    padding: 0 40px;
  }
`;
export { Container };

import styled from "styled-components";
import { Colors } from "ui";

const HeaderPage = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0px;
  border-bottom: 1px solid ${Colors.LightGrey};
`;
const HeaderLogo = styled.div`
  width: 138px;
  height: 29px;
  cursor: pointer;
`;
const HeaderLinks = styled.div`
  display: flex;
  gap: 40px;
  padding: 16px;
  & > {
    &:active {
      svg {
        fill: ${Colors.Primary};
        path {
          transition: 0.2s linear;
          stroke: ${Colors.Red};
        }
      }
    }
    &:hover {
      svg {
        path {
          transition: 0.2s linear;
          stroke: ${Colors.Red};
        }
      }
    }
  }
`;

export { HeaderPage, HeaderLogo, HeaderLinks };

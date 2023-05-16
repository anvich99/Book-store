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
const HeaderIcons = styled.div`
  display: flex;
  gap: 40px;
  padding: 16px;
`;
export { HeaderPage, HeaderLogo, HeaderIcons };

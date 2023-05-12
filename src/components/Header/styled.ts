import styled from "styled-components";
// import { cartIcon, heartIcon, searchIcon, userIcon } from "../../assets";
import { Colors } from "../../ui";

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
  /* background: url(<logoIcon/>); */
  cursor: pointer;
`;
const HeaderIcons = styled.div`
  display: flex;
  gap: 40px;
  padding: 16px;
`;
// const HeaderHeart = styled.div`
//   width: 24px;
//   height: 24px;
//   background: url(<heartIcon/>);
//   background-repeat: no-repeat;
//   cursor: pointer;
// `;
// const HeaderCart = styled.div`
//   width: 24px;
//   height: 24px;
//   background: url(<cartIcon/>);
//   background-repeat: no-repeat;
//   cursor: pointer;
// `;
// const HeaderUser = styled.div`
//   width: 24px;
//   height: 24px;
//   background: url(<userIcon/>);
//   background-repeat: no-repeat;
//   cursor: pointer;
// `;
// const HeaderSearch = styled.div`
//   width: 24px;
//   height: 24px;
//   background: url(<searchIcon>);
//   background-repeat: no-repeat;
//   cursor: pointer;
// `;
export { HeaderPage, HeaderLogo, HeaderIcons };

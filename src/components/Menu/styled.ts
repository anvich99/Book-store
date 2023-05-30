import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "ui";
const StyledNav = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const StyledMenu = styled.nav`
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
  @media (max-width: 1105px) {
    position: absolute;
    top: 21%;
    right: 0;
    z-index: 10;

    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 20vw;
    height: calc(50vh);
    background-color: ${Colors.Green};
    transform: translateX(-100%);
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;
export { StyledNav, StyledMenu, Links };

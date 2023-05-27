import { motion } from "framer-motion";
import styled from "styled-components";
import { Colors } from "ui";
const StyledNav = styled(motion.div)`
  display: flex;
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
`;

export { StyledNav, StyledMenu };

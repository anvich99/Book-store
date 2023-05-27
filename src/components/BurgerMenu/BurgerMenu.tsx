import React from "react";
import { StyledButton } from "./styled";

interface BurgerMenuProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

export const BurgerMenu = ({ toggleMenu, isMenuOpen }: BurgerMenuProps) => {
  return <StyledButton onClick={toggleMenu}>{isMenuOpen ? "X" : "="} </StyledButton>;
};

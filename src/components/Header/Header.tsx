import React, { useState } from "react";
import { HeaderLogo, StyledHeader } from "./styled";
import { BurgerMenu, Menu } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { LogoIcon } from "assets";
import { useToggle, useWindowSize } from "hooks";

export const Header = () => {
  const [isMenuOpen, toggleMenu] = useToggle();
  const { width = 0 } = useWindowSize();
  const isMobile = width < 768;
  return (
    <StyledHeader>
      <Link to={ROUTE.MAIN}>
        <HeaderLogo>
          <LogoIcon />
        </HeaderLogo>
      </Link>
      <Menu isOpen={isMenuOpen} isMobile={isMobile} handleClose={toggleMenu} />
      {isMobile && <BurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />}
    </StyledHeader>
  );
};

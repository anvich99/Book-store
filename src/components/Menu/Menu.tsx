import React from "react";
import { StyledNav } from "./styled";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { CartIcon, HeartIcon, UserIcon } from "assets";
import { SearchForm } from "components";

interface MenuProps {
  isOpen: boolean;
  isMobile: boolean;
  handleClose: () => void;
}

const menuVariants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
  idle: {},
};

export const Menu = ({ isOpen, isMobile, handleClose }: MenuProps) => {
  const currentVariant = isMobile ? (isOpen ? "open" : "closed") : "idle";
  return (
    <>
      <SearchForm placeholder="Search" link={ROUTE.MAIN + ROUTE.SEARCH} />
      <StyledNav animate={currentVariant} variants={menuVariants} initial="idle">
        <Link to={ROUTE.MAIN + ROUTE.FAVORITES} onClick={handleClose}>
          <HeartIcon />
        </Link>
        <Link to={ROUTE.MAIN + ROUTE.CART} onClick={handleClose}>
          <CartIcon />
        </Link>
        <Link to={ROUTE.MAIN + ROUTE.SIGN_UP} onClick={handleClose}>
          <UserIcon />
        </Link>
      </StyledNav>
    </>
  );
};

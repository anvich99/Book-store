import React from "react";
import { HeaderLinks, HeaderLogo, HeaderPage } from "./styled";
import { SearchForm } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { LogoIcon, HeartIcon, CartIcon, UserIcon } from "assets";

export const Header = () => {
  return (
    <HeaderPage>
      <Link to={ROUTE.MAIN}>
        <HeaderLogo>
          <LogoIcon />
        </HeaderLogo>
      </Link>

      <SearchForm placeholder="Search" />
      <HeaderLinks>
        <Link to={ROUTE.FAVORITES}>
          <HeartIcon />
        </Link>
        <Link to={ROUTE.CART}>
          <CartIcon />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <UserIcon />
        </Link>
      </HeaderLinks>
    </HeaderPage>
  );
};

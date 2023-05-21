import React from "react";
import { HeaderLinks, HeaderLogo, StyledHeader, Total } from "./styled";
import { SearchForm } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";
import { LogoIcon, HeartIcon, CartIcon, UserIcon } from "assets";
import { selectCart, useAppDispatch, useAppSelector } from "store";

export const Header = () => {
  const { amount } = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  return (
    <StyledHeader>
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
          <Total>{amount}</Total>
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <UserIcon />
        </Link>
      </HeaderLinks>
    </StyledHeader>
  );
};

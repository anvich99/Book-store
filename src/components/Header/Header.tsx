import React from "react";
import { HeaderIcons, HeaderLogo, HeaderPage } from "./styled";
import { Input } from "components";
import { Link } from "react-router-dom";
import { ROUTE } from "routes";

import { LogoIcon, HeartIcon, CartIcon, UserIcon } from "assets";
import { fetchBooksBySearch, useAppDispatch } from "store";

export const Header = () => {
  const dispatch = useAppDispatch();
  // const onSubmit = (searchValue)=>{
  //   dispatch(fetchBooksBySearch(searchValue))
  // }
  return (
    <HeaderPage>
      <Link to={ROUTE.MAIN}>
        <HeaderLogo>
          <LogoIcon />
        </HeaderLogo>
      </Link>

      <Input placeholder="Search" />
      <HeaderIcons>
        <Link to={ROUTE.FAVORITES}>
          <HeartIcon />
        </Link>
        <Link to={ROUTE.CART}>
          <CartIcon />
        </Link>
        <Link to={ROUTE.ACCOUNT}>
          <UserIcon />
        </Link>
      </HeaderIcons>
    </HeaderPage>
  );
};

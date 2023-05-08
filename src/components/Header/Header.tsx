import React from "react";
import {
  HeaderCart,
  HeaderHeart,
  HeaderIcons,
  HeaderLogo,
  HeaderPage,
  HeaderSearch,
  HeaderUser,
} from "./styled";
import { Input } from "../Input/Input";
import { Link } from "react-router-dom";
import { ROUTE } from "../../routes";
export const Header = () => {
  return (
    <HeaderPage>
      <HeaderLogo />
      <Input placeholder="Search"></Input>
      <HeaderIcons>
        <HeaderHeart>
          <Link to={ROUTE.FAVORITES} />
        </HeaderHeart>
        <HeaderCart>
          <Link to={ROUTE.CART} />
        </HeaderCart>
        <HeaderUser>
          <Link to={ROUTE.ACCOUNT} />
        </HeaderUser>
      </HeaderIcons>
    </HeaderPage>
  );
};

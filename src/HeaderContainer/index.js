import React, { Fragment } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import {
  HeaderBannerContainer,
  HeaderBanner,
  HeaderContainer,
  AvatarContainer,
  AvatarImage,
  EditCoverButton,
  UserName,
  NavBar,
  LinkList,
  LinkItem,
  MenuButton,
  LinkWrapper
} from "./HeaderContainer.style";

const Header = () => (
  <HeaderContainer>
    <HeaderBannerContainer>
      <HeaderBanner />
      <UserName>Van Hai Le</UserName>
      <EditCoverButton>Edit Cover</EditCoverButton>
      <AvatarContainer>
        <AvatarImage src="https://images.unsplash.com/photo-1551650045-fc958c7b0452?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=501&fit=crop&ixid=eyJhcHBfaWQiOjF9" />
      </AvatarContainer>
    </HeaderBannerContainer>
    <NavBar>
      <LinkList>
        <LinkItem>
          <LinkWrapper>
            <Link to="/">Timeline</Link>
          </LinkWrapper>
        </LinkItem>
        <LinkItem>
          <LinkWrapper active>About</LinkWrapper>
        </LinkItem>
        <LinkItem>
          <LinkWrapper>Friends</LinkWrapper>
        </LinkItem>
        <LinkItem>
          <LinkWrapper>Photos</LinkWrapper>
        </LinkItem>
      </LinkList>
      <MenuButton>
        <FontAwesomeIcon icon="ellipsis-h" />
      </MenuButton>
    </NavBar>
  </HeaderContainer>
);

export default Header;

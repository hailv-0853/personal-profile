import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  TopNavContainer,
  TopNavLeft,
  TopNavRight,
  Logo,
  Title,
  LogoWrapper,
  Input
} from "./TopNavContainer.style";

import { SearchIconHolder } from "./TopNavContainer.style";

const TopNav = () => (
  <TopNavContainer>
    <TopNavLeft>
      <LogoWrapper>
        <Logo />
        <Title>Socialio</Title>
      </LogoWrapper>
      <SearchIconHolder>
        <FontAwesomeIcon icon="search" />
      </SearchIconHolder>
      <Input placeholder="Search..." />
    </TopNavLeft>
    <TopNavRight />
  </TopNavContainer>
);

export default TopNav;

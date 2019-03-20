import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";

import { ROUTES } from "../Routes";

import {
  TopNavContainer,
  TopNavLeft,
  TopNavRight,
  Logo,
  Title,
  LogoWrapper,
  Input,
  IconHolder,
  IconHolderRight,
  Avatar,
  UpDownButtonHolder,
  UpDownIconHolder
} from "./TopNavContainer.style";

const TopNav = () => (
  <TopNavContainer>
    <TopNavLeft>
      <LogoWrapper>
        <Logo />
        <Title>Socialio</Title>
      </LogoWrapper>
      <IconHolder>
        <FontAwesomeIcon icon="search" />
      </IconHolder>
      <Input placeholder="Search..." />
    </TopNavLeft>
    <TopNavRight>
      <IconHolderRight>
        <FontAwesomeIcon icon="globe" />
      </IconHolderRight>
      <IconHolderRight>
        <FontAwesomeIcon icon="comment" />
      </IconHolderRight>
      <Link to={ROUTES.USERNAME.TIMELINE}>
        {console.log(ROUTES)}
        <Avatar src="https://images.unsplash.com/photo-1550681429-bba2489d3c30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9" />
      </Link>
      <UpDownButtonHolder>
        <UpDownIconHolder>
          <FontAwesomeIcon icon="sort-up" />
        </UpDownIconHolder>
        <UpDownIconHolder>
          <FontAwesomeIcon icon="sort-down" />
        </UpDownIconHolder>
      </UpDownButtonHolder>
    </TopNavRight>
  </TopNavContainer>
);

export default TopNav;

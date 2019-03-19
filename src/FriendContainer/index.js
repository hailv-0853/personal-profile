import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  SectionContainer,
  LinkList,
  LinkItem,
  LinkWrapper,
  MenuButton
} from "../HeaderContainer/HeaderContainer.style";

import {
  FriendTitle,
  Light,
  FriendNavBar,
  Options,
  Input,
  InputWrapper,
  SearchIconHolder,
  FriendList,
  StyledFriendItem,
  FriendAvatar,
  FriendDesc,
  FriendName,
  MutualFriends
} from "./FriendContainer.style";

import FriendItem from "./FriendItem";

const FRIEND_LIST = [
  {
    id: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1552405523-773122013bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    name: "Henry Harvey",
    mutualFriends: 15
  },
  {
    id: 2,
    imgSrc:
      "https://images.unsplash.com/photo-1552405523-773122013bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    name: "Henry Harvey",
    mutualFriends: 15
  },
  {
    id: 3,
    imgSrc:
      "https://images.unsplash.com/photo-1552405523-773122013bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    name: "Henry Harvey",
    mutualFriends: 15
  },
  {
    id: 4,
    imgSrc:
      "https://images.unsplash.com/photo-1552405523-773122013bc7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=500&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9",
    name: "Henry Harvey",
    mutualFriends: 15
  }
];

const FriendContainer = () => (
  <SectionContainer>
    <FriendTitle>Friends</FriendTitle>
    <FriendNavBar>
      <LinkList>
        <LinkItem>
          <LinkWrapper active href="/">
            All Friends <Light>580</Light>
          </LinkWrapper>
        </LinkItem>
        <LinkItem>
          <LinkWrapper href="/">
            New Posts <Light>120</Light>
          </LinkWrapper>
        </LinkItem>
        <LinkItem>
          <LinkWrapper href="/">Friend Requests</LinkWrapper>
        </LinkItem>
      </LinkList>
      <Options>
        <InputWrapper>
          <Input placeholder="Search for your friends" />
          <SearchIconHolder>
            <FontAwesomeIcon icon="search" />
          </SearchIconHolder>
        </InputWrapper>
        <MenuButton>
          <FontAwesomeIcon icon="ellipsis-h" />
        </MenuButton>
      </Options>
    </FriendNavBar>
    <FriendList>
      {FRIEND_LIST.map(friend => (
        <FriendItem key={`friend-${friend.id}`} friend={friend} />
      ))}
    </FriendList>
  </SectionContainer>
);

export default FriendContainer;

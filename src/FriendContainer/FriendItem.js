import React from "react";

import {
  StyledFriendItem,
  FriendAvatar,
  FriendDesc,
  FriendName,
  MutualFriends
} from "./FriendContainer.style";

import { MenuButton } from "../HeaderContainer/HeaderContainer.style";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FriendItem = ({ friend }) => {
  const { name, mutualFriends, imgSrc } = friend;
  return (
    <StyledFriendItem>
      <FriendAvatar src={imgSrc} />
      <FriendDesc>
        <FriendName>{name}</FriendName>
        <MutualFriends>{`${mutualFriends} `}Mutual Friends</MutualFriends>
      </FriendDesc>
      <MenuButton>
        <FontAwesomeIcon icon="ellipsis-h" />
      </MenuButton>
    </StyledFriendItem>
  );
};

export default FriendItem;

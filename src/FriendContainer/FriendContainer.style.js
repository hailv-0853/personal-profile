import styled from "styled-components";

import { NavBar } from "../HeaderContainer/HeaderContainer.style";

import { textColor, color } from "../Colors";

import {
  Title,
  AboutContentWrapper
} from "../AboutContainer/AboutContainer.style";

export const FriendNavBar = styled(NavBar)`
  padding: 0 32px 0 16px;
  font-size: 14px;
  border-bottom: 1px solid ${color.borderColor};
`;

export const FriendTitle = styled.div`
  border-bottom: 0;
  font-size: 20px;
  padding: 32px 32px 0 32px;
  font-weight: 600;
  color: ${textColor.dark};
`;

export const Light = styled.span`
  font-weight: 400;
  color: ${textColor.lighter};
`;

export const Options = styled.div`
  align-self: center;
`;

export const Input = styled.input`
  border: 0;
  padding: 8px 40px 8px 16px;
  font-weight: 400;
  font-family: Roboto, sans-serif;
  font-size: 14px;
  border-radius: 4px;
  color: ${textColor.lighter};
`;

export const InputWrapper = styled.div`
  height: auto;
  width: auto;
  border: 1px solid #ddd;
  margin-right: 16px;
  display: inline-block;
  border-radius: 4px;
  position: relative;
`;

export const SearchIconHolder = styled.div`
  position: absolute;
  right: 16px;
  top: 0;
  font-size: 20px;
  color: ${textColor.lighter};
  height: 100%;
  display: flex;
  align-items: center;
`;

export const FriendList = styled(AboutContentWrapper)`
  padding: 32px;
`;

export const StyledFriendItem = styled.div`
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  border: 1px solid ${color.borderColor};
  border-radius: 4px;
  width: 360px;
  align-items: center;
  margin-bottom: 16px;
  &:nth-child(odd) {
    margin-right: 16px;
  }
  &:last-child,
  &:nth-last-child(2) {
    margin-bottom: 0;
  }
`;

export const FriendDesc = styled.div`
  flex-grow: 1;
`;

export const FriendAvatar = styled.img`
  height: 60px;
  width: 60px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const FriendName = styled.div`
  margin-bottom: 8px;
  font-weight: 600;
  color: ${textColor.dark};
`;

export const MutualFriends = styled.div`
  font-size: 14px;
  color: ${textColor.lighter};
`;

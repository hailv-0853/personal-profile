import styled from "styled-components";

import { textColor, color } from "../Colors";

export const AvatarContainer = styled.div`
  border-radius: 50%;
  line-height: 0;
  overflow: hidden;
  height: 120px;
  width: 120px;
  object-fit: cover;
  position: absolute;
  left: 32px;
  top: 85%;
`;

export const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
`;

export const EditCoverButton = styled.button`
  border: none;
  padding: 8px 16px;
  background-color: ${color.editButtonColor};
  border-radius: 4px;
  display: inline-block;
  color: #fff;
  font-family: Roboto, sans-serif;
  position: absolute;
  right: 8px;
  bottom: 8px;
  cursor: pointer;
`;

export const SectionContainer = styled.div`
  border-radius: 4px;
  background-color: #fff;
  height: auto;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
  margin-bottom: 32px;
`;

export const HeaderContainer = styled(SectionContainer)`
  border-radius: 0 0 4px 4px;
`;

export const HeaderBanner = styled.div`
  width: 100%;
  height: 400px;
  background: url("https://images.unsplash.com/photo-1551524190-fce2e51203e4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1000&h=500&fit=crop&ixid=eyJhcHBfaWQiOjF9");
  background-size: cover;
  background-position: center;
`;

export const HeaderBannerContainer = styled.div`
  position: relative;
`;

export const UserName = styled.span`
  position: absolute;
  bottom: 16px;
  left: 184px;
  color: #fff;
  font-size: 2rem;
  font-family: Roboto, sans-serif;
`;

export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0px 32px 0px 168px;
  height: 80px;
`;

export const LinkList = styled.ul`
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
`;

export const LinkItem = styled.li`
  line-height: 80px;
  padding: 0 16px;
`;

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: ${textColor.lighter};
  align-self: center;
  font-size: 20px;
  padding: 0;
`;

export const LinkWrapper = styled.div`
  text-decoration: none;
  font-family: Roboto, sans-serif;
  display: block;
  position: relative;
  font-weight: ${props => (props.active ? 500 : "")};
  color: ${props => (props.active ? `${textColor.dark}` : `${textColor.light}`)}
  &:after {
    content: "";
    height: 3px;
    width: 100%;
    background-color: ${props =>
      props.active ? `${color.activeIndicator}` : ""};
    position: absolute;
    bottom: 0;
    left: 0;
  }
  a {
    text-decoration: none;
    color: ${textColor.light};
    height: 100%;
    display: block;
  }
`;

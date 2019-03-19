import styled from "styled-components";

import { textColor, color } from "../Colors";

export const TopNavContainer = styled.div`
  height: 48px;
  background-color: #fff;
  border: 1px solid ${color.borderColor};
  padding: 16px 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
`;

export const TopNavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TopNavRight = styled.div``;

export const Logo = styled.div`
  height: 30px;
  width: 30px;
  background-color: grey;
  border-radius: 50%;
  margin-right: 16px;
`;

export const LogoWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  border-right: 1px solid ${color.borderColor};
  margin-right: 32px;
`;

export const Title = styled.div`
  color: ${textColor.dark};
  font-weight: 600;
  font-size: 20px;
  padding-right: 32px;
`;

export const SearchIconHolder = styled.div`
  color: ${textColor.lighter};
`;

export const Input = styled.input`
  border: 0;
  color: ${textColor.lighter};
  outline: none;
  font-weight: 600;
  padding: 8px;
  width: 300px;
`;

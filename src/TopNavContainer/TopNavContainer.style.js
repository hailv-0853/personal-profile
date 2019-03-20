import styled from "styled-components";

import { textColor, color } from "../Colors";

export const TopNavContainer = styled.div`
  height: 80px;
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
  box-sizing: border-box;
`;

export const TopNavLeft = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const TopNavRight = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

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

export const IconHolder = styled.div`
  color: ${textColor.lighter};
  cursor: pointer;
`;

export const UpDownIconHolder = styled(IconHolder)`
  position: absolute;
  top: -12px;
`;

export const UpDownButtonHolder = styled.div`
  position: relative;
`;

export const IconHolderRight = styled.button`
  color: ${textColor.lighter};
  border: 0;
  padding: 0;
  background-color: transparent;
  margin-right: 16px;
  font-size: 24px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Input = styled.input`
  border: 0;
  color: ${textColor.lighter};
  outline: none;
  font-weight: 600;
  padding: 8px;
  width: 300px;
`;

export const Avatar = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

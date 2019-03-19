import styled from "styled-components";
import { SectionContainer } from "../HeaderContainer/HeaderContainer.style";
import { textColor, color } from "../Colors";

export const AboutContainer = styled(SectionContainer)``;

export const Title = styled.div`
  height: 80px;
  display: flex;
  padding: 0 32px;
  align-items: center;
  font-weight: 600;
  font-size: 20px;
  color: ${textColor.dark};
  width: 100%;
  border-bottom: 1px solid ${color.borderColor};
  box-sizing: border-box;
`;

export const AboutContentWrapper = styled.div`
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledAboutItem = styled.div`
  display: flex;
  height: 80px;
  align-items: center;
  width: 48%;
  border-bottom: 1px solid ${color.borderColor};
  box-sizing: border-box;
  font-size: 14px;
  color: ${textColor.light};
  &:nth-child(odd) {
    margin-right: 2%;
  }
  &:last-child {
    border-bottom: none;
  }
  &:nth-last-child(2) {
    border-bottom: none;
  }
`;

export const SmallImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 16px;
`;

export const SmallIcon = styled.div`
  background-color: #eee;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.aboutIconColor};
  font-size: 24px;
`;
export const Description = styled.div``;

export const DescTitle = styled.div``;
export const DescSubtitle = styled.div`
  font-size: 12px;
  color: ${textColor.light}
  margin-top: 8px;
`;

export const Bold = styled.span`
  font-weight: 600;
  color: ${textColor.dark};
`;

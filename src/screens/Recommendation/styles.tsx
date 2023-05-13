import styled from 'styled-components';
import { Fonts } from 'constants/Fonts';

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: ${(props: any) => props?.theme?.bgColor};
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const RecommendationIntroText = styled.p`
  font-family: ${Fonts.regular};
  font-weight: bold;
  font-size: 27px;
  color: ${props => props.theme.fontColor};
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const RecommendationDescriptionText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 20px;
  line-height: 1.5;
  color: ${props => props.theme.fontColor};
  text-align: start;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ContentContainer = styled.div`
  width: 80%;
  background-color: ${(props: any) => props?.theme?.bgColor};
`;

export const ProfileImageContainer = styled.div`
  // border: 2px solid blue;
  @media (max-width: 768px) {
    height: 350px;
    align-items: center;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }
  border-radius: 50%;
`;

export const DesignationContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
`;

export const NameText = styled.text`
  font-family: ${Fonts.regular};
  font-size: 20px;
  font-weight: 200px;
  color: ${props => props.theme.fontColor};
  line-height: 1.9;
`;

export const DesignationText = styled.text`
  font-family: ${Fonts.regular};
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.fontColor};
  line-height: 1.9;
  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const CarousalContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
  }
  // border: 2px solid red;
`;

export const CarousalInnerContent = styled.div`
  width: 60%;
  margin-left: 20px;
  align-self:center;
  @media (max-width: 768px) {
    width 90%;
    // border: 2px solid green;
  }
`;

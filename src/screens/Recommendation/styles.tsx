import styled from 'styled-components';
import { Fonts } from 'constants/Fonts';
import Config from 'config';
import { Carousel } from 'react-responsive-carousel';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  align-self: center;
`;

export const ContentContainer = styled.div`
  display: flex;
  align-self: center;
  height: 100vh;
  margin-top: 40px;
  align-items: center;
  @media (max-width: ${Config.recommendation_max_width}) {
    height: 100%;
  }
  width: 98%;
`;

export const RecommendationIntroText = styled.p`
  font-family: ${Fonts.regular};
  font-weight: bold;
  font-size: 27px;
  color: ${props => props.theme.fontColor};
  @media (max-width: ${Config.recommendation_max_width}) {
    font-size: 18px;
  }
`;

export const RecommendationDescriptionText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 18px;
  line-height: 1.5;
  color: ${props => props.theme.fontColor};
  text-align: start;
  @media (max-width: ${Config.recommendation_max_width}) {
    font-size: 15px;
  }
`;

export const ProfileImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: ${Config.recommendation_max_width}) {
    width: 280px;
    height: 350px;
    align-items: center;
    margin-top: 20px;
    align-self: center;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: ${Config.recommendation_max_width}) {
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
  @media (max-width: ${Config.recommendation_max_width}) {
    font-size: 12px;
  }
`;

export const CarousalContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-evenly;
  @media (max-width: ${Config.recommendation_max_width}) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const CarousalInnerContent = styled.div`
  display: flex;
  flex-direction:column;
  width 40%;
  align-self:center;
  @media (max-width:  ${Config.recommendation_max_width}) {
    width 90%;
  }
`;

export const CarouselStyled = styled(Carousel)`
  width: 100%;
`;

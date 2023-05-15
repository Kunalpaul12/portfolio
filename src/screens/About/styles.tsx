import styled from 'styled-components';
import { Fonts } from 'constants/Fonts';
import Config from 'config';

export const Container = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const Button = styled.button`
  width: 158px;
  height: 39px;
  font-family: ${Fonts.regular};
  font-size: 18px;
  border-radius: 50px;
  background-color: ${props => props.theme.blue};
  border-color: ${props => props.theme.blue};
  color: ${props => props.theme.white};
  margin-top: 20px;
`;

export const AboutIntro = styled.p`
  font-family: ${Fonts.regular};
  font-size: 27px;
  color: ${props => props.theme.fontColor};
`;

export const AboutDescription = styled.p`
  font-family: ${Fonts.regular};
  font-size: 20px;
  line-height: 1.5;
  color: ${props => props.theme.fontColor};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  align-self: center;
  height: 100vh;
  @media (max-width: ${Config.about_max_width}) {
    flex-direction: column;
    height: 100%;
    margin-top: 20px;
  }
`;

export const IntroContainer = styled.div`
  width: 50%;
  @media (max-width: ${Config.about_max_width}) {
    width: 85%;
    padding-bottom: 20px;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: ${Config.about_max_width}) {
    width: 250px;
    height: 250px;
  }
`;

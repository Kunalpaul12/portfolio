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
  @media (max-width: 768px) {
    flex-direction: column;
    background-color: ${(props: any) => props?.theme?.bgColor};
    padding-bottom: 20px;
  }
`;

export const IntroContainer = styled.div`
  width: 50%;
  @media (max-width: 768px) {
    width: 85%;
  }
`;

export const ProfileImage = styled.img`
  width: 400px;
  height: 400px;
  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
    margin-top: 400px;
  }
`;

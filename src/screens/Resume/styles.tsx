import styled from 'styled-components';
import { Fonts } from 'constants/Fonts';

const Padding = '0px 50px 0px';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props: any) => props?.theme?.bgColor};
  height: 100vh;
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  height: 100px;
  border: ${props => `2px solid ${props.theme.bgColorHeaderBorder}`};
  background-color: ${props => props.theme.bgColorHeader};
  justify-content: space-between;
  align-items: center;
  padding: ${Padding};
`;

export const ExperienceText = styled.p`
  font-family: ${Fonts.regular};
  font-weight: bold;
  font-size: 20px;
  color: ${props => props.theme.fontColor};
`;

export const ExperienceYearsText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 18px;
  color: ${props => props.theme.fontColor};
`;

export const EducationAndExperienceContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: ${Padding};
  justify-content: space-between;
`;

export const UnderLineContainer = styled.div`
  border-bottom: ${props => `2px  solid ${props.theme.blue}`};
  width: 120px;
`;

export const UnderLineRoundContainer = styled.div`
  border: ${props => `2px  solid ${props.theme.blue}`};
  border-radius: 20px;
`;

export const ExperienceYearText = styled.div`
  font-family: ${Fonts.regular};
  font-size: 15px;
  color: ${props => props.theme.fontColor};
  padding: 10px 10px 10px;
`;

export const YearIndictorText = styled.div`
  font-family: ${Fonts.regular};
  font-size: 15px;
  color: ${props => props.theme.grey};
  padding: 0px 10px 0px;
`;

export const ExperienceYearContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const ExperienceEductionDetailsContainer = styled.div`
  border-bottom: ${props => `1px  solid ${props.theme.grey}`};
  border-left: ${props => `1px  solid ${props.theme.grey}`};
`;

export const ExperiencePositionText = styled.p`
  font-family: ${Fonts.regular};
  font-weight: bold;
  font-size: 15px;
  color: ${props => props.theme.fontColor};
  padding-left: 10px;
`;

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
`;

export const ExperiencePositionDescriptionText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 15px;
  color: ${props => props.theme.fontColor};
  padding-left: 10px;
`;

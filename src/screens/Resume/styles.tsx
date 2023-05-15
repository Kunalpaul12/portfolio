import styled from 'styled-components';
import { Fonts } from 'constants/Fonts';

const Padding = '0px 50px 0px';

interface UnderLineContainerProps {
  width?: string | undefined;
}

interface SkilledWidthContainer {
  width: string;
}

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${(props: any) => props?.theme?.bgColor};
  height: 100%;
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
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const UnderLineContainer = styled.div<UnderLineContainerProps>`
  border-bottom: ${props => `2px  solid ${props.theme.blue}`};
  width: ${(props: any) => props.width || '120px'};
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
  margin-top: 40px;
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

export const ExperienceDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const EducationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-left: 150px;
  @media (max-width: 768px) {
    padding-left: 0px;
    margin-top: 20px;
  }
`;

export const ExperiencePositionDescriptionText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 15px;
  color: ${props => props.theme.fontColor};
  padding-left: 10px;
`;

export const DownloadText = styled.p`
  font-family: ${Fonts.regular};
  font-weight: 500;
  font-size: 14px;
  font-style: italic;
  color: ${props => props.theme.fontColor};
  padding-left: 10px;
`;

export const FrameworkText = styled.p`
  font-family: ${Fonts.regular};
  font-size: 10px;
  font-style: italic;
  color: ${props => props.theme.fontColor};
  text-align: center;
  padding-right: min(50px, 15px);
  padding-left: min(50px, 15px);
`;

export const UnderLineContainerFramework = styled.div`
  border: ${props => `2px  solid ${props.theme.blue}`};
  border-radius: 20px;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
`;

export const FrameworkContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const SkilledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px 40px;
  padding: ${Padding};
`;

export const SkillsDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
  border-bottom: ${props => `1px  solid ${props.theme.grey}`};
  padding-bottom: 10px;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SkilledWidthContainer = styled.div<SkilledWidthContainer>`
  width: ${(props: any) => props.width};
`;

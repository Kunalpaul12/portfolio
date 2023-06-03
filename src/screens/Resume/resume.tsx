import React from 'react';
import {
  Container,
  ExperienceContainer,
  ExperienceText,
  ExperienceYearsText,
  EducationAndExperienceContainer,
  UnderLineContainer,
  UnderLineRoundContainer,
  ExperienceYearText,
  YearIndictorText,
  ExperienceYearContainer,
  ExperienceEductionDetailsContainer,
  ExperiencePositionText,
  EducationContainer,
  ExperiencePositionDescriptionText,
  DownloadText,
  UnderLineContainerFramework,
  FrameworkText,
  FrameworkContainer,
  ExperienceDetailContainer,
  SkilledContainer,
  SkillsDetailsContainer,
  SkilledWidthContainer,
} from './styles';

import DATA, { getYears } from './data';

const Resume = () => {
  const ExpEdu = (info: any) => {
    const FrameWork = (data: string) => {
      return (
        <UnderLineContainerFramework>
          <FrameworkText>{data}</FrameworkText>
        </UnderLineContainerFramework>
      );
    };

    const { date, company, designation, description, download, framework } =
      info;
    return (
      <div>
        <ExperienceYearContainer>
          <UnderLineRoundContainer>
            <ExperienceYearText>{date}</ExperienceYearText>
          </UnderLineRoundContainer>
          <YearIndictorText>{company}</YearIndictorText>
        </ExperienceYearContainer>
        <ExperienceEductionDetailsContainer>
          <ExperiencePositionText>{designation}</ExperiencePositionText>
          {description && (
            <ExperiencePositionDescriptionText>
              {description}
            </ExperiencePositionDescriptionText>
          )}
          {framework && (
            <FrameworkContainer>
              {framework.map((e: string) => FrameWork(e))}
            </FrameworkContainer>
          )}
          {download && <DownloadText>{download}</DownloadText>}
        </ExperienceEductionDetailsContainer>
      </div>
    );
  };

  const Skills = (info: any) => {
    const Level = (level: string) => {
      return (
        <UnderLineContainerFramework>
          <FrameworkText>{level}</FrameworkText>
        </UnderLineContainerFramework>
      );
    };

    const { name, level, experience } = info;
    return (
      <SkillsDetailsContainer>
        <SkilledWidthContainer width='150px'>
          <ExperiencePositionText>{name}</ExperiencePositionText>
        </SkilledWidthContainer>
        <SkilledWidthContainer width='150px'>
          {Level(level)}
        </SkilledWidthContainer>
        <SkilledWidthContainer width='150px'>
          <YearIndictorText>{experience}</YearIndictorText>
        </SkilledWidthContainer>
      </SkillsDetailsContainer>
    );
  };

  return (
    <Container>
      <ExperienceContainer>
        <div>
          <ExperienceText>Resume</ExperienceText>
        </div>
        <div>
          <ExperienceYearsText>{getYears('2016-05-01')}</ExperienceYearsText>
        </div>
      </ExperienceContainer>
      <EducationAndExperienceContainer>
        <ExperienceDetailContainer>
          <div>
            <UnderLineContainer>
              <ExperienceText>Experience</ExperienceText>
            </UnderLineContainer>
            {DATA.experience.map(e => ExpEdu(e))}
          </div>
        </ExperienceDetailContainer>
        <div>
          <EducationContainer>
            <UnderLineContainer>
              <ExperienceText>Education</ExperienceText>
            </UnderLineContainer>
            {DATA.education.map(e => ExpEdu(e))}
          </EducationContainer>
        </div>
      </EducationAndExperienceContainer>
      <SkilledContainer>
        <ExperienceDetailContainer>
          <div>
            <UnderLineContainer width='60px'>
              <ExperienceText>Skills</ExperienceText>
            </UnderLineContainer>
            {DATA.skills.map(e => Skills(e))}
          </div>
        </ExperienceDetailContainer>
      </SkilledContainer>
    </Container>
  );
};

export default Resume;

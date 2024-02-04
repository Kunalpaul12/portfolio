import { memo, useState } from 'react';
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
  ReadMoreText,
  FlexContainer,
  JobRolesText,
  ArrowIcon,
  ShowMoreIcon,
  ShowLessIcon,
  ReadMoreUIContainer,
  CompanyContainer,
  CompanyText,
} from './styles';
import ViewModal from './viewModal';
import { getYears } from 'utils';

import { useTheme } from 'styled-components';
import {
  experienceDataProps,
  educationDataProps,
  skillsDataProps,
} from './types';

const Resume = (): JSX.Element => {
  const theme: any = useTheme();
  const { experienceData, educationData, skillsData } = ViewModal();

  const Experience = (info: experienceDataProps, index: number) => {
    const [showReadMore, setShowReadMore] = useState<boolean>(false);
    const {
      date,
      company,
      designation,
      description,
      download,
      framework,
      jobRoles,
      companyLogo,
    } = info;

    const FrameWork = (data: string, index: number) => {
      return (
        <UnderLineContainerFramework key={String(index)}>
          <FrameworkText>{data}</FrameworkText>
        </UnderLineContainerFramework>
      );
    };

    const readMoreOnClick = () => {
      setShowReadMore(!showReadMore);
    };

    const ReadMoreUI = memo((): JSX.Element => {
      const JobRolesUI = (role: string, index: number): JSX.Element => {
        return (
          <FlexContainer key={String(index)}>
            <ArrowIcon />
            <JobRolesText>{role}</JobRolesText>
          </FlexContainer>
        );
      };

      return (
        <>
          <ReadMoreUIContainer>
            <ReadMoreText onClick={readMoreOnClick}>
              {showReadMore ? 'Know less' : 'Know more'}
            </ReadMoreText>
            {showReadMore ? <ShowLessIcon /> : <ShowMoreIcon />}
          </ReadMoreUIContainer>

          {showReadMore ? (
            jobRoles.map((e, index) => JobRolesUI(e, index))
          ) : (
            <></>
          )}
        </>
      );
    });

    return (
      <div key={String(index)}>
        <CompanyContainer>
          <img
            src={companyLogo}
            width='50px'
            height='50px'
            style={{ paddingLeft: 10 }}
          />

          <CompanyText>{company}</CompanyText>
        </CompanyContainer>
        <UnderLineRoundContainer>
          <ExperienceYearText>{date}</ExperienceYearText>
        </UnderLineRoundContainer>
        <ExperienceEductionDetailsContainer>
          <ExperiencePositionText>{designation}</ExperiencePositionText>
          <ExperiencePositionDescriptionText>
            {description}
          </ExperiencePositionDescriptionText>
          <ReadMoreUI />
          <FrameworkContainer>
            {framework.map((e: string, index: number) => FrameWork(e, index))}
          </FrameworkContainer>
          <DownloadText>{download}</DownloadText>
        </ExperienceEductionDetailsContainer>
      </div>
    );
  };

  const Education = (info: educationDataProps, index: number): JSX.Element => {
    const { date, company, designation } = info;
    return (
      <div key={String(index)}>
        <ExperienceYearContainer>
          <UnderLineRoundContainer>
            <ExperienceYearText>{date}</ExperienceYearText>
          </UnderLineRoundContainer>
          <YearIndictorText>{company}</YearIndictorText>
        </ExperienceYearContainer>
        <ExperienceEductionDetailsContainer>
          <ExperiencePositionText>{designation}</ExperiencePositionText>
        </ExperienceEductionDetailsContainer>
      </div>
    );
  };

  const Skills = (info: skillsDataProps, index: number): JSX.Element => {
    const Level = (level: string) => {
      return (
        <UnderLineContainerFramework>
          <FrameworkText>{level}</FrameworkText>
        </UnderLineContainerFramework>
      );
    };

    const { name, level, experience } = info;
    return (
      <SkillsDetailsContainer key={String(index)}>
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
            {experienceData.map((e: experienceDataProps, index: number) =>
              Experience(e, index),
            )}
          </div>
        </ExperienceDetailContainer>
        <div>
          <EducationContainer>
            <UnderLineContainer>
              <ExperienceText>Education</ExperienceText>
            </UnderLineContainer>
            {educationData.map((e: educationDataProps, index: number) =>
              Education(e, index),
            )}
          </EducationContainer>
        </div>
      </EducationAndExperienceContainer>
      <SkilledContainer>
        <ExperienceDetailContainer>
          <div>
            <UnderLineContainer width='60px'>
              <ExperienceText>Skills</ExperienceText>
            </UnderLineContainer>
            {skillsData.map((e: skillsDataProps, index: number) =>
              Skills(e, index),
            )}
          </div>
        </ExperienceDetailContainer>
      </SkilledContainer>
    </Container>
  );
};

export default Resume;

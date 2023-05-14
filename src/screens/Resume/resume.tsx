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
} from './styles';

const Resume = () => {
  const ExpEdu = (
    year: string,
    name: string,
    position: string,
    positionDes: string,
  ) => {
    return (
      <div>
        <ExperienceYearContainer>
          <UnderLineRoundContainer>
            <ExperienceYearText>{year}</ExperienceYearText>
          </UnderLineRoundContainer>
          <YearIndictorText>{name}</YearIndictorText>
        </ExperienceYearContainer>
        <ExperienceEductionDetailsContainer>
          <ExperiencePositionText>{position}</ExperiencePositionText>
          <ExperiencePositionDescriptionText>
            {positionDes}
          </ExperiencePositionDescriptionText>
        </ExperienceEductionDetailsContainer>
      </div>
    );
  };

  return (
    <Container>
      <ExperienceContainer>
        <div>
          <ExperienceText>Resume</ExperienceText>
        </div>
        <div>
          <ExperienceYearsText>7+ Yrs</ExperienceYearsText>
        </div>
      </ExperienceContainer>
      <EducationAndExperienceContainer>
        <EducationContainer>
          <div>
            <UnderLineContainer>
              <ExperienceText>Experience</ExperienceText>
            </UnderLineContainer>
            {ExpEdu(
              '2022 - Present',
              'Simpl',
              'Staff Engineer',
              'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
            )}
            {ExpEdu(
              '2022 - Present',
              'Simpl',
              'Staff Engineer',
              'Duis posuere, quam non imperdiet egestas, eros enim mattis mauris in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.',
            )}
          </div>
        </EducationContainer>
        <div>
          <UnderLineContainer>
            <ExperienceText>Education</ExperienceText>
          </UnderLineContainer>
        </div>
      </EducationAndExperienceContainer>
    </Container>
  );
};

export default Resume;

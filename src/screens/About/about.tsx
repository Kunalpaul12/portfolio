import React from 'react';
import { Container } from './styles';
import ProfilePic from '../../assets/profilePic.png';
import { useTranslation } from 'react-i18next';
import {
  AboutIntro,
  AboutDescription,
  Button,
  ContentContainer,
  IntroContainer,
  ProfileImage,
} from './styles';

interface Props {}

const About: React.FC<Props> = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <ContentContainer>
        <ProfileImage src={ProfilePic} />
        <IntroContainer>
          <AboutIntro>{t('about_me_intro', { name: t('name') })}</AboutIntro>
          <AboutDescription>{t('about_me_description')}</AboutDescription>
          <Button>Resume</Button>
        </IntroContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;

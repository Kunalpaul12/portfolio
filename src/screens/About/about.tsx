import React from 'react';
import { Container } from './styles';
import ProfilePic from '../../assets/profilePic.png';
import { useTranslation } from 'react-i18next';
import Resume from '../../documents/resume.pdf';
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

  const DownloadResume = () => {
    return (
      <a href={Resume} download={t('resume_name')} target='_blank'>
        <Button>{t('resume_button_name')}</Button>
      </a>
    );
  };

  return (
    <Container>
      <ContentContainer>
        <ProfileImage src={ProfilePic} />
        <IntroContainer>
          <AboutIntro>{t('about_me_intro', { name: t('name') })}</AboutIntro>
          <AboutDescription>{t('about_me_description')}</AboutDescription>
          {DownloadResume()}
        </IntroContainer>
      </ContentContainer>
    </Container>
  );
};

export default About;

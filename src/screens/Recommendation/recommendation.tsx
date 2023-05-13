import React from 'react';
import { useTranslation } from 'react-i18next';
import { Container } from './styles';
import {
  RecommendationDescriptionText,
  ContentContainer,
  ProfileImage,
  CarousalContent,
  CarousalInnerContent,
  ProfileImageContainer,
  DesignationText,
  DesignationContainer,
  NameText,
  RecommendationIntroText,
} from './styles';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {
  Hiren,
  Rohan,
  Sergio,
  Sharad,
  Indrajit,
} from '../../assets/recommendation';

interface Props {}

const Recommendation: React.FC<Props> = () => {
  const { t } = useTranslation();

  const CarouselItems = (
    pic: any,
    headline: string,
    des: string,
    designation: string,
    name: string,
  ) => {
    return (
      <CarousalContent>
        <ProfileImageContainer>
          <ProfileImage src={pic} />
          <DesignationContainer>
            <NameText>{name}</NameText>
            <DesignationText>{designation}</DesignationText>
          </DesignationContainer>
        </ProfileImageContainer>
        <CarousalInnerContent>
          <RecommendationIntroText>{headline}</RecommendationIntroText>
          <RecommendationDescriptionText>{des}</RecommendationDescriptionText>
        </CarousalInnerContent>
      </CarousalContent>
    );
  };

  return (
    <Container>
      <ContentContainer>
        <Carousel infiniteLoop autoPlay>
          {CarouselItems(
            Sergio,
            'Go getter attitude',
            t('about_me_description'),
            'CTO @ EverUp',
            'Sergio',
          )}
          {CarouselItems(
            Hiren,
            'He is a ROCK STAR',
            t('about_me_description'),
            'CEO @ Indigital Technologies',
            'Hiren',
          )}
          {CarouselItems(
            Sharad,
            'Do more with little',
            t('about_me_description'),
            'Co-Founder, CEO @ Valuefy',
            'Sharad',
          )}
          {CarouselItems(
            Rohan,
            'Sharp & Skilled decision maker',
            t('about_me_description'),
            'VP @ Indigital Technologies',
            'Rohan',
          )}
          {CarouselItems(
            Indrajit,
            'Must have asset in your arsenal',
            t('about_me_description'),
            'Senior Engineering Manager @ Simpl',
            'Indrajit',
          )}
        </Carousel>
      </ContentContainer>
    </Container>
  );
};

export default Recommendation;

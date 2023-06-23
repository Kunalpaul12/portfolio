import React from 'react';
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
  CarouselStyled,
} from './styles';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import DATA from './data';
import { useTranslation } from 'react-i18next';

interface Props {}

const Recommendation: React.FC<Props> = () => {
  const { t } = useTranslation();
  const RecommendationData = DATA(t);
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
        <CarouselStyled infiniteLoop autoPlay>
          {RecommendationData.carouselData.map(e =>
            CarouselItems(e.pic, e.headline, e.about_me, e.designation, e.name),
          )}
        </CarouselStyled>
      </ContentContainer>
    </Container>
  );
};

export default Recommendation;

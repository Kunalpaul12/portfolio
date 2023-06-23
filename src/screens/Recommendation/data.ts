import {
  Hiren,
  Rohan,
  Sergio,
  Sharad,
  Indrajit,
} from '../../assets/recommendation';

const DATA = (t: any) => {
  return {
    carouselData: [
      {
        name: 'Sergio',
        designation: 'CTO @ EverUp',
        about_me: t('sergio_recommendation', { name: t('name') }),
        headline: t('sergio_recommendation_headline'),
        pic: Sergio,
      },
      {
        name: 'Hiren',
        designation: 'CEO @ Indigital Technologies',
        about_me: t('hiren_recommendation', { name: t('name') }),
        headline: t('hiren_recommendation_headline'),
        pic: Hiren,
      },
      {
        name: 'Sharad',
        designation: 'Co-Founder, CEO @ Valuefy',
        about_me: t('sharad_recommendation', { name: t('name') }),
        headline: t('sharad_recommendation_headline'),
        pic: Sharad,
      },
      {
        name: 'Rohan',
        designation: 'VP @ Indigital Technologies',
        about_me: t('rohan_recommendation', { name: t('name') }),
        headline: t('rohan_recommendation_headline'),
        pic: Rohan,
      },
      {
        name: 'Indrajit',
        designation: 'Senior Engineering Manager @ Simpl',
        about_me: t('indrajit_recommendation', { name: t('name') }),
        headline: t('indrajit_recommendation_headline'),
        pic: Indrajit,
      },
    ],
  };
};

export default DATA;

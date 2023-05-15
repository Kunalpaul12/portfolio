export const getYears = (date: any) => {
  const startDate: any = new Date(date);
  const newDate: any = new Date();
  const diffDate: any = new Date(newDate - startDate);
  return (
    diffDate.toISOString().slice(0, 4) -
    1970 +
    '.' +
    diffDate.getMonth() +
    ' Yrs'
  );
};

const DATA = {
  experience: [
    {
      date: 'Oct 2022 - Present',
      company: 'Simpl',
      designation: 'Staff Engineer',
      description:
        'Simpl - It offers you a spending limit using which, you can make quick payments online without the hassle of entering OTPs or passwords.',
      download: 'Downloads - Android - 5+ millions | IOS - 2+ millions',
      framework: ['Android', 'IOS', 'React Native'],
    },
    {
      date: 'Nov 2021 - Oct 2022',
      company: 'Everup (UK)',
      designation: 'Senior Software Developer',
      description:
        'Everup - UK’s first prize-linked money app, combining gaming and saving to create a new customer experience',
      download: 'Downloads - Android - 10+ Thousands | IOS - 20+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
    },
    {
      date: 'Feb 2020 - Nov 2021',
      company: 'Valuefy',
      designation: 'Senior Software Developer',
      description:
        'Finzipp - Invest in direct mutual funds across 32 fund houses',
      download: 'Downloads - Android - 50+ Thousands| IOS - 10+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
    },
    {
      date: 'May 2019 - Jan 2020',
      company: 'Voice of Gamers',
      designation: 'Software Developer',
      description:
        'Firstblood - Create or join PUBG tournaments with real players online & Win Cashback money & rewards anytime, anywhere!',
      download: 'Downloads - Android - 5+ millions | IOS - 2+ millions',
      framework: ['Android'],
    },
    {
      date: 'May 2016 - May 2019',
      company: 'Indigital Technologies',
      designation: 'Junior Software Developer',
      description:
        'Kanopi Jello - A B2B app to collect analytics data from IOT device',
      download: 'Downloads - Android - 1+ Thousands| IOS - 1+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
    },
  ],
  education: [
    {
      date: 'May 2011 - 2015',
      company: 'Mumbai University',
      designation: 'B.E(EXTC)',
    },
    {
      date: 'Feb 2010 - 2011',
      company: 'Mumbai University',
      designation: 'HSC',
    },
    {
      date: 'April 2009',
      company: 'Mumbai University',
      designation: 'SSC',
    },
  ],
  skills: [
    {
      name: 'JavaScript',
      level: 'Expert',
      experience: getYears('2016-05-01'),
    },
    {
      name: 'TypeScript',
      level: 'Intermediate',
      experience: getYears('2019-05-01'),
    },
    {
      name: 'React',
      level: 'Expert',
      experience: getYears('2016-05-01'),
    },
    {
      name: 'React-Native',
      level: 'Expert',
      experience: getYears('2016-05-01'),
    },
    {
      name: 'Android',
      level: 'Expert',
      experience: getYears('2018-05-01'),
    },
    {
      name: 'IOS',
      level: 'Expert',
      experience: getYears('2018-05-01'),
    },
  ],
};

export default DATA;

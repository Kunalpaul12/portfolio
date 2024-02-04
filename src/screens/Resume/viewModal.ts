import { useState } from 'react';
import DATA from './data';
import { experienceDataProps } from './types';

const ViewModal = () => {
  const [experienceData, setExperienceData] = useState<experienceDataProps[]>(
    DATA.experience,
  );
  return {
    experienceData,
    educationData: DATA.education,
    skillsData: DATA.skills,
    setExperienceData,
  };
};

export default ViewModal;

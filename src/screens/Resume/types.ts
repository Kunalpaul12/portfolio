export interface ResumeDataProps {
  experience: experienceDataProps[];
  education: educationDataProps[];
  skills: skillsDataProps[];
}

export interface experienceDataProps {
  date: string;
  company: string;
  designation: string;
  description: string;
  download: string;
  framework: string[];
  jobRoles: string[];
  companyLogo: string;
}

export interface educationDataProps {
  date: string;
  company: string;
  designation: string;
}

export interface skillsDataProps {
  name: string;
  level: string;
  experience: string;
}

import { getYears } from 'utils';
import { ResumeDataProps } from './types';
import ChargePointLogo from '../../assets/company/chargepoint_logo.png';
import SimplLogo from '../../assets/company/simpl_logo.png';
import EverUpLogo from '../../assets/company/everup_logo.png';
import ValuefyLogo from '../../assets/company/valuefy_logo.jpg';
import VoiceOfGammerLogo from '../../assets/company/vog_logo.png';
import IndigitalLogo from '../../assets/company/ingigital_logo.png';

const DATA: ResumeDataProps = {
  experience: [
    {
      date: 'July 2023 - Present',
      company: 'ChargePoint',
      designation: 'Staff Engineer',
      description:
        'Installer - It enables certified electricians to complete the installation and setup process for homeowners and commercial station owners, for ChargePoint Home Flex (CPH50), CP6000 AC and Express Plus DC EVSE charging stations.',
      download: 'Downloads - Android - 5+ Thousands | IOS - 20+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
      jobRoles: [
        'Developed and integrated a customized security module (natively) by creating a bridge between JavaScript code and native code written in Java (for Android) and Objective-C (for iOS).',
        'Implemented a security module for securing Bluetooth communication against unauthorized access and data breaches. Developed features such as device discovery, pairing and real-time data synchronization with low power consumption and high reliability.',
        'Optimizing Python code for embedded platforms considering resource constraints such as memory, power and processing capabilities. Collaborating with firmware developers to integrate Python components seamlessly into the overall embedded system architecture.',
        "Created a BFF (Backend for frontend) using Go's libraries for scalability and optimization.",
      ],
      companyLogo: ChargePointLogo,
    },
    {
      date: 'Oct 2022 - July 2023',
      company: 'Simpl',
      designation: 'Staff Engineer',
      description:
        'Simpl - It offers you a spending limit using which, you can make quick payments online without the hassle of entering OTPs or passwords.',
      download: 'Downloads - Android - 5+ millions | IOS - 2+ millions',
      framework: ['Android', 'IOS', 'React Native'],
      jobRoles: [
        'Integrated permission modules to collect information about sms | location | contact |app installed for the data engineering team for better findings on user spending habits and cash flow.',
        'Analyzing and POC of the UPI module with ICICI bank SDKs for quick UPI payment along with the E-Mandate for recurring bill payments.',
        'Added sim binding in the onboarding & checkout flow for minimizing the account takeover via OTP verification.',
        'Integrated KYC module to help rule engine team for better decisions on credit upgrade.',
        'Designing & integrating a one-tap merchant linking & delinking for seamless payment of goods and products.',
      ],
      companyLogo: SimplLogo,
    },
    {
      date: 'Nov 2021 - Oct 2022',
      company: 'Everup (UK)',
      designation: 'Senior Software Developer',
      description:
        'Everup - UK’s first prize-linked money app, combining gaming and saving to create a new customer experience',
      download: 'Downloads - Android - 10+ Thousands | IOS - 20+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
      jobRoles: [
        'Integrated existing cashback flow with new games and created a new reward mechanism that can reward the user in Ethereum & Bitcoins. Which can be used via a debit card.',
        'Added a cashback coupon system as a reward mechanism for users. That can be used on big merchants such as Amazon, Ikea and many more.',
      ],
      companyLogo: EverUpLogo,
    },
    {
      date: 'Feb 2020 - Nov 2021',
      company: 'Valuefy',
      designation: 'Senior Software Developer',
      description:
        'Finzipp - Invest in direct mutual funds across 32 fund houses',
      download: 'Downloads - Android - 50+ Thousands| IOS - 10+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
      jobRoles: [
        'Design and Integrated payment flow via Razorpay, Billdesk and other SDKs.',
        'Making SDKs & .aar build files for integrating with other apps.',
      ],
      companyLogo: ValuefyLogo,
    },
    {
      date: 'May 2019 - Jan 2020',
      company: 'Voice of Gamers',
      designation: 'Software Developer',
      description:
        'Firstblood - Create or join PUBG tournaments with real players online & Win Cashback money & rewards anytime, anywhere!',
      download: 'Downloads - Android - 5+ millions | IOS - 2+ millions',
      framework: ['Android'],
      jobRoles: [
        'Work with an established team of developers and interact with product managers, marketing teams and designers.',
        'Knowledge of modern web development frameworks and tools.',
        'Integrating cryptocurrency as a payment system.',
      ],
      companyLogo: VoiceOfGammerLogo,
    },
    {
      date: 'May 2016 - May 2019',
      company: 'Indigital Technologies',
      designation: 'Junior Software Developer',
      description:
        'Kanopi Jello - A B2B app to collect analytics data from IOT device',
      download: 'Downloads - Android - 1+ Thousands| IOS - 1+ Thousands',
      framework: ['Android', 'IOS', 'React Native'],
      jobRoles: [
        'Coding, Compiling, Unit testing, integration and deployment of the developed software.',
        'Sharing knowledge of tools and techniques with the wider team, both developers and non-developers.',
      ],
      companyLogo: IndigitalLogo,
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

import githubImg from './assets/images/github.svg';
import gmailImg from './assets/images/google.svg';
import instagramImg from './assets/images/instagram.svg';
import linkedinImg from './assets/images/linkedin.svg';
import twitterImg from './assets/images/twitter.svg';

// About Page
const greeting = {
  title: 'Karim Chammout',
  ctaText: 'Follow Me On GitHub',
  subTitle:
    "I'm a Front-end developer who's writing code and moving pixels in the WWW.😎 I'm looking for learning new things and new experiences in this vast world of creativity.",
  resumeLink: 'https://drive.google.com/file/d/16TK1GMZjrEca2DaRFMmZ0yjx6vB1CeWd/view',
  portfolio_repository: 'https://github.com/Karim-Chammout',
};

const socialMediaLinks = [
  {
    name: 'Github',
    link: 'https://github.com/Karim-Chammout',
    imgSrc: githubImg,
    backgroundColor: '#181717',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/karim-chammout/',
    imgSrc: linkedinImg,
    backgroundColor: '#0077B5',
  },
  {
    name: 'Gmail',
    link: 'mailto:chammout.karim@gmail.com',
    imgSrc: gmailImg,
    backgroundColor: '#D14836',
  },
  {
    name: 'Twitter',
    link: 'https://twitter.com/karim_chammout',
    imgSrc: twitterImg,
    backgroundColor: '#1DA1F2',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/karim_chammout/',
    imgSrc: instagramImg,
    backgroundColor: '#E4405F',
  },
];

const skills = {
  data: [
    {
      title: 'Front-end Development',
      fileName: 'DataScienceImg',
      skills: [
        '⚡ Building responsive website front end using modern tools like React',
        '⚡ Creating and optimizing interactive, user-friendly, and feature-rich websites',
      ],
      softwareSkills: [
        {
          skillName: 'HTML5',
        },
        {
          skillName: 'CSS3',
        },
        {
          skillName: 'Sass',
        },
        {
          skillName: 'JavaScript',
        },
        {
          skillName: 'ReactJS',
        },
        {
          skillName: 'NodeJS',
        },
        {
          skillName: 'NPM',
        },
        {
          skillName: 'Yarn',
        },
      ],
    },
    {
      title: 'Wireframing & Design',
      fileName: 'FullStackImg',
      skills: [
        "⚡ Understanding the client's needs to come up with the best design wanted",
        '⚡ Designing fast load time and lag-free interaction website is the highest priority',
      ],
      softwareSkills: [
        {
          skillName: 'Tensorflow',
        },
        {
          skillName: 'Keras',
        },
        {
          skillName: 'PyTorch',
        },
        {
          skillName: 'Python',
        },
      ],
    },
  ],
};

// Projects Page
const projectsData = {
  title: 'Projects',
  description:
    'I always strive to include new and innovative interactions to enhance the user experience. My projects makes use of vast variety of latest technology tools.',
  ctaText: 'More Projects',
  projectsList: [
    {
      id: 1,
      name: 'The fact of the day',
      url: 'https://fact-of-the-day.karim-dev.com',
      description: 'A web application where we share a new fact everyday to learn something new',
      tools: 'HTML - CSS - JS - TS - @emotion/react - MUI - React - Firebase',
    },
    {
      id: 2,
      name: 'OxygenDevs',
      url: 'https://github.com/Karim-Chammout/Oxygen-Devs',
      description: 'Web Design Agency',
      tools: 'HTML - CSS - BootStrap',
    },
    {
      id: 3,
      name: 'Google Assistant Bootstrap',
      url: 'https://github.com/Karim-Chammout/Google-Assistant-Bootstrap',
      description: 'Google Assistant Design with Bootstrap',
      tools: 'HTML - CSS - BootStrap',
    },
    {
      id: 4,
      name: 'Portfolio Design',
      url: 'https://github.com/Karim-Chammout/Temporary-Portfolio',
      description: 'Designing a template for a portfolio',
      tools: 'HTML - CSS - BootStrap',
    },
    {
      id: 5,
      name: 'React TV Show',
      url: 'https://github.com/Karim-Chammout/react-tvshow-project',
      description: 'TV Shows Application To search for your favorite shows',
      tools: 'HTML - CSS - BootStrap - React - React-router-dom',
    },
    {
      id: 6,
      name: 'React Tesla clone',
      url: 'https://github.com/Karim-Chammout/tesla-clone',
      description: 'Cloning the original Tesla website using React.js',
      tools: 'HTML - CSS - Styled-components - React - React-redux - React-reveal',
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    alt_img_name: 'Karim Chammout',
    subHeader: "Say Hello, I won't bite... 😁",
    description:
      'I am available on almost every social media. You can fire me an email and I will reply within 24 hours.',
    ctaText: 'See My Resume',
  },
  addressSection: {
    title: 'Address',
    subtitle: 'Turkey - Istanbul',
    ctaText: 'Visit on Google Maps',
    location_map_link: 'https://goo.gl/maps/Nd8VGEBZYKLXc4oB6',
  },
  phoneSection: {
    title: 'Phone Number',
    phone_num: '+90 536 812 08 35',
  },
};

export { greeting, socialMediaLinks, skills, projectsData, contactPageData };

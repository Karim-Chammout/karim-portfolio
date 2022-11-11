import factOfTheDay from './assets/images/didYouKnow.jpg';
import githubImg from './assets/images/github.svg';
import gmailImg from './assets/images/google.svg';
import googleAssistant from './assets/images/googleAssistantlogo.svg';
import instagramImg from './assets/images/instagram.svg';
import linkedinImg from './assets/images/linkedin.svg';
import oxygenDevs from './assets/images/oxygenDevs.png';
import portfolioImg from './assets/images/portfolioImg.png';
import teslaColne from './assets/images/teslaClone.png';
import tvShows from './assets/images/tvShows.png';
import twitterImg from './assets/images/twitter.svg';

// Blog Page
const blog = {
  title: 'Karim blog',
  description: `I write articles related to web development. You can find here things about JavaScript, TypeScript, React, Tips and Tricks and web technologies in general.`,
  githubLink: 'https://github.com/Karim-Chammout',
};

// About Page
const about = {
  title: 'Karim Chammout',
  ctaText: 'Follow Me On GitHub',
  subTitle:
    "I'm a Front-end developer who's writing code and moving pixels in the WWW.😎 I'm looking for learning new things and new experiences in this vast world of creativity.",
  githubLink: 'https://github.com/Karim-Chammout',
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

const skills = [
  {
    title: 'Front-end Development',
    skillName: 'Front-end',
    skillsList: [
      '⚡ Building responsive website front end using modern tools like React',
      '⚡ Creating and optimizing interactive, user-friendly, and feature-rich websites',
    ],
  },
  {
    title: 'Wireframing & Design',
    skillName: 'Designing',
    skillsList: [
      "⚡ Understanding the client's needs to come up with the best design wanted",
      '⚡ Designing fast load time and lag-free interaction website is the highest priority',
    ],
  },
];

// Projects Page
const projectsData = {
  title: 'Projects',
  description:
    'I always strive to include new and innovative interactions to enhance the user experience. My projects makes use of vast variety of latest technology tools.',
  ctaText: 'More Projects',
  githubLink: 'https://github.com/Karim-Chammout',
  projectsList: [
    {
      id: 1,
      name: 'The fact of the day',
      imgUrl: factOfTheDay,
      url: 'https://fact-of-the-day.karim-dev.com',
      description: 'A web application where we share a new fact everyday to learn something new',
      tools: 'HTML - CSS - JS - TS - @emotion/react - MUI - React - Firebase',
    },
    {
      id: 2,
      name: 'OxygenDevs',
      imgUrl: oxygenDevs,
      url: 'https://oxygendevs.netlify.app',
      description: 'Web Design Agency',
      tools: 'HTML - CSS - BootStrap',
    },
    {
      id: 3,
      name: 'Google Assistant Bootstrap',
      imgUrl: googleAssistant,
      url: 'https://google-assistant-bootstrap-karim-chammout.vercel.app/',
      description: 'Google Assistant Design with Bootstrap',
      tools: 'HTML - CSS - BootStrap',
    },
    {
      id: 4,
      name: 'Portfolio Design',
      imgUrl: portfolioImg,
      url: 'https://karim-chammout.github.io/Temporary-Portfolio',
      description: 'Designing a template for a portfolio',
      tools: 'HTML - CSS - BootStrap',
    },
    {
      id: 5,
      name: 'React TV Show',
      imgUrl: tvShows,
      url: 'https://react-tvshow-project.stackblitz.io',
      description: 'TV Shows Application To search for your favorite shows',
      tools: 'HTML - CSS - BootStrap - React - React-router-dom',
    },
    {
      id: 6,
      name: 'React Tesla clone',
      imgUrl: teslaColne,
      url: 'https://tesla-clone-xi.vercel.app',
      description: 'Cloning the original Tesla website using React.js',
      tools: 'HTML - CSS - Styled-components - React - React-redux - React-reveal',
    },
  ],
};

// Contact Page
const contactPageData = {
  title: 'Contact Me',
  altImgName: 'Karim Chammout',
  subHeader: "Say Hello, I won't bite... 😁",
  description:
    'I am available on almost every social media. You can fire me an email and I will reply within 24 hours.',
  ctaText: 'See My Resume',
  resumeLink: 'https://drive.google.com/file/d/16TK1GMZjrEca2DaRFMmZ0yjx6vB1CeWd/view',
};

export { blog, about, socialMediaLinks, skills, projectsData, contactPageData };

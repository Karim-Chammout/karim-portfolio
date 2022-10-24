import githubImg from './assets/images/github.svg';
import gmailImg from './assets/images/google.svg';
import instagramImg from './assets/images/instagram.svg';
import linkedinImg from './assets/images/linkedin.svg';
import twitterImg from './assets/images/twitter.svg';

// About Page
const greeting = {
  title: 'Karim Chammout',
  logo_name: 'Karim Chammout',
  nickname: 'Karim',
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
const projectsHeader = {
  title: 'Projects',
  description:
    'I always strive to include new and innovative interactions to enhance the user experience. My projects makes use of vast variety of latest technology tools.',
  avatar_image_path: 'projects_image.svg',
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: 'Contact Me',
    profile_image_path: 'karim_image.png',
    description:
      'I am available on almost every social media. You can fire me an email and I will reply within 24 hours.',
  },
  addressSection: {
    title: 'Address',
    subtitle: 'Turkey - Istanbul',
    avatar_image_path: 'address_image.svg',
    location_map_link: 'https://goo.gl/maps/Nd8VGEBZYKLXc4oB6',
  },
  phoneSection: {
    title: 'Phone Number',
    phone_num: '+90 536 812 08 35',
  },
};

export { greeting, socialMediaLinks, skills, projectsHeader, contactPageData };

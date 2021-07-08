/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Karim Chammout",
  description:
    "I'm a Front-end developer who's writing code and moving pixels in the www. I'm looking for learning new things and new experiences in this vast world of creativity.",
  og: {
    title: "Karim Chammout Portfolio",
    type: "website",
    url: "https://github.com/Karim-Chammout",
  },
};

//Home Page
const greeting = {
  title: "Karim Chammout",
  logo_name: "Karim Chammout",
  nickname: "Karim",
  subTitle:
    "I'm a Front-end developer who's writing code and moving pixels in the WWW.😎 I'm looking for learning new things and new experiences in this vast world of creativity.",
  resumeLink:
    "https://docs.google.com/document/d/16_Y4P6geQLNJUTQuvt66PRpT58OoNjucQE7o-wuZQdQ/edit?usp=sharing",
  portfolio_repository: "https://github.com/Karim-Chammout",
};


const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/Karim-Chammout",
  // linkedin: "https://www.linkedin.com/in/karim-chammout/",
  // gmail: "chammout.karim@gmail.com",
  // twitter: "https://twitter.com/karim_chammout",
  // instagram: "https://www.instagram.com/karim_chammout/"

  {
    name: "Github",
    link: "https://github.com/Karim-Chammout",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/karim-chammout/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:chammout.karim@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/karim_chammout",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/karim_chammout/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];


const skills = {
  data: [
    {
      title: "Front-end Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Building responsive website front end using modern tools like React",
        "⚡ Creating and optimizing interactive, user-friendly, and feature-rich websites",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Wireframing & Design",
      fileName: "FullStackImg",
      skills: [
        "⚡ Understanding the client's needs to come up with the best design wanted",
        "⚡ Designing fast load time and lag-free interaction website is the highest priority",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
  ],
};


// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I always strive to include new and innovative interactions to enhance the user experience. My projects makes use of vast variety of latest technology tools.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "karim_image.png",
    description:
      "I am available on almost every social media. You can fire me an email and I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Turkey - Istanbul 34235",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/Nd8VGEBZYKLXc4oB6",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+90 536 812 08 35",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projectsHeader,
  contactPageData,
};

import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Nicholas Sabelli', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm ",
  name: 'Nicholas Sabelli',
  subtitle: 'Software Developer',
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.png',
  paragraphOne: 'Software development is not only a job, for me, it is also a passion and hobby.',
  paragraphTwo:
    'I currently work for SourceKnowledge, an ad tech company, where I am building reporting and analytic services to support the needs of the organization. Our goal is to bring meaningful value to brands through online acquisitions. The fast-moving online advertising industry provides us with ample challenges. Luckily, problem-solving is my favourite aspect of the job. I love gathering requirements and coming up with eloquent solutions.',
  paragraphThree:
    'My programming journey started in college, it was love at first “Hello, World!”. Since graduating I continue to learn new things, investing personal time in training and projects. Recently, I completed a course on Azure fundamentals. With this knowledge, my goal is to bring some of my projects to the cloud as well as create new ones.',
  paragraphFour:
    'I love attending meetups and seminars. If you know of any that match my profile I would love to hear about them.',
  resume:
    'https://www.icloud.com/iclouddrive/0VaH-NwIf2dltagIpUdVQcLSg#Nicholas_Sabelli_Resume_Alt', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'pms.png',
    title: 'Price Monitor Scraper',
    dates: '2019 – Present',
    info:
      'Born out of an interest in saving money on groceries, the project crawls websites to gather price and availability information. Supported websites include Walmart, Best Buy, IGA, Metro, among others.',
    info2: 'Technologies applied: Python, Scrapy, MongoDB, Selenium, Git',
    url: '',
    repo: 'https://github.com/nicholassabelli/PriceMonitorScraper', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'state-change.png',
    title: 'State Change Video Game (Academic Project)',
    dates: 'Oct 2016 – Dec 2016',
    info:
      'In State Change the player wakes up in a strange lab. They must escape this lab using only the MASS gun. The MASS gun allows the player to create blocks thus, manipulating the environment. These blocks help to solve puzzles and kill enemies; in your effort to escape your captors. State Change was developed in a group of 6 students for a game development course offered by Concordia University.',
    info2: 'Technologies applied: Unity Game Engine, C#, Git',
    url: '',
    repo: 'https://github.com/nicholassabelli/state-change', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'nicholas.sabelli@outlook.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/nicholas-sabelli/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/nicholassabelli',
    },
    {
      id: uuidv1(),
      name: 'twitter',
      url: 'https://twitter.com/nicholassabelli',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};

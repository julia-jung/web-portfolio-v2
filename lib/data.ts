import { Experience, Project } from '@/types';

export const about: string[] = [
  'As a full-stack web developer, my strength lies in problem-solving skill based on deep understanding of the service I build.',
  'When I work, I am often obsessed with details being meticulous and organized. I am a perfectionist. I always communicate and double check with teams to minimize bugs and avoid missing out on details, which as a result reduce the project time.',
  'Personality wise, I am highly responsible. I am all about integrity and try my best to keep my word and get things done in time. At the same time, I pursue being efficient at work.Inefficiency is something I can not stand for.',
  'As a developer I see a good service is decided by users.Therefore providing them what they need and delivering the best user experience is the all time priority.With that being said, I care about UX the most to deliever seamless user experience and in the end, communication with planners and designers is the key to build quality product with best user experience, which is where I shine.',
];

export const experiences: Experience[] = [
  {
    id: 2,
    start: '2019',
    end: '2023',
    duration: '4y 4m',
    company: 'ONDA',
    location: 'Seoul, South Korea',
    link: 'https://global.onda.me/',
    description:
      'ONDA is a tech Startup in Hospitality Industry provides solutions such as PMS(Property Management System) and CMS(Channel Management System) collaborating with domestic and international online booking channels(e.g. Agoda, Airbnb, and Expedia) for hotels or any types of accommodation owners. For the last two years as a Mid-Level Software Engineer I developed my back-end skills while leading a front-end project. My Responsibility for the first 2 years as a Junior Software Engineer was mainly focused on front-end development.',
    role: 'Junior-Mid Software Engineer, Full Stack',
    skills: [
      'Typescript',
      'Javascript',
      'Vue.js',
      'Nuxt.js',
      'Angular',
      'HTML',
      'CSS',
      'SCSS',
      'Node.js',
      'Nest.js',
      'REST API',
      'GraphQL',
      'MySQL',
      'Agile(Scrum)',
    ],
  },
  {
    id: 1,
    start: '2014',
    end: '2017',
    duration: '3y 6m',
    company: 'Hyundai Engineering',
    location: 'Seoul, South Korea',
    link: 'https://www.hec.co.kr/en',
    role: 'Project Management Engineer',
    description:
      'Managed budget, invoice and engineering timeline for process plant construction projects in South Korea, Turkmenistan, Venezuela, etc.',
    skills: [
      'Project Management',
      'Organizational Skill',
      'Communication Skill',
      'Time Management',
      'SAP',
      'MS Excel',
      'MS Word',
    ],
  },
];

export const projects: Project[] = [
  {
    id: 1,
    name: 'Booking Engine',
    description: 'Responsive Hotel Booking Website',
    thumbnail: '/images/booking-engine.png',
    stack: ['Frontend', 'Backend', 'Typescript', 'Nuxt.js(SSR)', 'SCSS', 'BEM', 'GraphQL', 'Prisma', 'MySQL'],
    url: 'https://booking-engine.onda.me/theocean',
  },
  {
    id: 2,
    name: 'Booking Engine Admin',
    description: 'Booking Engine Account Management Admin Website',
    thumbnail: '/images/booking-engine-admin.png',
    stack: ['Frontend', 'Backend', 'Typescript', 'Vue3', 'NaiveUI', 'Nest.js', 'RESTful API'],
  },
  {
    id: 3,
    name: 'Pension Plus Web & Mobile Webview',
    description:
      'Web application & Mobile Webview of Property Management System targeted for pensions(small and medium-sized lodging)',
    thumbnail: '/images/pension-plus.png',
    stack: ['Frontend', 'Typescript', 'Angular', 'Vuejs'],
    demo: 'https://www.onda.me/pension-plus',
    url: 'https://play.google.com/store/apps/details?id=io.tport.pensionpms&hl=en_US&pli=1',
  },
  {
    id: 4,
    name: 'Portfolio',
    description: 'Personal portfolio webpage built with Next.js + Tailwind CSS',
    thumbnail: '/images/portfolio.png',
    stack: ['Frontend', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/julia-jung/web-portfolio-v2',
    // demo:
  },
];

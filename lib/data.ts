import { Experience, Project, Skills } from '@/types';

export const skills: Skills = {
  frontend: ['Typescript', 'Javascript', 'HTML', 'CSS', 'SCSS', 'Vue.js', 'Nuxt.js', 'React', 'Next.js', 'Angular'],
  backend: ['Node.js', 'Nest.js', 'REST API', 'GraphQL', 'MySQL'],
  tools: ['Git', 'Agile(Scrum)', 'Jira', 'Asana'],
};

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
      'Built core features including the booking process, price and inventory management for property management systems (PMS), hotel booking web pages, and back-office systems. Starting as a junior engineer and progressing to a mid-level position, I honed not only my programming abilities but also my communication and collaboration skills working closely with product and design teams to ensure alignment and successful project outcomes. ',
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
      'As a Project Engineer within the Project Management team, I held responsibility for overseeing project budgets, invoices, and engineering milestones across various locations including South Korea, Turkmenistan, and Venezuela. Managing multimillion-dollar projects alongside hundreds of engineers, I honed my organizational, communication, and time management skills.',
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
    description:
      'A Booking Engine web app for hotels, allowing users to search for rooms, make, pay for, find, and cancel reservations. Fully responsive and customizable for each hotel with theming. I&apos;ve published and implemented the entire frontend and some backend features, including the booking process.',
    thumbnail: '/images/booking-engine.png',
    stack: ['Frontend', 'Backend', 'Typescript', 'Nuxt.js(SSR)', 'SCSS', 'BEM', 'GraphQL', 'Prisma', 'MySQL'],
    url: 'https://booking-engine.onda.me/theocean',
  },
  {
    id: 2,
    name: 'Booking Engine Admin',
    description:
      'An admin web app for in-house staff to create and manage accounts and the status of the Booking Engine used by hotels. As the project lead, I was in charge of designing the system and implementing core features.',
    thumbnail: '/images/booking-engine-admin.png',
    stack: ['Frontend', 'Backend', 'Typescript', 'Vue3', 'NaiveUI', 'Nest.js', 'RESTful API'],
  },
  {
    id: 3,
    name: 'Pension Plus Web & Mobile Web View',
    description:
      'A web application & mobile web view of Property Management System (PMS) targeted for pensions (small and medium-sized lodging) to help them manage the revenue, reservations, and rates. I maintained, enhanced, and implemented frontend features.',
    thumbnail: '/images/pension-plus.png',
    stack: ['Frontend', 'Typescript', 'Angular', 'Vuejs'],
    demo: 'https://www.onda.me/pension-plus',
    url: 'https://play.google.com/store/apps/details?id=io.tport.pensionpms&hl=en_US&pli=1',
  },
  {
    id: 4,
    name: 'Web Portfolio',
    description: 'A personal portfolio webpage built with Next.js + Tailwind CSS. Fully responsive.',
    thumbnail: '/images/portfolio.png',
    stack: ['Frontend', 'Typescript', 'React', 'Next.js', 'Tailwind CSS'],
    github: 'https://github.com/julia-jung/web-portfolio-v2',
    url: 'https://minji-jung.vercel.app/',
  },
];

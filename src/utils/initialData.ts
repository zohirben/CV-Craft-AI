import { CVData } from '../types/CVTypes';
import { v4 as uuidv4 } from 'uuid';

export const initialCVData: CVData = {
  personalInfo: {
    fullName: '',
    jobTitle: '',
    location: '',
    email: '',
    phone: '',
  },
  skills: [],
  education: [],
  experience: [],
  summary: '',
  links: [],
  projects: [],
  certifications: [],
  languages: [],
  awards: [],
};

export const exampleCVData: CVData = {
  personalInfo: {
    fullName: 'Alex Morgan',
    jobTitle: 'Senior Frontend Developer',
    location: 'San Francisco, CA',
    email: 'alex.morgan@example.com',
    phone: '(555) 123-4567',
  },
  summary: 'Results-driven Frontend Developer with 7+ years of experience building responsive, user-focused web applications. Expertise in React, TypeScript, and modern JavaScript frameworks. Passionate about creating accessible, performant user interfaces that solve real business problems. Proven track record of leading development teams and mentoring junior developers.',
  skills: [
    { name: 'React' },
    { name: 'TypeScript' },
    { name: 'JavaScript' },
    { name: 'HTML/CSS' },
    { name: 'Redux' },
    { name: 'Next.js' },
    { name: 'GraphQL' },
    { name: 'Jest' },
    { name: 'Tailwind CSS' },
    { name: 'Accessibility (a11y)' },
    { name: 'Performance Optimization' },
    { name: 'Git' },
  ],
  education: [
    {
      id: uuidv4(),
      degree: 'B.S. Computer Science',
      institution: 'University of California, Berkeley',
      startYear: '2013',
      endYear: '2017',
      description: 'Graduated with honors. Specialized in Human-Computer Interaction. Relevant coursework: Web Development, Algorithms, Data Structures, UX Design.',
    }
  ],
  experience: [
    {
      id: uuidv4(),
      title: 'Senior Frontend Developer',
      company: 'TechFlow Solutions',
      startDate: '2021',
      endDate: '',
      current: true,
      achievements: [
        'Led development of a complex SPA that reduced customer support inquiries by 35%',
        'Implemented performance optimizations that improved load times by 40%',
        'Mentored 5 junior developers, creating a technical growth curriculum',
        'Collaborated with design team to create and implement a component library used across all company products'
      ]
    },
    {
      id: uuidv4(),
      title: 'Frontend Developer',
      company: 'InnovateSoft',
      startDate: '2017',
      endDate: '2021',
      current: false,
      achievements: [
        'Developed responsive web applications serving 100,000+ monthly users',
        'Reduced build times by 50% through webpack configuration improvements',
        'Implemented automated testing strategies resulting in 30% fewer production bugs',
        'Collaborated with UX team to improve accessibility, achieving WCAG AA compliance'
      ]
    }
  ],
  links: [
    {
      id: uuidv4(),
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/alexmorgan'
    },
    {
      id: uuidv4(),
      name: 'GitHub',
      url: 'https://github.com/alexmorgan'
    },
    {
      id: uuidv4(),
      name: 'Portfolio',
      url: 'https://alexmorgan.dev'
    }
  ],
  projects: [
    {
      id: uuidv4(),
      name: 'E-commerce Store Redesign',
      description: 'Completely redesigned user checkout flow resulting in 25% higher conversion rates. Implemented with React, TypeScript, and Stripe integration.',
      url: 'https://github.com/alexmorgan/ecommerce-redesign'
    },
    {
      id: uuidv4(),
      name: 'Weather Dashboard',
      description: 'Built a real-time weather dashboard with React and OpenWeather API. Features geolocation, forecasting, and customizable alerts.',
      url: 'https://weather.alexmorgan.dev'
    }
  ],
  certifications: [
    {
      id: uuidv4(),
      name: 'AWS Certified Developer - Associate',
      issuer: 'Amazon Web Services',
      date: '2022'
    },
    {
      id: uuidv4(),
      name: 'Professional Web Accessibility',
      issuer: 'International Association of Accessibility Professionals',
      date: '2021'
    }
  ],
  languages: [
    {
      id: uuidv4(),
      name: 'English',
      proficiency: 'Native'
    },
    {
      id: uuidv4(),
      name: 'Spanish',
      proficiency: 'Proficient'
    }
  ],
  awards: [
    {
      id: uuidv4(),
      name: 'Innovation Award',
      issuer: 'TechFlow Solutions',
      date: '2022',
      description: 'Recognized for developing an internal tool that increased team productivity by 20%'
    }
  ]
};
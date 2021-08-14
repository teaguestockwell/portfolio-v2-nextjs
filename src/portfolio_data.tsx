import {Portfolio} from './types/types'

export const portfolioData: Portfolio = {
  person: {
    firstName: 'Teague',
    lastName: 'Stockwell',
    email: 'tsAppDevelopment@gmail.com',
    linkedInSrc: 'https://www.linkedin.com/in/teague-stockwell',
    githubSrc: 'https://github.com/tsAppDevelopment',
    jobTitle: 'Software Engineer',
    location: 'Seattle, WA',
  },

  jobs: [
    {
      name: 'Software Engineer',
      company: 'Rainier Spark Tron',
      dateRange: 'October 2020 - Present',
      description:
        'asda asdas  asdnjnakjsnd jkashdkjha kahjsdlkh kalhhsdklha lkajhsd',
      src: 'https://www.linkedin.com/company/tron-air-force',
      location: 'Joint Base Lewis McChord, WA',
      imgSrc: '/rainier.png',
    },
    {
      name: 'Software Engineer',
      company: 'Aloha Spark Tron',
      dateRange: 'October 2020 - Present',
      description:
        'asda asdas  asdnjnakjsnd jkashdkjha kahjsdlkh kalhhsdklha lkajhsd',
      src: 'https://www.linkedin.com/company/tron-air-force',
      location: 'Remote',
      imgSrc: '/tron1.png',
    },
    {
      name: 'Aerospace Maintenance Technician',
      company: 'United States Air Force',
      dateRange: 'October 2017 - December 2020',
      description:
        'asda asdas  asdnjnakjsnd jkashdkjha kahjsdlkh kalhhsdklha lkajhsd',
      src: 'https://www.airforce.com/careers/detail/airlift-special-mission-aircraft-maintenance',
      location: 'Joint Base Lewis McChord, WA',
      imgSrc: '/af1.png',
    },
  ],

  titles: {
    about: 'About',
    tech: 'Stack',
    projects: 'Projects',
    experience: 'Experience',
    education: 'Education',
    contact: 'Contact',
  },
  subTitles: {
    about: undefined,
    tech: undefined,
    projects: 'Web meets mobile. Full stack and microservice architecture.',
    experience: undefined,
    education: undefined,
    contact: `See me on Github, connect on LinkedIn, or send me an email.`,
  },

  skills: [
    {
      name: 'Languages',
      svgKeys: ['typescript', 'javascript', 'dart', 'java', 'html5', 'css3'],
    },
    {
      name: 'Frontend',
      svgKeys: ['reactjs', 'flutter', 'android'],
    },
    {
      name: 'Backend',
      svgKeys: ['nodedotjs', 'express', 'nextdotjs', 'prisma'],
    },
    {
      name: 'Services',
      svgKeys: ['amazonaws', 'postgresql', 'firebase', 'nginx', 'vercel'],
    },
    {
      name: 'Workflow',
      svgKeys: [
        'docker',
        'git',
        'jira',
        'github',
        'gitlab',
        'visualStudioCode',
        'androidStudio',
        'sonarqube',
        'figma',
      ],
    },
  ],
  projects: [
    {
      name: 'Buildable 🚧 WIP 🚧 ',
      dateRange: 'Apr 2021 - Present',
      subHeading:
        'Created a social media platform for exploring and sharing buildable items utilizing React, S3, Postgres, Oauth 2.0, and a Next.js serverless API',
      bullets: [
        'Utilized Next.js to create a scalable collection of user content that is incrementally statically regenerated and served on edge',
        'Created post interaction with threaded comments, likes, saves, and rich text editing',
        'Implemented a serverless REST API that the manages the lifecycle of securely uploading images from the client using presigned urls',
      ],
      deploymentSrc: 'http://hello-next-auth.vercel.app/all-time',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/buildable-hls/master.m3u8',
      repos: [
        {
          name: 'mono repo',
          src: 'https://github.com/tsAppDevelopment/buildable',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'reactjs',
        'nodedotjs',
        'amazonaws',
        'vercel',
        'typescript',
        'prisma',
        'github',
        'git',
        'css3',
        'html5',
      ],
    },
    {
      name: 'Levels',
      dateRange: 'March 2021 - Present',
      subHeading: `Developed a production full stack web app to manage aircraft cargo loading for the Air Force`,
      bullets: [
        'Leveraged CI/CD pipelines, TDD, hardened Docker imgs, and Agile to accredit and deploy a prod app in < 5 months to a secure network',
        'Utilized Node.js to create a REST API that manages cargo and loading configurations against multiple aircraft and user roles',
        'Created containerized React UI for real time aircraft data management, and cargo loading with offline persistence',
      ],
      deploymentSrc: 'https://levels.apps.dso.mil',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/level-2-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v3-react',
        },
        {
          name: 'Backend',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'express',
        'reactjs',
        'nodedotjs',
        'amazonaws',
        'nginx',
        'typescript',
        'prisma',
        'gitlab',
        'sonarqube',
        'git',
        'jira',
        'figma',
        'css3',
        'html5',
      ],
    },
    {
      name: 'Five Level',
      dateRange: 'Sep 2020 - Mar 2021',
      bullets: [
        'Established CI/CD pipeline for static code analysis, linting, testing, and containerized builds',
        'Wrote 160 Flutter component & unit tests for > 90% code coverage',
        'Developed custom admin dashboard to manage cargo data from a REST API in < 10 days',
        'Utilized Google Firestore (BaaS / document db) for offline data persistence on mobile',
      ],
      subHeading: `Developed a X-Platform native UI to manage aircraft cargo loading`,
      deploymentSrc: 'https://fivelevel.web.app',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/five-level-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/levels-v2-flutter',
        },
        {
          name: 'Backend Server',
          src: 'https://github.com/tsAppDevelopment/levels-v2v3-express',
        },
        {
          name: 'Backend Serverless',
          src: 'https://firebase.google.com/products/firestore?gclsrc=ds&gclsrc=ds&gclid=CMK6ivX89_ECFUMNrQYdrFIFkQ',
        },
      ],
      svgs: [
        'docker',
        'postgresql',
        'firebase',
        'flutter',
        'express',
        'nodedotjs',
        'nginx',
        'dart',
        'prisma',
        'git',
        'figma',
      ],
    },
    {
      name: 'Dog of the Day',
      dateRange: 'Mar 2021',
      subHeading: `A lighthearted React app to share your favorite animals during standup`,
      bullets: [
        'Consumed a restful api to browse, showcase, and persist animals in a React/Material-UI',
      ],
      deploymentSrc: 'https://dog-of-the-day-2692f.web.app/',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/dod-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/dog-of-the-day',
        },
      ],
      svgs: [
        'firebase',
        'reactjs',
        'typescript',
        'html5',
        'css3',
        'git',
        'github',
      ],
    },
    {
      name: '5 Level',
      dateRange: 'Sep 2020 - March 2020',
      subHeading: `Developed, and deployed A native android application with Java for aircraft weight and balance`,
      bullets: [],
      deploymentSrc:
        'https://play.google.com/store/apps/details?id=com.TsAppDevelopment.c17mac',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/5-level-2-hls/master.m3u8',
      repos: [
        {
          name: 'Android UI',
          src: 'https://github.com/tsAppDevelopment/levels-v1-android',
        },
      ],
      svgs: ['android', 'java', 'git', 'github'],
    },
    {
      name: `Doctor's Patient Portal`,
      subHeading: `Developed a demo Flutter UI to consume real time checkups to a doctor's office`,
      dateRange: 'March 2021',
      m3u8Src:
        'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/lpg-hls/master.m3u8',
      repos: [
        {
          name: 'Frontend',
          src: 'https://github.com/tsAppDevelopment/doctors-patient-database',
        },
      ],
      svgs: ['flutter', 'firebase', 'git', 'github', 'dart'],
      bullets: [
        `Utilized Firebase auth to authenticate care providers who want to maintain patient data`,
        `Implemented real time searching of patients against NoSQL database (Firebase)`,
        'email:  guest@email.com, password: password',
      ],
      deploymentSrc: 'https://doctors-patient-database.web.app',
    },
  ],
  schools: [
    {
      name: 'Southwestern College',
      dateRange: 'May 2021',
      subHeading: `Bachelor of Science, Computer Programming, 3.9 GPA`,
      imgSrc: '/bs1.png',
      href: 'https://www.sckans.edu/',
    },
    {
      name: 'Community College of the Air Force',
      dateRange: 'August 2019',
      subHeading: `Associate of Applied Science, Aviation Maintenance Technology, 4.0 GPA`,
      imgSrc: '/as1.png',
      href: 'https://www.ccaf.af.mil/',
    },
  ],
}

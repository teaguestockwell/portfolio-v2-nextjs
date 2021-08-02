interface IDeveloper {
  name: string
  linkedInSrc: string
  githubSrc: string
}
interface ITechnology {
  title: string
  svgs: string[]
}
interface ISchool {
  title: string
  date: string
  subHeading: string
  src: string
}
export interface IProject {
  title: string
  subHeading: string
  dateRange: string
  bullets: string[]
  deploymentSrc: string
  src: string
  repos: {
    name: string
    src: string
  }[]
  svgs: string[]
}
interface IPortfolio {
  developer: IDeveloper
  technologies: ITechnology[]
  education: ISchool[]
  projects: IProject[]
}

export const data: IPortfolio = {
  developer: {
    name: 'Teague Stockwell',
    linkedInSrc: 'https://www.linkedin.com/in/teague-stockwell',
    githubSrc: 'https://github.com/tsAppDevelopment',
  },
  technologies: [
    {
      title: 'Languages',
      svgs: ['typescript', 'javascript', 'dart', 'java', 'html5', 'css3'],
    },
    {
      title: 'Frontend',
      svgs: ['reactjs', 'flutter', 'android'],
    },
    {
      title: 'Backend',
      svgs: ['nodedotjs', 'express', 'nextdotjs', 'prisma'],
    },
    {
      title: 'Services',
      svgs: ['amazonaws', 'postgresql', 'firebase', 'nginx', 'vercel'],
    },
    {
      title: 'Workflow',
      svgs: ['docker', 'git', 'jira', 'github', 'gitlab', 'sonarqube', 'figma'],
    },
  ],
  projects: [
    {
      title: 'Levels',
      dateRange: 'March 2021 - Present',
      subHeading: `Developed a production full stack web app to manage aircraft cargo loading for the Air Force`,
      bullets: [
        'Leveraged CI/CD pipelines, TDD, hardened Docker imgs, and Agile to accredit and securely deploy a prod app in < 5 months',
        'Utilized Node.js to create a REST API that manages cargo and loading configurations against multiple aircraft and user roles',
        'Created containerized React UI for real time aircraft data management, and cargo loading with offline persistence',
      ],
      deploymentSrc: '',
      src: 'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/levels-hls/master.m3u8',
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
        'typescript',
        'html5',
        'css3',
        'reactjs',
        'nginx',
        'nodedotjs',
        'express',
        'prisma',
        'postgresql',
        'amazonaws',
        'docker',
        'gitlab',
        'sonarqube',
        'git',
        'jira',
        'figma',
      ],
    },
    {
      title: 'Five Level',
      dateRange: 'Sep 2020 - Mar 2021',
      bullets: [
        'Established CI/CD pipeline for static code analysis, linting, testing, and containerized builds',
        'Wrote 160 Flutter component & unit tests for > 90% code coverage',
        'Developed custom admin dashboard to manage cargo data from a REST API in < 10 days',
        'Utilized Google Firestore (BaaS / document db) for offline data persistence on mobile',
      ],
      subHeading: `Developed a X-Platform native UI to manage aircraft cargo loading`,
      deploymentSrc: 'https://fivelevel.web.app',
      src: 'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/five-level-hls/master.m3u8',
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
        'dart',
        'flutter',
        'nginx',
        'nodedotjs',
        'express',
        'prisma',
        'postgresql',
        'firebase',
        'docker',
        'git',
        'figma',
      ],
    },
  ],
  education: [
    {
      title: 'Southwestern College',
      date: 'May 2021',
      subHeading: `Bachelor of Science, Computer Programming, 3.9 GPA`,
      src: '/bs1.png',
    },
    {
      title: 'Community College of the Air Force',
      date: 'August 2019',
      subHeading: `Associate of Applied Science, Aviation Maintenance Technology, 4.0 GPA`,
      src: '/as1.png',
    },
  ],
}

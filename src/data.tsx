export const skills = [
  {
    title: 'Languages',
    icons: ['typescript', 'javascript', 'dart', 'java', 'html5', 'css3'],
  },
  {
    title: 'Frontend',
    icons: ['reactjs', 'flutter', 'android'],
  },
  {
    title: 'Backend',
    icons: ['nodedotjs', 'express', 'nextdotjs', 'prisma'],
  },
  {
    title: 'Services',
    icons: ['amazonaws', 'postgresql', 'firebase', 'nginx', 'vercel'],
  },
  {
    title: 'Workflow',
    icons: ['docker', 'git', 'jira', 'github', 'gitlab', 'sonarqube', 'figma'],
  },
]

const ipsum =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id ligula maximus, molestie dui vitae, euismod nulla. Etiam tellus eros, blandit nec porta et, porttitor mollis quam. Nullam elementum sem magna, at scelerisque tortor efficitur convallis. Vivamus quis urna lacus. Nam lorem elit, condimentum vitae enim quis, mattis vehicula nibh. Etiam eu diam sed enim aliquet rhoncus. Vivamus sit amet imperdiet turpis. Nullam nec bibendum tellus. Nullam tellus eros, lobortis at elit sit amet, hendrerit dignissim nibh. Nam scelerisque augue finibus metus ornare, sed finibus orci molestie. Maecenas non lorem aliquet, vulputate nisl eget, maximus nisl. Maecenas quis erat leo.'

export const projects = [
  {
    name: 'Levels',
    shortDescription: `Production app for US Air Force to manage aircraft cargo and weight and balance data`,
    longDescription: ipsum,
    deploymentSrc: '',
    src: 'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/levels-hls/master.m3u8',
    repoSrc: [
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
    name: 'Five Level',
    shortDescription: `A cross-platform aircraft weight and balance app`,
    longDescription: ipsum,
    deploymentSrc: 'https://fivelevel.web.app',
    src: 'https://hello-next-auth-bucket1d4c77784-hsrquocmbr64.s3.amazonaws.com/five-level-hls/master.m3u8',
    repoSrc: [
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
]

export const educations = [
  {
    name: 'Southwestern College',
    date: 'May 2021',
    subHeading: `Bachelor of Science (B.S.), Computer Programming, 3.9`,
  },
  {
    name: 'Community College of the Air Force',
    date: 'August 2019',
    subHeading: `Associate of Applied Science (AAS), Aviation Maintenance Technology, 4.0`,
  },
]

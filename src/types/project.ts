export interface Project {
  name: string
  subHeading: string
  dateRange: string
  bullets: string[]
  deploymentSrc: string
  m3u8Src: string
  svgs: string[]
  repos: {
    name: string
    src: string
  }[]
}

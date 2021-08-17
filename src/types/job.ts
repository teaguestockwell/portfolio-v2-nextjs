export interface Job {
  id: string
  name: string
  company: string
  dateRange: string
  description: string
  src: string | undefined
  location: string
  imgSrc: string
  bullets: string[]
}

export interface Job {
  id: string
  name: string
  company: string
  dateRange: string
  description: string
  src: string | null
  location: string
  imgSrc: string
  bullets: string[]
}

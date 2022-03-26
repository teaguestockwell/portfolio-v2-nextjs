import * as Types from './types'

type Nullable<T> = {[K in keyof T]: T[K] | null}

export interface Portfolio {
  devMessage: string
  heroM3u8Src: string
  id: string
  person: Types.Person
  skills: string[]
  projects: Types.Project[]
  schools: Types.School[]
  titles: Types.SectionTitles
  subTitles: Nullable<Types.SectionTitles>
  jobs: Types.Job[]
  domain: string
  icons: Types.SimpleIcon[]
  githubProjectName: string
  blogs: Types.BlogPost[]
}

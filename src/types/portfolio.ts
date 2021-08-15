import * as Types from './types'

export interface Portfolio {
  id: string
  person: Types.Person
  skills: Types.Skill[]
  projects: Types.Project[]
  schools: Types.School[]
  titles: Types.SectionTitles
  subTitles: Partial<Types.SectionTitles>
  jobs: Types.Job[]
}

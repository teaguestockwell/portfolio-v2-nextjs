import * as Types from '.'

export interface Portfolio {
  firstName: string
  lastName: string
  email: string
  linkedInSrc: string
  githubSrc: string
  skills: Types.Skill[]
  projects: Types.Project[]
  schools: Types.School[]
}

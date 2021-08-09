import * as Types from '.'

export interface Portfolio {
  name: string
  linkedInSrc: string
  githubSrc: string
  skills: Types.Skill[]
  projects: Types.Project[]
  schools: Types.School[]
}

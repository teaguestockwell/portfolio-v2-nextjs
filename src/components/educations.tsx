import {v4} from 'uuid'
import {educations} from '../data'
import {useTheme} from '../hooks/use_theme'
import {Content} from './content'
import {School} from './school'

export const Educations = () => {
  useTheme()

  return (
    <Content>
      {educations.map((e) => (
        <School {...e} key={v4()} />
      ))}
    </Content>
  )
}

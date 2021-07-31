import {v4} from 'uuid'
import {educations} from '../data'
import {useTheme} from '../hooks/use_theme'
import {Content} from './content'
import {Education} from './education'

export const Educations = () => {
  useTheme()

  return (
    <Content>
      {educations.map((e) => (
        <Education {...e} key={v4()} />
      ))}
    </Content>
  )
}

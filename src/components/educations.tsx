import {v4} from 'uuid'
import {educations} from '../data'
import {useTheme} from '../hooks/use_theme'
import {Content} from './content'
import {School} from './school'
import {Card} from './card'

export const Educations = () => {
  useTheme()

  return (
    <Content>
      {educations.map((e) => (
        <Card key={v4()}>
          <School {...e} />
        </Card>
      ))}
    </Content>
  )
}

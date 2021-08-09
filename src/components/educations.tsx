import {portfolioData} from '../portfolio_data'
import {useTheme} from '../hooks/use_theme'
import {Content} from './content'
import {School} from './school'
import {Card} from './card'
import {Element} from 'react-scroll'

export const Educations = () => {
  useTheme()

  return (
    <Content>
      {portfolioData.schools.map((e) => (
        <Element key={e.name} name={e.name}>
          <Card>
            <School {...e} />
          </Card>
        </Element>
      ))}
    </Content>
  )
}

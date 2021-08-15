import {useTheme} from '../hooks/use_theme'
import {getSimpleSvgs} from './svgs'
import {Content} from './content'
import {Card} from './card'
import {Element} from 'react-scroll'
import {Const} from '../const'
import {useBreakpoint} from '../hooks/use_breakpoint'

interface Props {
  name: string
  id: string
}

export const CardGrid = <T extends Props>({
  items,
  getCell,
  hasSvgs = true,
}: {
  items: Array<T>
  getCell: (item: T, getSvg: (key: string) => JSX.Element) => JSX.Element
  hasSvgs: boolean
}) => {
  const theme = useTheme()
  const svgs = hasSvgs ? getSimpleSvgs(42, theme) : null
  const getSvg = (key: string) => (svgs ? svgs[key] : <div />)
  const breakPoint = useBreakpoint.projectsBreak()

  return (
    <Content>
      <div
        style={{
          marginTop: Const.pad * 4,
          maxWidth: '100%',
          display: 'grid',
          //gridTemplateColumns: 'repeat(auto-fit, minmax(40vw, 1fr))',
          gridTemplateColumns: breakPoint ? '1fr 1fr' : '1fr',
          gap: Const.pad * 4,
        }}
      >
        {items.map((i) => (
          <Card
            key={i.id}
            style={{
              height: 450,
              marginTop: 0,
            }}
          >
            {getCell(i, getSvg)}
          </Card>
        ))}
      </div>
    </Content>
  )
}

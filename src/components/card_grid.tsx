import {useTheme} from '../hooks/use_theme'
import {getSimpleSvgs} from './svgs'
import {Content} from './content'
import {Card} from './card'
import {Element} from 'react-scroll'
import {Const} from '../const'
import {useBreakpoint} from '../hooks/use_breakpoint'

interface Props {
  name: string
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
  const md = useBreakpoint.md()

  return (
    <Content>
      <div
        style={{
          marginTop: Const.pad * 4,
          maxWidth: '100%',
          display: 'grid',
          //gridTemplateColumns: 'repeat(auto-fit, minmax(40vw, 1fr))',
          gridTemplateColumns: md ? '1fr 1fr' : '1fr',
          gap: Const.pad * 4,
        }}
      >
        {items.map((i) => (
          <Element key={i.name} name={i.name}>
            <Card
              key={i.name}
              style={{
                height: 450,
                marginTop: 0,
              }}
            >
              {getCell(i, getSvg)}
            </Card>
          </Element>
        ))}
      </div>
    </Content>
  )
}

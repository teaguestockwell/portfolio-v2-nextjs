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
    <Content
      style={{
        paddingLeft: 0,
        paddingRight: 0,
      }}
    >
      <div
        style={{
          display: 'grid',
        }}
      >
        {items.map((i) => (
          <Element key={i.name} name={i.name}>
            <Card
              key={i.name}
              style={{
                height: 450,
                marginTop: Const.pad,
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

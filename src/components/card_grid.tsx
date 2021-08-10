import {useTheme} from '../hooks/use_theme'
import {getSimpleSvgs} from './svgs'
import {Content} from './content'
import {Card} from './card'
import {Element} from 'react-scroll'
import {Row, Col, Grid} from 'antd'
import {Const} from '../const'

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
  const svgs = hasSvgs ? getSimpleSvgs(48, theme) : null
  const getSvg = (key: string) => (svgs ? svgs[key] : <div />)
  const {md} = Grid.useBreakpoint()

  return (
    <Row
      align="middle"
      gutter={md ? Const.pad : 0}
      style={{
        marginRight: md ? Const.pad * 0.6 : 0,
        marginLeft: md ? Const.pad * 0.6 : 0,
        justifyContent: 'space-evenly',
      }}
    >
      {items.map((i) => {
        return (
          <Col
            key={i.name}
            xs={24}
            sm={24}
            md={24}
            lg={24}
            xl={24}
            xxl={12}
            style={{
              maxWidth: Const.maxWidth,
              width: '100%',
            }}
          >
            <Element key={i.name} name={i.name}>
              <Card key={i.name}>{getCell(i, getSvg)}</Card>
            </Element>
          </Col>
        )
      })}
    </Row>
  )
}

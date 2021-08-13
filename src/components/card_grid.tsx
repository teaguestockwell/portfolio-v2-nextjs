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
  const svgs = hasSvgs ? getSimpleSvgs(42, theme) : null
  const getSvg = (key: string) => (svgs ? svgs[key] : <div />)
  const {md} = Grid.useBreakpoint()

  return (
    <Content style={{paddingLeft: 0, paddingRight: 0}}>
      <Row
        align="top"
        gutter={md ? Const.pad : 0}
        style={{
          marginRight: md ? Const.pad * 0.6 : 0,
          marginLeft: md ? Const.pad * 0.6 : 0,
          justifyContent: 'space-evenly',
          alignItems: 'start',
          paddingTop: Const.pad * 3,
        }}
      >
        {items.map((i) => {
          return (
            <Col
              key={i.name}
              xs={24}
              sm={24}
              md={24}
              lg={12}
              xl={12}
              xxl={12}
              style={{
                maxWidth: Const.maxWidth,
                width: '100%',
              }}
            >
              <Element key={i.name} name={i.name}>
                <Card style={{height: 450, marginTop: Const.pad}} key={i.name}>
                  {getCell(i, getSvg)}
                </Card>
              </Element>
            </Col>
          )
        })}
      </Row>
    </Content>
  )
}

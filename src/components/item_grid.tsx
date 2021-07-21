import {Row, Col} from 'antd'
import {v4} from 'uuid'

export const ItemGrid = <T,>({
  items,
  outerStyle,
  getCell,
}: {
  items: Array<T>
  outerStyle: any
  getCell: (item: T) => JSX.Element
}) => {
  return (
    <Row justify="center" style={outerStyle}>
      {items.map((i) => {
        return (
          <Col
            key={v4()}
            xs={8}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            style={{
              display: 'inline-flex',
              justifyContent: 'center',
            }}
          >
            {getCell(i)}
          </Col>
        )
      })}
    </Row>
  )
}

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
            xs={12}
            sm={8}
            md={6}
            lg={4}
            xl={2}
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

import {Content} from '../content'
import {Card} from './card'

interface Props {
  name: string
  id: string
}

export const CardRows = <T extends Props>({
  items,
  getCell,
  cardStyle = {},
}: {
  items: Array<T>
  getCell: (item: T) => JSX.Element
  cardStyle?: any
}) => {
  return (
    <Content>
      {items.map((i) => (
        <Card style={cardStyle} key={i.id}>
          {getCell(i)}
        </Card>
      ))}
    </Content>
  )
}

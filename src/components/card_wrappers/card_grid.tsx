import {Content} from '../content'
import {Const} from '../../const'
import React from 'react'
import dynamic from 'next/dynamic'

const CardFlip = dynamic(
  () => import('./card_flip').then((mod) => ({default: mod.CardFlip})),
  {
    ssr: false,
  }
)

interface Props {
  name: string
  id: string
}

export const CardGrid = <T extends Props>({
  items,
  getCellFront,
  getCellBack,
}: {
  items: Array<T>
  getCellFront: (item: T) => JSX.Element
  getCellBack: (item: T) => JSX.Element
}) => {
  return (
    <Content>
      <div
        style={{
          marginTop: Const.pad * 4,
          maxWidth: '100%',
          display: 'grid',
          //gridTemplateColumns: 'repeat(auto-fit, minmax(40vw, 1fr))',
          gridTemplateColumns: Const.css.cardGrid,
          gap: Const.pad * 2,
        }}
      >
        {items.map((i) => (
          <CardFlip
            key={i.id}
            style={{
              height: 475,
              marginTop: 0,
              overflowY: 'auto',
            }}
            front={getCellFront(i)}
            back={getCellBack(i)}
          />
        ))}
      </div>
    </Content>
  )
}

import {useTheme} from '../hooks/use_theme'
import {getSimpleSvgs} from './svgs'
import {Content} from './content'
import {Card} from './card'
import {Const} from '../const'
import {useBreakpoint} from '../hooks/use_breakpoint'
import React from 'react'
import {CardFlip} from './card_flip'

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
  const theme = useTheme()
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
          <CardFlip
            key={i.id}
            style={{
              height: 450,
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

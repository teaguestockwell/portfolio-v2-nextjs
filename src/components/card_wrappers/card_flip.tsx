import {useRef, useState} from 'react'
import {Card} from './card'
import ReactCardFlip from 'react-card-flip'
import {useBreakpoint} from '../../hooks/use_breakpoint'
import {useTheme} from '../../hooks/use_theme'
import {getInteractiveSvgs} from '../svgs'
import {Const} from '../../const'

export const CardFlip = ({
  front,
  back,
  style = {},
}: {
  front: JSX.Element
  back: JSX.Element
  style?: any
}) => {
  const [isFlipped, setIsFlipped] = useState(false)
  // is the grid layout 1fr 1fr or 1fr ?
  const isGrid = useBreakpoint.projectsBreak()
  const theme = useTheme()
  const svgs = getInteractiveSvgs(theme.fontColor0, 32)

  const flipIcon = (
    <div
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        position: 'absolute',
        bottom: Const.pad / 2,
        right: Const.pad / 2,
        cursor: 'pointer',
      }}
    >
      {isFlipped ? svgs.toFront : svgs.toBack}
    </div>
  )

  return (
    <div>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection={isGrid ? 'horizontal' : 'vertical'}
      >
        <Card style={style} icon={flipIcon}>
          {front}
        </Card>

        <Card style={style} icon={flipIcon}>
          {back}
        </Card>
      </ReactCardFlip>
    </div>
  )
}

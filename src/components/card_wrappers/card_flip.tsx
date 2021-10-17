import {useState} from 'react'
import {Card} from './card'
import ReactCardFlip from 'react-card-flip'
import {useBreakpoint} from '../../hooks/use_breakpoint'
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
  const svgs = getInteractiveSvgs(Const.css.fc0, 32)

  const flipIcon = (
    <button
      onClick={() => setIsFlipped(!isFlipped)}
      style={{
        position: 'absolute',
        bottom: Const.pad,
        right: Const.pad,
        cursor: 'pointer',
        zIndex: 2,
      }}
    >
      {isFlipped ? svgs.toFront : svgs.toBack}
    </button>
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

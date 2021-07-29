import {v4} from 'uuid'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'

export const SkillsCard = ({
  skillsSvgs,
  title,
}: {
  skillsSvgs: JSX.Element[]
  title: string
}) => {
  const theme = useTheme.getState().theme

  return (
    <div
      key={v4()}
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: Const.pad / 2,
        marginTop: Const.pad,
        backgroundColor: theme.background1,
        borderRadius: Const.rad,
      }}
    >
      <div
        style={{
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
        }}
      >
        {title}
      </div>
      <ItemGrid items={skillsSvgs} outerStyle={{}} getCell={(child) => child} />
    </div>
  )
}

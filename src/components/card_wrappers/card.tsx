import {Const} from '../../const'

export const Card = ({
  children,
  style,
  icon,
}: {
  children: JSX.Element | JSX.Element[]
  style?: any
  icon?: JSX.Element
}) => {
  return (
    <div
      style={{
        WebkitBoxShadow: Const.css.shadow,
        MozBoxShadow: Const.css.shadow,
        boxShadow: Const.css.shadow,
        padding: Const.pad * 2,
        marginTop: Const.pad * 4,
        backgroundColor: Const.css.bgc1,
        borderRadius: Const.css.cardRad,
        border: Const.css.border,
        ...style,
      }}
    >
      {children}
      {icon}
    </div>
  )
}

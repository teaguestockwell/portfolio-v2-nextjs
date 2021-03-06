import {Const} from '../const'

export const SectionHeader = ({
  title,
  subTitle,
}: {
  title: string
  subTitle?: string | null
}) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        paddingLeft: Const.pad,
        paddingRight: Const.pad,
      }}
    >
      <a
        href={'#' + title}
        className="name"
        style={{
          maxWidth: Const.maxWidth,
          color: Const.css.fc0,
          fontSize: Const.css.xxxlg,
          lineHeight: `${Const.css.xxxlg}px`,
          fontWeight: 800,
          wordWrap: 'break-word',
        }}
      >
        {title}
      </a>

      {subTitle && (
        <div
          style={{
            fontSize: Const.css.md,
            wordWrap: 'break-word',
            color: Const.css.fc1,
            textAlign: 'center',
            maxWidth: Const.maxWidth,
            paddingTop: Const.pad / 2,
          }}
        >
          {subTitle}
        </div>
      )}
    </div>
  )
}

/* eslint-disable react/display-name */
import {
  // language
  Dart,
  Java,
  Typescript,
  Javascript,
  Html5,
  CssThree,

  // ui tooling
  Android,
  ReactJs,
  Flutter,
  Nginx,

  // api tooling
  Nodedotjs,
  Prisma,
  Postgresql,
  Firebase,
  Amazonaws,
  Express,
  Nextdotjs,

  // workflow
  Docker,
  Github,
  Git,
  Gitlab,
  Jira,
  Vercel,

  // misc
  Sonarqube,
  Linkedin,
} from '@icons-pack/react-simple-icons'
import {useTheme} from '../hooks/use_theme'

const Svg = ({
  name,
  svg,
  theme,
}: {
  name?: string | undefined
  svg: any
  theme: any
}) => {
  return (
    <div
      className="icon-hover"
      style={{
        width: 100,
        height: 100,
      }}
    >
      <div
        style={{
          paddingTop: 14,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {svg}
      </div>

      {name && (
        <div
          style={{
            color: theme.fontColor0,
            fontSize: '20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {name}
        </div>
      )}
    </div>
  )
}

export const Svgs = (size: number) => {
  const theme = useTheme.getState().theme

  return {
    dart: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Dart'}
        svg={
          <Dart size={size} color={themeColor ? theme.fontColor1 : '#0175C2'} />
        }
        theme={theme}
      />
    ),
  }
}

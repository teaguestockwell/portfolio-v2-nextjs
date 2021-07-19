/* eslint-disable react/display-name */
import {useTheme} from '../hooks/use_theme'
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
  Sonarqube,
} from '@icons-pack/react-simple-icons'

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
        theme={theme}
        svg={
          <Dart size={size} color={themeColor ? theme.fontColor1 : '#0175C2'} />
        }
      />
    ),
    java: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Java'}
        theme={theme}
        svg={
          <Java size={size} color={themeColor ? theme.fontColor1 : '#0175C2'} />
        }
      />
    ),
    typescript: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Typescript'}
        theme={theme}
        svg={
          <Typescript
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    javascript: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Javascript'}
        theme={theme}
        svg={
          <Javascript
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    html5: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'HTML5'}
        theme={theme}
        svg={
          <Html5
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    css3: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'CSS3'}
        theme={theme}
        svg={
          <CssThree
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    android: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Android'}
        theme={theme}
        svg={
          <Android
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    reactjs: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'ReactJs'}
        theme={theme}
        svg={
          <ReactJs
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    flutter: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Flutter'}
        theme={theme}
        svg={
          <Flutter
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    nginx: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Nginx'}
        theme={theme}
        svg={
          <Nginx
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    nodedotjs: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Nodedotjs'}
        theme={theme}
        svg={
          <Nodedotjs
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    prisma: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Prisma'}
        theme={theme}
        svg={
          <Prisma
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    postgresql: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Postgresql'}
        theme={theme}
        svg={
          <Postgresql
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    firebase: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Firebase'}
        theme={theme}
        svg={
          <Firebase
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    amazonaws: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Amazonaws'}
        theme={theme}
        svg={
          <Amazonaws
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    express: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Express'}
        theme={theme}
        svg={
          <Express
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    nextdotjs: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Nextdotjs'}
        theme={theme}
        svg={
          <Nextdotjs
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    docker: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Docker'}
        theme={theme}
        svg={
          <Docker
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    github: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Github'}
        theme={theme}
        svg={
          <Github
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    git: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Git'}
        theme={theme}
        svg={
          <Git size={size} color={themeColor ? theme.fontColor1 : '#0175C2'} />
        }
      />
    ),
    gitlab: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Gitlab'}
        theme={theme}
        svg={
          <Gitlab
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    Jira: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Jira'}
        theme={theme}
        svg={
          <Jira size={size} color={themeColor ? theme.fontColor1 : '#0175C2'} />
        }
      />
    ),
    vercel: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Vercel'}
        theme={theme}
        svg={
          <Vercel
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
    sonarqube: (themeColor: boolean | undefined = false) => (
      <Svg
        name={'Sonarqube'}
        theme={theme}
        svg={
          <Sonarqube
            size={size}
            color={themeColor ? theme.fontColor1 : '#0175C2'}
          />
        }
      />
    ),
  }
}

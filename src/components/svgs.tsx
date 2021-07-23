/* eslint-disable react/display-name */
import {CustomTheme, useTheme} from '../hooks/use_theme'
import {v4} from 'uuid'
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

  // api tooling
  Nodedotjs,
  Prisma,
  Express,
  Nextdotjs,

  // services
  Firebase,
  Amazonaws,
  Postgresql,
  Nginx,
  Vercel,
  Sonarqube,

  // workflow
  Docker,
  Github,
  Git,
  Gitlab,
  Jira,
  Figma,
} from '@icons-pack/react-simple-icons'

const Svg = ({
  name,
  svg,
  theme,
}: {
  name?: string | undefined
  svg: any
  theme: CustomTheme
}) => {
  return (
    <div
      key={v4()}
      className="icon-hover"
      style={{
        width: 75,
        height: 75,
        padding: 5,
      }}
    >
      <div
        style={{
          paddingTop: 4,
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
            paddingTop: 4,
            color: theme.fontColor1,
            fontSize: theme.fontSizes.sm,
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
    dart: (
      <Svg
        name={'Dart'}
        theme={theme}
        svg={<Dart size={size} color={'#0175C2'} />}
      />
    ),

    java: (
      <Svg
        name={'Java'}
        theme={theme}
        svg={<Java size={size} color={'#007396'} />}
      />
    ),

    typescript: (
      <Svg
        name={'Typescript'}
        theme={theme}
        svg={<Typescript size={size} color={'#3178C6'} />}
      />
    ),

    javascript: (
      <Svg
        name={'Javascript'}
        theme={theme}
        svg={<Javascript size={size} color={'#F7DF1E'} />}
      />
    ),

    html5: (
      <Svg
        name={'HTML5'}
        theme={theme}
        svg={<Html5 size={size} color={'#E34F26'} />}
      />
    ),

    css3: (
      <Svg
        name={'CSS3'}
        theme={theme}
        svg={<CssThree size={size} color={'#1572B6'} />}
      />
    ),

    android: (
      <Svg
        name={'Android'}
        theme={theme}
        svg={<Android size={size} color={'#3DDC84'} />}
      />
    ),

    reactjs: (
      <Svg
        name={'ReactJs'}
        theme={theme}
        svg={<ReactJs size={size} color={'#61DBFB'} />}
      />
    ),

    flutter: (
      <Svg
        name={'Flutter'}
        theme={theme}
        svg={<Flutter size={size} color={'#02569B'} />}
      />
    ),

    nginx: (
      <Svg
        name={'Nginx'}
        theme={theme}
        svg={<Nginx size={size} color={'#009639'} />}
      />
    ),

    figma: (
      <Svg
        name={'Figma'}
        theme={theme}
        svg={<Figma size={size} color={'#F24E1E'} />}
      />
    ),

    nodedotjs: (
      <Svg
        name={'Node.js'}
        theme={theme}
        svg={<Nodedotjs size={size} color={'#339933'} />}
      />
    ),

    prisma: (
      <Svg
        name={'Prisma'}
        theme={theme}
        svg={<Prisma size={size} color={theme.fontColor1} />}
      />
    ),

    postgresql: (
      <Svg
        name={'Postgresql'}
        theme={theme}
        svg={<Postgresql size={size} color={'#4169E1'} />}
      />
    ),

    firebase: (
      <Svg
        name={'Firebase'}
        theme={theme}
        svg={<Firebase size={size} color={'#FFCA28'} />}
      />
    ),

    amazonaws: (
      <Svg
        name={'Amazonaws'}
        theme={theme}
        svg={<Amazonaws size={size} color={theme.fontColor1} />}
      />
    ),

    express: (
      <Svg
        name={'Express.js'}
        theme={theme}
        svg={<Express size={size} color={theme.fontColor1} />}
      />
    ),

    nextdotjs: (
      <Svg
        name={'Next.js'}
        theme={theme}
        svg={<Nextdotjs size={size} color={theme.fontColor1} />}
      />
    ),

    docker: (
      <Svg
        name={'Docker'}
        theme={theme}
        svg={<Docker size={size} color={'#2496ED'} />}
      />
    ),

    github: (
      <Svg
        name={'Github'}
        theme={theme}
        svg={<Github size={size} color={theme.fontColor1} />}
      />
    ),

    git: (
      <Svg
        name={'Git'}
        theme={theme}
        svg={<Git size={size} color={'#F05032'} />}
      />
    ),
    gitlab: (
      <Svg
        name={'Gitlab'}
        theme={theme}
        svg={<Gitlab size={size} color={'#FCA121'} />}
      />
    ),
    jira: (
      <Svg
        name={'Jira'}
        theme={theme}
        svg={<Jira size={size} color={'#0052CC'} />}
      />
    ),
    vercel: (
      <Svg
        name={'Vercel'}
        theme={theme}
        svg={<Vercel size={size} color={theme.fontColor1} />}
      />
    ),
    sonarqube: (
      <Svg
        name={'Sonarqube'}
        theme={theme}
        svg={<Sonarqube size={size} color={'#4E9BCD'} />}
      />
    ),
  }
}

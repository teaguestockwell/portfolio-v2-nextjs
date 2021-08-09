/* eslint-disable react/display-name */
import {Const, CustomTheme} from '../const'
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
import {v4} from 'uuid'

export const CustomSvgs = {
  about: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z" />
    </svg>
  ),
}

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
      style={{
        paddingLeft: Const.pad,
        paddingRight: Const.pad,
      }}
    >
      <div
        className="icon-hover"
        style={{
          width: 75,
          height: 75,
          padding: 5,
          paddingLeft: Const.pad,
          paddingRight: Const.pad,
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
              fontSize: Const.fontSizes.sm,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {name}
          </div>
        )}
      </div>
    </div>
  )
}

export const SvgScroll = ({
  svgs,
  style = {},
}: {
  svgs: JSX.Element[]
  style?: any
}) => {
  return (
    <div
      style={{
        paddingTop: Const.pad,
        paddingBottom: Const.pad,
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'clip',
        ...style,
      }}
    >
      {svgs.map((s) => (
        <div key={v4()}>{s}</div>
      ))}
    </div>
  )
}

export const SvgScroll2 = ({
  svgs,
  style = {},
}: {
  svgs: JSX.Element[]
  style?: any
}) => {
  return (
    <div
      style={{
        paddingTop: Const.pad,
        paddingBottom: Const.pad,
        display: 'flex',
        overflowX: 'auto',
        overflowY: 'clip',
        ...style,
      }}
    >
      <div>
        <div style={{display: 'flex'}}>
          {svgs.slice(0, Math.floor(svgs.length / 2)).map((s) => (
            <div key={v4()}>{s}</div>
          ))}
        </div>
        <div style={{display: 'flex'}}>
          {svgs.slice(Math.floor(svgs.length / 2), svgs.length - 1).map((s) => (
            <div key={v4()}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const Svgs = (size: number, theme: any) => {
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
        name={'React.js'}
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
  } as {[key: string]: JSX.Element}
}

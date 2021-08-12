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

export const getCustomSvgs = (fill: string, h: number, w: number) => ({
  [Const.titles.about]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M10.25 13c0 .69-.56 1.25-1.25 1.25S7.75 13.69 7.75 13s.56-1.25 1.25-1.25 1.25.56 1.25 1.25zM15 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm7 .25c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2s10 4.48 10 10zM10.66 4.12C12.06 6.44 14.6 8 17.5 8c.46 0 .91-.05 1.34-.12C17.44 5.56 14.9 4 12 4c-.46 0-.91.05-1.34.12zM4.42 9.47c1.71-.97 3.03-2.55 3.66-4.44C6.37 6 5.05 7.58 4.42 9.47zM20 12c0-.78-.12-1.53-.33-2.24-.7.15-1.42.24-2.17.24-3.13 0-5.92-1.44-7.76-3.69C8.69 8.87 6.6 10.88 4 11.86c.01.04 0 .09 0 .14 0 4.41 3.59 8 8 8s8-3.59 8-8z" />
    </svg>
  ),
  [Const.titles.tech]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zm5.6 8H19v6h-2.8v-6z" />
    </svg>
  ),
  [Const.titles.projects]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z" />
    </svg>
  ),
  [Const.titles.experience]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
    </svg>
  ),
  [Const.titles.education]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z" />
    </svg>
  ),
  [Const.titles.contact]: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={h}
      viewBox="0 0 24 24"
      width={w}
      fill={fill}
    >
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
})

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
        <div style={{display: 'flex', paddingLeft: 58, paddingTop: 20}}>
          {svgs.slice(Math.floor(svgs.length / 2), svgs.length - 1).map((s) => (
            <div key={v4()}>{s}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const getSimpleSvgs = (size: number, theme: any) => {
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

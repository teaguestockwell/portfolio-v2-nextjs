import {v4} from 'uuid'
import {useTheme} from '../../hooks/use_theme'
import {Const} from '../../const'
import {
  getInteractiveSvgs,
  getSimpleSvgs,
  getSvgFromSimpleIcon,
  SvgScroll2,
} from '../svgs'
import {Video} from '../video'
import * as Types from '../../types/types'
import {useModalStore} from '../../hooks/use_modal'
import React from 'react'
import {usePortfolio} from '../../hooks/use_portfolio_context'
import github from 'simple-icons/icons/github'

const Repos = ({
  repos,
  theme,
}: {
  repos: {name: string; src: string}[]
  theme: any
}) => {
  const ref = React.useRef() as any
  React.useEffect(() => {
    ref.current.focus()
  }, [])

  return (
    <>
      <div
        style={{
          width: '100%',
          textAlign: 'center',
          fontSize: Const.fontSizes.lg,
          wordWrap: 'break-word',
          color: theme.fontColor0,
        }}
      >
        Git Repo
      </div>

      <div
        style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
      >
        {repos.map(({name, src}, i) => (
          <a
            tabIndex={-1}
            key={v4()}
            href={src}
            target="_blank"
            rel="noreferrer"
          >
            <button
              ref={i === 0 ? ref : undefined}
              className={`${theme.name}`}
              style={{
                width: 'fit-content',
                paddingLeft: Const.pad,
                paddingRight: Const.pad,
                marginTop: Const.pad,
                color: theme.fontColor1,
                fontSize: Const.fontSizes.md,
                wordWrap: 'break-word',
              }}
            >
              {name}
            </button>
          </a>
        ))}
      </div>
    </>
  )
}

// eslint-disable-next-line react/display-name
export const Project = React.memo(
  ({
    techName,
    name,
    subHeading,
    bullets,
    dateRange,
    svgs,
    repos,
    deploymentSrc,
    m3u8Src,
  }: Omit<Types.Project, 'id'> & {
    techName: string
  }) => {
    const theme = useTheme()
    const link = getInteractiveSvgs(theme.fontColor0, 36).link
    const portfolio = usePortfolio()
    const simpleSvgs = getSimpleSvgs(36, theme, true, portfolio.icons)

    const openModal = () => {
      useModalStore.setState({
        contentStyle: {minWidth: '30vw'},
        children: <Repos theme={theme} repos={repos} />,
      })
    }

    return (
      <>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              flex: '0 0 20%',
              padding: Const.pad,
            }}
          >
            <Video src={m3u8Src} key={m3u8Src} />
          </div>

          <div
            style={{
              position: 'relative',
              padding: Const.pad,
              width: '100%',
              flex: '1 0 52%',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                textAlign: 'center',
                color: theme.fontColor0,
                fontSize: Const.fontSizes.xl,
                wordWrap: 'break-word',
                textTransform: 'capitalize',
                fontWeight: 600,
                lineHeight: `${Const.fontSizes.xl}px`,
              }}
            >
              {name}
            </div>

            <div
              style={{
                marginTop: Const.pad,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'left',
                alignItems: 'flex-start',
                textAlign: 'left',
                color: theme.fontColor1,
                fontSize: Const.fontSizes.sm,
                wordWrap: 'break-word',
                overflowY: 'auto',
                maxHeight: 350,
              }}
            >
              <div>{dateRange}</div>

              <div style={{paddingTop: Const.pad}}>{subHeading}</div>

              <ul
                style={{
                  margin: 0,
                  marginLeft: -24,
                }}
              >
                {bullets.map((b) => {
                  return (
                    <li
                      key={b}
                      style={{
                        paddingTop: Const.pad,
                        color: theme.fontColor1,
                        fontSize: Const.fontSizes.sm,
                        textAlign: 'left',
                        wordWrap: 'break-word',
                      }}
                    >
                      {b}
                    </li>
                  )
                })}
              </ul>
            </div>

            <div style={{flex: 1}}></div>
            <div
              style={{
                display: 'grid',
                justifyContent: 'center',
              }}
            >
              <SvgScroll2
                key={v4()}
                svgs={svgs.map((key) => simpleSvgs[key])}
              />
            </div>
          </div>
        </div>

        <div style={{marginRight: Const.pad, marginLeft: Const.pad}}>
          <div
            key={v4()}
            style={{
              color: theme.fontColor1,
              marginBottom: Const.pad * 2,
              marginTop: Const.pad,
              borderTop: theme.border,
              width: '100%',
              display: 'flex',
            }}
          />

          <div
            style={{
              backgroundColor: theme.background1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}
          >
            {repos.length > 0 && (
              <button
                className="icon-hover"
                onClick={openModal}
                style={{
                  textAlign: 'center',
                  cursor: 'pointer',
                }}
              >
                {getSvgFromSimpleIcon(github, 30, theme.fontColor0)}
              </button>
            )}

            <a
              className="icon-hover"
              href={deploymentSrc}
              target="_blank"
              rel="noreferrer"
              aria-label={`${name} live deployment`}
            >
              {link}
            </a>
          </div>
        </div>
      </>
    )
  },
  () => true
)

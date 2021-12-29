import {guid} from '../../utils'
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
import {useTheme} from '../../hooks/use_theme_2'
import {Element} from 'react-scroll'

const Repos = ({repos}: {repos: {name: string; src: string}[]}) => {
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
          fontSize: Const.css.lg,
          wordWrap: 'break-word',
          color: Const.css.fc0,
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
            key={guid()}
            href={src}
            target="_blank"
            rel="noreferrer"
          >
            <button
              ref={i === 0 ? ref : undefined}
              style={{
                width: 'fit-content',
                paddingLeft: Const.pad,
                paddingRight: Const.pad,
                marginTop: Const.pad,
                color: Const.css.fc1,
                fontSize: Const.css.md,
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
    id,
  }: Types.Project & {
    techName: string
  }) => {
    const themeName = useTheme((s) => s.themeName)

    const link = getInteractiveSvgs(
      themeName === 'light' ? '#080510' : '#f3f2ef',
      36
    ).link
    const portfolio = usePortfolio()
    const simpleSvgs = getSimpleSvgs(36, themeName, true, portfolio.icons)

    const openModal = () => {
      useModalStore.setState({
        contentStyle: {minWidth: '30vw'},
        children: <Repos repos={repos} />,
      })
    }

    return (
      <>
        <Element name={id} key={id}>
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
                  color: Const.css.fc0,
                  fontSize: Const.css.xlg,
                  wordWrap: 'break-word',
                  textTransform: 'capitalize',
                  fontWeight: 600,
                  lineHeight: Const.css.xlg,
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
                  color: Const.css.fc1,
                  fontSize: Const.css.sm,
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
                          color: Const.css.fc1,
                          fontSize: Const.css.sm,
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
                  key={guid()}
                  svgs={svgs.map((key) => simpleSvgs[key])}
                />
              </div>
            </div>
          </div>

          <div style={{marginRight: Const.pad, marginLeft: Const.pad}}>
            <div
              key={guid()}
              style={{
                color: Const.css.fc1,
                marginBottom: Const.pad * 2,
                marginTop: Const.pad,
                borderTop: Const.css.border,
                width: '100%',
                display: 'flex',
              }}
            />

            <div
              style={{
                backgroundColor: Const.css.bgc1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
              }}
            >
              {repos.length > 0 && (
                <button
                  aria-label={'Github'}
                  className="icon-hover"
                  onClick={openModal}
                  style={{
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                >
                  {getSvgFromSimpleIcon(github, 30, Const.css.fc0)}
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
        </Element>
      </>
    )
  },
  () => true
)

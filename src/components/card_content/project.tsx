import React, {useState} from 'react'
import {v4} from 'uuid'
import {useThemeStore} from '../../hooks/use_theme'
import {Divider, Modal} from 'antd'
import {Github} from '@icons-pack/react-simple-icons'
import {LinkOutlined} from '@ant-design/icons'
import {Const} from '../../const'
import {SvgScroll} from '../svgs'
import {Video} from '../video'
import * as Types from '../../types'

export const Project = ({
  name,
  subHeading,
  bullets,
  dateRange,
  svgs,
  repos,
  deploymentSrc,
  m3u8Src,
}: Omit<Types.Project, 'svgs'> & {svgs: JSX.Element[]}) => {
  const [isModal, setIsModal] = useState(false)
  const theme = useThemeStore.getState().theme

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
            paddingTop: Const.pad,
            paddingRight: Const.pad,
            paddingLeft: Const.pad,
            flex: '0 0 20%',
          }}
        >
          <Video src={m3u8Src} />
        </div>

        <div
          style={{
            position: 'relative',
            paddingTop: Const.pad,
            paddingRight: Const.pad,
            paddingLeft: Const.pad,
            width: '100%',
            flex: '1 0 52%',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              color: theme.fontColor1,
              fontSize: Const.fontSizes.lg,
            }}
          >
            {name}
          </div>

          <div
            style={{
              textAlign: 'left',
              color: theme.fontColor1,
              fontSize: Const.fontSizes.sm,
            }}
          >
            {dateRange}
          </div>

          <div
            style={{
              textAlign: 'left',
              color: theme.fontColor1,
              fontSize: Const.fontSizes.sm,
              paddingTop: Const.pad,
            }}
          >
            {subHeading}
          </div>

          <ul
            style={{
              marginLeft: -24,
              marginBottom: 186,
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
                  }}
                >
                  {b}
                </li>
              )
            })}
          </ul>

          <div
            style={{
              position: 'absolute',
              bottom: 0,
            }}
          >
            <div
              style={{
                textAlign: 'center',
                color: theme.fontColor1,
                fontSize: Const.fontSizes.lg,
              }}
            >
              {Const.titles.tech}
            </div>

            <div style={{display: 'grid'}}>
              <SvgScroll svgs={svgs} />
            </div>
          </div>
        </div>
      </div>

      <div style={{marginRight: Const.pad, marginLeft: Const.pad}}>
        <Divider
          key={v4()}
          style={{
            backgroundColor: theme.fontColor2,
            marginBottom: Const.pad,
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
          <div
            className="icon-hover"
            onClick={() => setIsModal(!isModal)}
            style={{
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <Github color={theme.fontColor0} size={30} />
          </div>

          <div
            className="icon-hover"
            style={{
              textAlign: 'center',
              cursor: 'pointer',
            }}
          >
            <a href={deploymentSrc} target="_blank" rel="noreferrer">
              <LinkOutlined
                size={30}
                style={{color: theme.fontColor0, fontSize: 30}}
              />
            </a>
          </div>
        </div>
      </div>

      <Modal
        centered
        closeIcon={null}
        footer={null}
        title={null}
        closable={false}
        bodyStyle={{
          backgroundColor: theme.background2,
          borderRadius: Const.rad,
        }}
        visible={isModal}
        onCancel={() => setIsModal(false)}
      >
        <>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: Const.fontSizes.md,
              color: theme.fontColor1,
            }}
          >
            Git Repo
          </div>
          {repos.map(({name, src}) => (
            <a key={v4()} href={src} target="_blank" rel="noreferrer">
              <div
                style={{
                  paddingTop: Const.pad / 2,
                  paddingBottom: Const.pad / 2,
                  color: theme.fontColor1,
                  fontSize: Const.fontSizes.sm,
                }}
              >
                {name}
              </div>
            </a>
          ))}
        </>
      </Modal>
    </>
  )
}

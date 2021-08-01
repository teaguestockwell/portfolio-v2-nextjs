import React, {useState} from 'react'
import {v4} from 'uuid'
import {useThemeStore} from '../hooks/use_theme'
import {Divider, Modal} from 'antd'
import {Github} from '@icons-pack/react-simple-icons'
import {LinkOutlined} from '@ant-design/icons'
import {Const} from '../const'
import {SvgScroll} from './svg_scroll'
import {Video} from './video'

export const Project = ({
  name,
  shortDescription,
  longDescription,
  svgs,
  repoSrc,
  deploymentSrc,
  src,
}: {
  name: string
  shortDescription: string
  longDescription: string
  svgs: JSX.Element[]
  repoSrc: {name: string; src: string}[] // fullstack apps may have more than 1 repo
  deploymentSrc: string
  src: string
}) => {
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
            flex: '0 0 50%',
          }}
        >
          <Video src={src} />
        </div>

        <div
          style={{
            paddingTop: Const.pad,
            width: '100%',
            flex: '1 0 50%',
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
              paddingTop: Const.pad,
            }}
          >
            {shortDescription}
          </div>

          <div
            style={{
              paddingTop: Const.pad,
              color: theme.fontColor1,
              fontSize: Const.fontSizes.sm,
              textAlign: 'left',
            }}
          >
            {longDescription}
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Const.pad,
          textAlign: 'center',
          color: theme.fontColor1,
          fontSize: Const.fontSizes.lg,
        }}
      >
        {'Technologies'}
      </div>

      <SvgScroll svgs={svgs} />

      <Divider
        key={v4()}
        style={{
          backgroundColor: theme.fontColor1,
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
            Repos
          </div>
          {repoSrc.map(({name, src}) => (
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

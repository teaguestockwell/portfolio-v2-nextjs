import React, {useState} from 'react'
import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'
import {Col, Divider, Modal, Row} from 'antd'
import {Github} from '@icons-pack/react-simple-icons'
import {DownOutlined, UpOutlined, LinkOutlined} from '@ant-design/icons'
import {useExpanded, useExpandedAtKey} from '../hooks/use_expanded'
import {Const} from '../const'

export interface Project {
  name: string
  shortDescription: string
  longDescription: string
  svgs: JSX.Element[]
  repoSrc: {name: string; src: string}[] // fullstack apps may have more than 1 repo
  deploymentSrc: string
  video: JSX.Element
}

const s = useExpanded.getState()
export const Project = ({
  name,
  shortDescription,
  longDescription,
  svgs,
  repoSrc,
  deploymentSrc,
  video,
}: Project) => {
  const [isModal, setIsModal] = useState(false)
  const isExpanded = useExpandedAtKey(name)
  const theme = useTheme.getState().theme

  return (
    <>
      <div
        style={{
          WebkitBoxShadow: theme.shadow,
          MozBoxShadow: theme.shadow,
          boxShadow: theme.shadow,
          paddingTop: 15,
          paddingLeft: Const.pad / 2,
          paddingRight: Const.pad / 2,
          marginTop: Const.pad,
          backgroundColor: theme.background1,
          borderRadius: Const.rad,
          position: 'relative',
        }}
      >
        {video}

        <div
          style={{
            paddingTop: Const.pad / 2,
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
            paddingTop: Const.pad / 2,
            paddingBottom: isExpanded ? 0 : Const.pad,
          }}
        >
          {shortDescription}
        </div>

        {isExpanded && (
          <>
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

            <ItemGrid
              items={svgs}
              outerStyle={{paddingTop: Const.pad}}
              getCell={(child) => child}
            />
          </>
        )}

        <Divider
          key={v4()}
          style={{
            backgroundColor: theme.fontColor1,
            marginBottom: Const.pad,
          }}
        />

        <Row
          style={{backgroundColor: theme.background1, paddingBottom: Const.pad}}
          justify="center"
        >
          <Col
            className="icon-hover"
            span={8}
            onClick={() => setIsModal(!isModal)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <Github color={theme.fontColor0} size={24} />
          </Col>

          <Col
            className="icon-hover"
            span={8}
            onClick={() => s.setExpanded(name, !isExpanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            {isExpanded ? (
              <UpOutlined style={{color: theme.fontColor0}} size={24} />
            ) : (
              <DownOutlined style={{color: theme.fontColor0}} size={24} />
            )}
          </Col>

          <Col
            span={8}
            className="icon-hover"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
            }}
          >
            <a href={deploymentSrc} target="_blank" rel="noreferrer">
              <LinkOutlined size={24} style={{color: theme.fontColor0}} />
            </a>
          </Col>
        </Row>
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

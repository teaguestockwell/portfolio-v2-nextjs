import React, {useState} from 'react'
import {v4} from 'uuid'
import {useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'
import {Col, Divider, Modal, Row} from 'antd'
import {Github} from '@icons-pack/react-simple-icons'
import {DownOutlined, UpOutlined, LinkOutlined} from '@ant-design/icons'
import {useExpanded, useExpandedAtKey} from '../hooks/use_expanded'

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
          paddingTop: theme.pad.l / 2,
          paddingInline: theme.pad.l / 2,
          marginTop: theme.pad.l,
          backgroundColor: theme.background1,
          borderRadius: theme.rad.card,
          position: 'relative',
        }}
      >
        {video}

        <div
          style={{
            top: 0,
            textAlign: 'center',
            color: theme.fontColor1,
            fontSize: theme.fontSizes.lg,
          }}
        >
          {name}
        </div>

        <div
          style={{
            textAlign: 'left',
            color: theme.fontColor1,
            fontSize: theme.fontSizes.sm,
            paddingTop: 12,
            paddingBottom: isExpanded ? 0 : 20,
          }}
        >
          {shortDescription}
        </div>

        {isExpanded && (
          <>
            <div
              style={{
                paddingTop: 20,
                color: theme.fontColor1,
                fontSize: theme.fontSizes.sm,
                textAlign: 'left',
              }}
            >
              {longDescription}
            </div>

            <ItemGrid
              items={svgs}
              outerStyle={{paddingTop: 12}}
              getCell={(child) => child}
            />
          </>
        )}

        <Divider
          key={v4()}
          style={{
            backgroundColor: theme.fontColor1,
            margin: '0px 0px 20px 0px',
          }}
        />

        <Row
          style={{backgroundColor: theme.background1, paddingBottom: 10}}
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
          borderRadius: theme.rad.card,
        }}
        visible={isModal}
        onCancel={() => setIsModal(false)}
      >
        <>
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              fontSize: theme.fontSizes.md,
              color: theme.fontColor1,
            }}
          >
            Repos
          </div>
          {repoSrc.map(({name, src}) => (
            <a key={v4()} href={src} target="_blank" rel="noreferrer">
              <div
                style={{
                  padding: '10px 0px 10px 0px',
                  color: theme.fontColor1,
                  fontSize: theme.fontSizes.sm,
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

import React, {useState} from 'react'
import {v4} from 'uuid'
import {Const} from '../const'
import {useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'
import {Col, Divider, Modal, Row} from 'antd'
import {Github} from '@icons-pack/react-simple-icons'
import {DownOutlined, UpOutlined, LinkOutlined} from '@ant-design/icons'

export interface Project {
  name: string
  shortDescription: string
  longDescription: string
  svgs: JSX.Element[]
  repoSrc: {name: string; src: string}[] // fullstack apps may have more than 1 repo
  deploymentSrc: string
  mediaSrc: string
}

export const Project = ({
  name,
  shortDescription,
  longDescription,
  svgs,
  repoSrc,
  deploymentSrc,
  mediaSrc,
}: Project) => {
  const [isModal, setIsModal] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
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
          maxWidth: Const.maxWidth,
          position: 'relative',
        }}
      >
        <div
          style={{
            content: `url(${mediaSrc})`,
            width: '100%',
          }}
        />

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
          }}
        >
          {shortDescription}
        </div>

        {isExpanded && (
          <>
            <div
              style={{
                color: theme.fontColor1,
                fontSize: theme.fontSizes.sm,
                textAlign: 'left',
              }}
            >
              {longDescription}
            </div>

            <ItemGrid items={svgs} outerStyle={{}} getCell={(child) => child} />
          </>
        )}

        <Divider
          key={v4()}
          style={{
            backgroundColor: theme.fontColor1,
            margin: '10px 0px 20px 0px',
          }}
        />

        <Row style={{backgroundColor: theme.background1}} justify="center">
          <Col span={8} style={{textAlign: 'center'}}>
            <div className="icon-hover" style={{cursor: 'pointer'}}>
              <Github
                color={theme.fontColor0}
                size={24}
                onClick={() => setIsModal(!isModal)}
              />
            </div>
          </Col>

          <Col span={8} style={{textAlign: 'center'}}>
            <div className="icon-hover" style={{cursor: 'pointer'}}>
              {isExpanded ? (
                <UpOutlined
                  style={{color: theme.fontColor0}}
                  size={24}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              ) : (
                <DownOutlined
                  style={{color: theme.fontColor0}}
                  size={24}
                  onClick={() => setIsExpanded(!isExpanded)}
                />
              )}
            </div>
          </Col>

          <Col span={8} style={{textAlign: 'center'}}>
            <a
              className="icon-hover"
              style={{cursor: 'pointer'}}
              href={deploymentSrc}
              target="_blank"
              rel="noreferrer"
            >
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

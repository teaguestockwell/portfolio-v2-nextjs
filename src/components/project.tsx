import React, {useState} from 'react'
import {v4} from 'uuid'
import {Const} from '../const'
import {light, useTheme} from '../hooks/use_theme'
import {ItemGrid} from './item_grid'
import {Col, Collapse, Popover, Row} from 'antd'
import {Github} from '@icons-pack/react-simple-icons'
import {DownOutlined, UpOutlined} from '@ant-design/icons'

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
  const [isExpanded, setIsExpanded] = useState(false)
  const theme = useTheme.getState().theme

  return (
    <Collapse
      onChange={() => setIsExpanded(!isExpanded)}
      activeKey={isExpanded ? '1' : undefined}
      expandIcon={() => (
        <div>
          {isExpanded ? (
            <UpOutlined
              style={{color: theme.fontColor0}}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          ) : (
            <DownOutlined
              style={{color: theme.fontColor0}}
              onClick={() => setIsExpanded(!isExpanded)}
            />
          )}
        </div>
      )}
      ghost
      key={v4()}
      style={{
        WebkitBoxShadow: theme.shadow,
        MozBoxShadow: theme.shadow,
        boxShadow: theme.shadow,
        padding: theme.pad.l / 2,
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

      <Collapse.Panel
        key={'1'}
        header={<div style={{color: theme.fontColor1}}>About</div>}
        style={{
          color: theme.fontColor1,
          fontSize: theme.fontSizes.md,
          padding: 0,
        }}
      >
        <div
          style={{
            color: theme.fontColor1,
            fontSize: theme.fontSizes.sm,
          }}
        >
          {longDescription}
        </div>
        <ItemGrid items={svgs} outerStyle={{}} getCell={(child) => child} />
      </Collapse.Panel>

      <Row style={{backgroundColor: theme.background1}}>
        <Col span={8} style={{textAlign: 'center'}}>
          <Popover
            style={{
              backgroundColor: theme.background2,
              WebkitBoxShadow: theme.shadow,
              MozBoxShadow: theme.shadow,
              boxShadow: theme.shadow,
            }}
            title="Repositories"
            placement="bottom"
            content={
              <div>
                {repoSrc.map(({name, src}) => (
                  <a key={v4()} href={src} target="_blank" rel="noreferrer">
                    <div
                      style={{
                        color: light.fontColor1,
                        fontSize: theme.fontSizes.sm,
                      }}
                    >
                      {name}
                    </div>
                  </a>
                ))}
              </div>
            }
          ></Popover>
          <Github color={theme.fontColor0} size={24} />
        </Col>
      </Row>
    </Collapse>
  )
}

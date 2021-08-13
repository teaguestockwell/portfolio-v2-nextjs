/* eslint-disable @next/next/no-img-element */
import {VerticalTimelineElement} from 'react-vertical-timeline-component'
import {Const} from '../../const'
import {useTheme} from '../../hooks/use_theme'
import * as Types from '../../types/types'
import Image from 'next/image'

export const Job = ({job}: {job: Types.Job}) => {
  const theme = useTheme()

  const contentStyle = {
    background: theme.background1,
    color: theme.fontColor1,
    // borderTop: `3px solid ${theme.fontColor1}`,
    boxShadow: theme.shadow !== '' ? theme.shadow : '0px #fff',
    borderRadius: Const.rad,
  }

  const arrowStyle = {
    borderRight: `7px solid ${theme.background1}`,
  }

  const iconStyle = {
    background: theme.background1,
    boxShadow: `none`,
  }

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={contentStyle}
      contentArrowStyle={arrowStyle}
      iconStyle={iconStyle}
      date={job.dateRange}
      icon={
        <img
          src={job.imgSrc}
          style={{width: '100%', height: '100%', borderRadius: Const.rad}}
          alt={`${job.company} logo`}
        />
      }
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          fontSize: Const.fontSizes.lg,
          color: theme.fontColor1,
          fontWeight: 400,
        }}
      >
        {job.name}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          fontSize: Const.fontSizes.md,
          color: theme.fontColor1,
          fontWeight: 300,
        }}
      >
        {job.company}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'left',
          fontSize: Const.fontSizes.md,
          color: theme.fontColor1,
          fontWeight: 300,
        }}
      >
        {job.description}
      </div>
    </VerticalTimelineElement>
  )
}

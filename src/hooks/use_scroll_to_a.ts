import React from 'react'
import {Const} from '../const'
import {scroller} from 'react-scroll'

//https://github.com/vercel/next.js/issues/11109
export const UseScrollToA = () =>
  React.useEffect(() => {
    if (window.location.href && window.location.href.includes('#')) {
      setTimeout(() => {
        const id = window.location.href.split('#')[1]
        window.location.href.replace('#', '')
        scroller.scrollTo(id, {
          duration: 400,
          smooth: true,
          offset: -80,
        })
      }, 300)
    }
  })

import React from 'react'
import {Const} from '../const'

//https://github.com/vercel/next.js/issues/11109
export const UseScrollToA = () =>
  React.useEffect(() => {
    const path = window.location.hash
    if (path && path.includes('#')) {
      setTimeout(() => {
        const id = path.replace('#', '')
        const el = window.document.getElementById(id)
        const r = el?.getBoundingClientRect() as any
        ;(window as any).top.scroll({
          top: scrollY + r.top - Const.topNav,
          behavior: 'smooth',
        })
      }, 600)
    }
  })

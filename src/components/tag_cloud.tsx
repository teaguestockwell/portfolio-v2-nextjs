/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'
import {v4} from 'uuid'
import {getSimpleSvgs} from './svgs'
import {useTheme} from '../hooks/use_theme'
import ReactDOMServer from 'react-dom/server'
import colorConvert from 'color-convert'
import {useEffect, useRef} from 'react'
import {Const} from '../const'
import {useVisible} from 'react-hooks-visible'

export const TagCloud = ({svgKeys}: {svgKeys: string[]}) => {
  const [ref, visible] = useVisible((vi: number) => vi > 0.3)
  const isLoaded = useRef({loaded: false}).current
  const theme = useTheme()
  const size = 42
  const svgs = getSimpleSvgs(size, theme, false)
  const svgHtmls = svgKeys.map((k) => {
    const svgNode = svgs[k]
    const svg = ReactDOMServer.renderToStaticMarkup(svgNode)
    const firstSvgClosingBracket = svg.indexOf('>')
    const hexIndex = svg.indexOf('#')
    const hex = svg.substring(hexIndex, hexIndex + 7)
    const restOfSvg = svg.slice(firstSvgClosingBracket + 1)
    const [r, g, b] = colorConvert.hex.rgb(hex)
    return {
      html: `data:image/svg+xml;utf8,<svg style="fill: rgb(${r}, ${g}, ${b});" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 24 24"  xml:space="preserve" height="${size}px" width="${size}px">${restOfSvg}`,
      title: k,
    }
  })

  const loadTagCanvas = () =>
    eval(
      `
        try {
        TagCanvas.Start('myCanvas','tags',{
          textColour: '#0000',
          outlineColour: '#0000',
          reverse: true,
          depth: 1,
          maxSpeed: 0.05,
          wheelZoom: false,
          imageScale: 2,
          activeCursor: 'default',
          tooltip: 'native',
          initial: [0.1,-0.1]
        });
      } catch(e) {
        // something went wrong, hide the canvas container
        document.getElementById('myCanvasContainer').style.display = 'none';
      } 
    `
    )

  // given the canvas is loaded, when the theme is changed, then update the tags to change fallback color
  useEffect(() => {
    if (isLoaded.loaded) {
      eval(`TagCanvas.Reload("myCanvas")`)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme.name])

  // given the canvas is loaded, when it is not visible, then stop the canvas
  // given the canvas is loaded, when it is visible, then start the canvas
  useEffect(() => {
    if (isLoaded.loaded) {
      if (visible) {
        eval(`TagCanvas.Resume("myCanvas")`)
      } else {
        eval(`TagCanvas.Pause("myCanvas")`)
      }
    }
  }, [visible, isLoaded.loaded])

  return (
    <>
      <Script
        id="stripe-js"
        src="/tagcanvas.js"
        onLoad={() => {
          // when the script is loaded, load the canvas, and pause the animation
          loadTagCanvas()
          isLoaded.loaded = true
          eval(`TagCanvas.Pause("myCanvas")`)
        }}
      />
      <div ref={ref as any}>
        <div
          id="myCanvasContainer"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: Const.pad * 2,
            marginRight: Const.pad * 2,
          }}
        >
          <canvas
            width="1000"
            height="1000"
            style={{width: '100%', maxWidth: '70vh'}}
            id="myCanvas"
          >
            <p>
              Anything in here will be replaced on browsers that support the
              canvas element
            </p>
          </canvas>
        </div>
      </div>

      <div id="tags" style={{fontSize: '70%', display: 'none'}}>
        {svgHtmls.map((html) => (
          <a key={v4()} onClick={(e) => e.preventDefault()}>
            <img height={size} alt="simple" width={size} src={html.html} />
          </a>
        ))}
      </div>
    </>
  )
}

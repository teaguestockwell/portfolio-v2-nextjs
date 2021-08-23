/* eslint-disable @next/next/no-img-element */
import Script from 'next/script'
import {v4} from 'uuid'
import {getSimpleSvgs} from './svgs'
import {useTheme} from '../hooks/use_theme'
import ReactDOMServer from 'react-dom/server'
import colorConvert from 'color-convert'

export const TagCloud = ({svgKeys}: {svgKeys: string[]}) => {
  const theme = useTheme()
  const size = 50
  const svgs = getSimpleSvgs(size, theme, false)
  const svgHtmls = svgKeys.map((k) => {
    const svgNode = svgs[k]
    const svg = ReactDOMServer.renderToStaticMarkup(svgNode)
    const firstSvgClosingBracket = svg.indexOf('>')
    const hexIndex = svg.indexOf('#')
    const hex = svg.substring(hexIndex, hexIndex + 7)
    const restOfSvg = svg.slice(firstSvgClosingBracket + 1)
    const [r, g, b] = colorConvert.hex.rgb(hex)
    return `data:image/svg+xml;utf8,<svg style="fill: rgb(${r}, ${g}, ${b});" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 ${size} ${size}" enable-background="new 0 0 ${size} ${size}" xml:space="preserve" height="${size}px" width="${size}px">${restOfSvg}`
  })

  return (
    <>
      <Script
        id="stripe-js"
        src="https://www.goat1000.com/tagcanvas.min.js"
        onLoad={() => {
          eval(`
            console.log('loaded')
            
            try {
              TagCanvas.Start('myCanvas','tags',{
                textColour: '#0000',
                outlineColour: '#0000',
                reverse: true,
                depth: 1,
                maxSpeed: 0.05,
                wheelZoom: false,
                imageScale: 2,
              });
            } catch(e) {
              // something went wrong, hide the canvas container
              document.getElementById('myCanvasContainer').style.display = 'none';
            } 
            `)
        }}
      />

      <div id="myCanvasContainer">
        <canvas
          width="1000"
          height="1000"
          style={{width: '100%'}}
          id="myCanvas"
        >
          <p>
            Anything in here will be replaced on browsers that support the
            canvas element
          </p>
        </canvas>
      </div>

      <div id="tags" style={{fontSize: '50%'}}>
        {svgHtmls.map((html) => (
          <a key={v4()} onClick={(e) => e.preventDefault()}>
            <img height={size} alt="simple" width={size} src={html} />
          </a>
        ))}
      </div>
    </>
  )
}

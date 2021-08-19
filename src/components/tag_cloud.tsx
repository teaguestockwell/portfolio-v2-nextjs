import Script from 'next/script'

export const TagCloud = () => {
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
                textColour: '#ff0000',
                outlineColour: '#ff00ff',
                reverse: true,
                depth: 0.8,
                maxSpeed: 0.05
              });
            } catch(e) {
              // something went wrong, hide the canvas container
              document.getElementById('myCanvasContainer').style.display = 'none';
            } 
            `)
        }}
      />

      <div id="myCanvasContainer">
        <canvas width="300" height="300" id="myCanvas">
          <p>
            Anything in here will be replaced on browsers that support the
            canvas element
          </p>
        </canvas>
      </div>

      <div id="tags" style={{fontSize: '50%'}}>
        <a style={{color: 'black', fontSize: 20}}>1000</a>
        <a style={{color: 'black', fontSize: 20}}>1001</a>
        <a style={{color: 'black', fontSize: 20}}>1002</a>
        <a style={{color: 'black', fontSize: 20}}>1003</a>
        <a style={{color: 'black', fontSize: 20}}>1004</a>
        <a style={{color: 'black', fontSize: 20}}>1005</a>
      </div>
    </>
  )
}

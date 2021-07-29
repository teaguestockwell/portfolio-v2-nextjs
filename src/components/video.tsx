import {useEffect, useRef} from 'react'
import videojs, {VideoJsPlayer} from 'video.js'

export const Video = ({src}: {src: string}) => {
  const videoRef = useRef(null)

  // This seperate functional component fixes the removal of the videoelement
  // from the DOM when calling the dispose() method on a player
  const VideoHtml = () => (
    <div
      style={{
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          width: 'fit-content',
          borderRadius: 10,
          overflow: 'hidden',
          WebkitTransform: 'translateZ(0)',
          aspectRatio: '6/13', // I Phone X
        }}
      >
        <div data-vjs-player>
          <video
            ref={videoRef}
            className="video-js vjs-big-play-centered"
            style={{maxWidth: '100%', maxHeight: '100%'}}
          />
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    const videoElement = videoRef.current
    let player: VideoJsPlayer
    if (videoElement) {
      player = videojs(
        videoElement,
        {
          autoplay: 'muted',
          controls: true,
          responsive: false,
          fluid: false,
          loop: true,
          height: 800,
          playbackRates: [1, 2, 4, 8],
          sources: [
            {
              src,
              type: 'application/x-mpegurl',
            },
          ],
        },
        () => {
          console.log('player is ready')
        }
      )
    }
    return () => {
      if (player) {
        player.dispose()
      }
    }
  }, [src])

  return <VideoHtml />
}

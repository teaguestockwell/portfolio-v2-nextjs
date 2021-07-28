import {useEffect, useRef} from 'react'
import videojs, {VideoJsPlayer} from 'video.js'
// TODO: if more pages are added, import this within app component
import 'video.js/dist/video-js.css'

export const Video = ({
  src,
  type = 'video/mp4',
}: {
  src: string
  type?: 'video/mp4' | 'application/x-mpegurl'
}) => {
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
        }}
      >
        <div data-vjs-player>
          <video ref={videoRef} className="video-js vjs-big-play-centered" />
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
              type,
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
  }, [src, type])

  return <VideoHtml />
}

/* eslint-disable react/display-name */
import {useEffect, useRef, useState} from 'react'
import videojs from 'video.js'
import {useVisible} from 'react-hooks-visible'
import React from 'react'
import Lazy from 'react-lazyload'

export const Video = ({src, w, h}: {src: string; w?: number; h?: number}) => {
  return (
    <Lazy height={'70vh'}>
      <Video2 src={src} w={w} h={h} />
    </Lazy>
  )
}

export const Video2 = React.memo(
  ({src, w, h}: {src: string; w?: number; h?: number}) => {
    const videoRef = useRef(null)
    const [player, setPlayer] = useState<any>(null)
    const [ref, visible] = useVisible((vi: number) => vi > 0.3)

    // This separate functional component fixes the removal of the video element
    // from the DOM when calling the dispose() method on a player
    const VideoHtml = useRef(
      <div data-vjs-player ref={ref as any}>
        <video
          muted
          ref={videoRef}
          className="video-js vjs-big-play-centered"
          playsInline
          style={{
            height: h ? h : '70vh',
            // aspectRatio: '6/13', // I Phone X
            borderRadius: 10,
            width: w ? 'auto' : 'calc(70vh * .4615)',
          }}
        />
      </div>
    )

    useEffect(() => {
      const videoElement = videoRef.current

      if (videoElement) {
        setPlayer(
          videojs(
            videoElement,
            {
              //autoplay: 'muted',
              controls: true,
              controlBar: {
                volumePanel: false,
              },
              responsive: false,
              fluid: false,
              loop: true,
              height: h ? h : 800,
              width: w ? w : undefined,
              playbackRates: [1, 2, 4, 8],
              sources: [
                {
                  src,
                  type: 'application/x-mpegurl',
                },
              ],
            },
            () => {}
          )
        )
      }
      return () => {
        if (player) {
          player.dispose()
        }
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src])

    // given the visible hook fires,
    // play video only when in the viewport
    useEffect(() => {
      if (player) {
        if (!visible && !player.paused()) {
          player.pause()
        }

        if (visible && player.paused()) {
          player.play()
        }
      }
    }, [visible, player])

    return VideoHtml.current
  }
)

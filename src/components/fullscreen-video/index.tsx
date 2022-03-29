import React, { useRef, useEffect } from 'react'
import classNames from 'classnames'
import videojs from 'video.js'
import { videoStyle } from './index.css'
import 'video.js/dist/video-js.css'

interface IVideoPlayerProps {
  options: videojs.PlayerOptions
  customStyle?: string
  onReady?: (player: videojs.Player | undefined) => void
}

const initialOptions: videojs.PlayerOptions = {
  controls: true,
  fluid: true,
  responsive: true,
  controlBar: {
    fullscreenToggle: true,
    volumePanel: {
      inline: false
    }
  }
}

const VideoPlayer: React.FC<IVideoPlayerProps> = ({ options, onReady }) => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const playerRef = useRef<videojs.Player>()

  useEffect(() => {
    const videoNode = videoRef?.current as Element

    if (!playerRef.current) {
      playerRef.current = videojs(
        videoNode,
        {
          ...initialOptions,
          ...options
        },
        () => {
          playerRef.current?.bigPlayButton?.on('click', () => {
            playerRef.current?.requestFullscreen()
          })

          playerRef.current?.on('ended', () => {
            playerRef?.current?.exitFullscreen()
          })

          onReady && onReady(playerRef.current)
        }
      )
    }

    return () => {
      if (playerRef.current) {
        playerRef.current.dispose()
        playerRef.current = undefined
      }
    }
  }, [onReady, options])

  return (
    <video
      ref={videoRef}
      className={classNames('video-js', 'vjs-big-play-centered', videoStyle)}
    >
      <track default kind="captions" />
    </video>
  )
}

export default VideoPlayer

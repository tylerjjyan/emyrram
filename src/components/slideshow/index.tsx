import React, { useState, useEffect } from 'react'
import classNames from 'classnames'
import { slide, slideshow, slideshowSlider, slideshowImage } from './index.css'

interface SlideshowProps {
  images: string[]
  customContainer?: string
}

const Slideshow: React.FC<SlideshowProps> = ({
  images = [],
  customContainer
}): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null)

  const resetTimeout = (): void => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () => setCurrentIndex((currentIndex + 1) % images.length),
      3000
    )

    return () => {
      resetTimeout()
    }
  }, [currentIndex, images.length])

  return (
    <div className={classNames(slideshow, customContainer)}>
      <div
        className={slideshowSlider}
        style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className={slide} key={index}>
            <img src={image} alt="" className={slideshowImage} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Slideshow

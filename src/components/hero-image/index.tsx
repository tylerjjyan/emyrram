import React from 'react'
import Image from 'next/image'
import { heroWrapper, image } from './index.css'

interface HeroImageProps {
  src: string
}

const HeroImage: React.FC<HeroImageProps> = ({
  src,
  children
}): JSX.Element => {
  return (
    <div className={heroWrapper}>
      <Image
        className={image}
        src={src}
        objectFit="cover"
        layout="fill"
        width="100%"
        height="100%"
        priority
      />
      {children}
    </div>
  )
}

export default HeroImage

import React from 'react'
import Image from 'next/image'
import { heroWrapper, image } from './index.css'

interface HeroImageProps {
  src: string
}

const HeroImage: React.FC<HeroImageProps> = ({ src }): JSX.Element => {
  return (
    <div className={heroWrapper}>
      <Image className={image} src={src} />
    </div>
  )
}

export default HeroImage

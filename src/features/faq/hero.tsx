import { Heading } from '@/components/typography'
import React from 'react'
import { headerWrapper, textWrapper } from './hero.css'

const Hero = (): JSX.Element => {
  return (
    <div className={headerWrapper}>
      <div className={textWrapper}>
        <Heading text="Frequently Asked Questions" variant="h1" />
      </div>
    </div>
  )
}

export default Hero

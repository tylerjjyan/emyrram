import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import VideoPlayer from '@/components/fullscreen-video'
import { sectionWrapper, textWrapper } from './section-one.css'

const videoJsOptions = {
  sources: [
    {
      src: '//vjs.zencdn.net/v/oceans.mp4',
      type: 'video/mp4'
    }
  ]
}

const Home = (): JSX.Element => {
  return (
    <div className={sectionWrapper}>
      <div className={textWrapper}>
        <Heading
          variant="h2"
          text="A faster way to achieve your business goals"
          marginBottom="16px"
        />
        <Paragraph
          variant="medium"
          text={`Our purpose-built kitchens are designed for delivery, optimally located
        in high population density areas, and at a fraction of the cost and time
        needed to open a traditional brick & mortar restaurant.`}
        />
      </div>
      <VideoPlayer options={videoJsOptions} />
    </div>
  )
}

export default Home

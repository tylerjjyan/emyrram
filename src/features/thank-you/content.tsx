import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import { Button } from '@/components/button'
import { thankYouWrapper, svgWrapper } from './content.css'
import { ReactComponent as DeliverySVG } from './delivery.svg'

const ThankYouContent = (): JSX.Element => {
  return (
    <div className={thankYouWrapper}>
      <div className={svgWrapper}>
        <DeliverySVG />
      </div>
      <div>
        <Heading
          variant="h2"
          text="Thank you for your interest in Club Kitchen!"
          marginBottom="16px"
        />
        <Paragraph
          variant="large"
          text="We’ve sent a confirmation to the email address provided. We’ll be in touch soon to follow up."
          marginBottom="48px"
        />
        <Button
          text="Back to dashboard"
          variant={{ type: 'primary', size: 'large' }}
        />
      </div>
    </div>
  )
}

export default ThankYouContent

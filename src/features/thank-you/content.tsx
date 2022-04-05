import React from 'react'
import { useRouter } from 'next/router'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import { Button } from '@/components/button'
import { thankYouWrapper, svgWrapper } from './content.css'
import { ReactComponent as DeliverySVG } from './delivery.svg'

const ThankYouContent = (): JSX.Element => {
  const router = useRouter()
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
          style={textSprinkles({ typeSize: ['h2', 'h4'] })}
        />
        <Paragraph
          variant="large"
          text="We’ve sent a confirmation to the email address provided. We’ll be in touch soon to follow up."
          style={textSprinkles({
            typeSize: ['large', 'medium'],
            marginBottom: ['48px', '32px']
          })}
        />
        <Button
          onClick={() => router.push('/')}
          text="Back to dashboard"
          variant={{ type: 'primary', size: 'large' }}
        />
      </div>
    </div>
  )
}

export default ThankYouContent

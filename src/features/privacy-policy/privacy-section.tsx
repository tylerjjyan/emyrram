import React from 'react'
import { Heading, textSprinkles } from '@/components/typography'
import { privacySectionWrapper } from './index.css'

interface PrivacySectionProps {
  title: string
}

const PrivacySection: React.FC<PrivacySectionProps> = ({
  title,
  children
}): JSX.Element => {
  return (
    <div className={privacySectionWrapper}>
      <Heading
        variant="h4"
        text={title}
        marginBottom="16px"
        style={textSprinkles({ typeSize: ['h4', 'h6'] })}
      />
      {children}
    </div>
  )
}

export default PrivacySection

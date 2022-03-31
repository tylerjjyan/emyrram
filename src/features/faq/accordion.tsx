import { Heading, Paragraph } from '@/components/typography'
import React, { useState } from 'react'
import {
  accordionWrapper,
  titleVariants,
  contentWrapper
} from './accordion.css'
import { ReactComponent as ArrowDownSVG } from './arrow-down.svg'

interface AccordionProps {
  title: string
  content: string
}

const FAQAccordion: React.FC<AccordionProps> = ({
  title,
  content
}): JSX.Element => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className={accordionWrapper}>
      <div
        role="button"
        tabIndex={0}
        className={titleVariants[isActive ? 'active' : 'inactive']}
        onClick={() => setIsActive(!isActive)}
        onKeyDown={() => setIsActive(!isActive)}
      >
        <Heading variant="h6" text={title} />
        <ArrowDownSVG />
      </div>
      {isActive && (
        <div className={contentWrapper}>
          <Paragraph variant="medium" text={content} />
        </div>
      )}
    </div>
  )
}

export default FAQAccordion
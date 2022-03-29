import React from 'react'
import classNames from 'classnames'
import { assignInlineVars } from '@vanilla-extract/dynamic'
import { containerVars, innerWrapper, outerVariants } from './index.css'

interface PageSectionProps {
  maxWidth?: string
  padding?: string
  backgroundTheme?: keyof typeof outerVariants
  customStyle?: string
}

const PageSection: React.FC<PageSectionProps> = ({
  maxWidth = '1440px',
  backgroundTheme = 'white',
  customStyle,
  children
}): JSX.Element => {
  return (
    <div className={outerVariants[backgroundTheme]}>
      <div
        className={classNames(innerWrapper, customStyle)}
        style={assignInlineVars(containerVars.container, {
          maxWidth: maxWidth
        })}
      >
        {children}
      </div>
    </div>
  )
}
export default PageSection

import React from 'react'
import { Heading, Paragraph, textSprinkles } from '@/components/typography'
import Drawer from 'react-modern-drawer'
import Form from './form'
import 'react-modern-drawer/dist/index.css'
import { ReactComponent as XCircleSVG } from './x-circle.svg'
import { sidebarContainer, svgWrapper } from './index.css'
import { useTranslation } from 'next-i18next'

interface ContactUsProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const ContactUsSidebar: React.FC<ContactUsProps> = ({
  isOpen,
  toggleSidebar
}) => {
  const { t } = useTranslation()
  return (
    <Drawer
      open={isOpen}
      onClose={toggleSidebar}
      direction="right"
      className={sidebarContainer}
      style={{ maxWidth: '509px', width: '100vw', height: '100%' }}
    >
      <div className={svgWrapper}>
        <XCircleSVG onClick={toggleSidebar} />
      </div>
      <Heading
        text={t('contact_us.form.title', 'Contact Us')}
        variant="h5"
        marginBottom="8px"
      />
      <Paragraph
        text={t(
          'contact_us.form.text',
          `We’re happy to connect with great restaurants looking for their next
      opportunity to grow.`
        )}
        variant="medium"
        style={textSprinkles({ marginBottom: ['32px', '16px'] })}
      />

      <Form />
    </Drawer>
  )
}

export default ContactUsSidebar

import React from 'react'
import { Heading, Paragraph } from '@/components/typography'
import Drawer from 'react-modern-drawer'
import Form from './form'
import 'react-modern-drawer/dist/index.css'
import { ReactComponent as XCircleSVG } from './x-circle.svg'
import { sidebarContainer, svgWrapper } from './index.css'

interface ContactUsProps {
  isOpen: boolean
  toggleSidebar: () => void
}

const ContactUsSidebar: React.FC<ContactUsProps> = ({
  isOpen,
  toggleSidebar
}) => {
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
      <Heading text="Contact Us" variant="h5" marginBottom="8px" />
      <Paragraph
        text={`We’re happy to connect with great restaurants looking for their next
      opportunity to grow.`}
        variant="medium"
        marginBottom="32px"
      />

      <Form />
    </Drawer>
  )
}

export default ContactUsSidebar

import { createContext, useState } from 'react'

const ContactFormContext = createContext()

const ContactFormProvider = ({ ...props }) => {
  const [isFormOpen, setIsFormOpen] = useState(false)

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen)
  }

  return (
    <ContactFormContext.Provider
      value={{
        isFormOpen,
        setIsFormOpen,
        toggleForm
      }}
      {...props}
    />
  )
}

export { ContactFormContext, ContactFormProvider }

import { useContext } from 'react'
import { ContactFormContext } from './context'

const useContactForm = () => {
  const { isFormOpen, setIsFormOpen, toggleForm } =
    useContext(ContactFormContext)
  return { isFormOpen, setIsFormOpen, toggleForm }
}

export { useContactForm }

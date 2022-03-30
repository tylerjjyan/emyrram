import { parsePhoneNumberFromString } from 'libphonenumber-js'
import * as Yup from 'yup'
import i18n from 'i18next'

export const isPhoneValid = (phoneNumber = ''): boolean => {
  const phone = parsePhoneNumberFromString(phoneNumber)
  return !!(phone && phone.isValid())
}

Yup.addMethod(Yup.string, 'phone', function testPhone(errorMessage) {
  const lang = i18n.language
  errorMessage =
    !lang || lang === 'en' ? 'Invalid phone number' : '电话号码不正确'

  return this.test({
    name: 'phone',
    exclusive: true,
    message: errorMessage,
    test: isPhoneValid
  })
})

declare module 'yup' {
  export interface StringSchema {
    phone(errorMessage?: string): StringSchema
  }
}

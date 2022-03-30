import { Formik, Form, FormikHelpers, FormikProps } from 'formik'
import * as yup from 'yup'
import { noop } from 'lodash'
import '@/utils/validation'
import { handle } from '@/utils/promise'
import client from '@mailchimp/mailchimp_marketing'
// import client from 'api/mailchimp-client'
import mailchimpConfig from 'config/mailchimp'

import FieldInput from '@/components/field-input'
import { wrapper } from './index.css'
import { useTranslation } from 'next-i18next'
import { Button } from '@/components/button'
import axios from 'axios'

interface IFormValues {
  FULLNAME: string
  EMAIL: string
  PHONE: string
  JOBTITLE: string
  RCOUNT: string
  BNAME: string
  tags: string
}

const ContactUsForm = (): JSX.Element => {
  const { t } = useTranslation()

  const validationSchema = yup.object().shape({
    full_name: yup
      .string()
      .required(t('component.form.required.text', 'Required')),
    email: yup
      .string()
      .email(t('component.form.invalid_email.text', 'Invalid email'))
      .required(t('component.form.required.text', 'Required')),
    phone_number: yup
      .string()
      .phone()
      .required(t('component.form.required.text', 'Required')),
    job_title: yup
      .string()
      .required(t('component.form.required.text', 'Required')),
    restaurant_locations: yup
      .string()
      .required(t('component.form.required.text', 'Required')),
    business_name: yup.string()
  })

  const initialValues: IFormValues = {
    FULLNAME: '',
    EMAIL: '',
    PHONE: '',
    JOBTITLE: '',
    RCOUNT: '',
    BNAME: '',
    tags: '7232977'
  }

  const handleSubmit = async (
    values: IFormValues,
    { setSubmitting }: FormikHelpers<IFormValues>
  ): Promise<any> => {
    setSubmitting(true)
    const { EMAIL, FULLNAME, PHONE, JOBTITLE, RCOUNT, BNAME } = values

    console.log('WHAT VALUES', values)
    const bodyFormData = new FormData()
    bodyFormData.append('EMAIL', EMAIL)
    bodyFormData.append('FULLNAME', FULLNAME)
    bodyFormData.append('PHONE', PHONE)
    bodyFormData.append('JOBTITLE', JOBTITLE)
    bodyFormData.append('RCOUNT', RCOUNT)
    bodyFormData.append('BNAME', BNAME)
    bodyFormData.append('tags', '7232977')

    axios({
      method: 'post',
      url: `https://machobear.us14.list-manage.com/subscribe/post?u=eb9f58a9f9f65c3f093576ce0&id=9c2c2f819b`,
      data: bodyFormData,
      headers: { 'Content-Type': 'multipart/form-data' }
    })
      .then(function (response) {
        //handle success
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })

    setSubmitting(false)
  }

  return (
    <div className={wrapper}>
      <Formik
        initialValues={initialValues}
        // validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              noValidate
            >
              <FieldInput id="mce-FULLNAME" name="FULLNAME" label="Full Name" />
              <FieldInput id="mce-EMAIL" name="EMAIL" label="Email Address" />
              <FieldInput id="mce-PHONE" name="PHONE" label="Phone Number" />
              <FieldInput id="mce-JOBTITLE" name="JOBTITLE" label="Job Title" />
              <FieldInput
                type="dropdown"
                id="mce-RCOUNT"
                name="RCOUNT"
                label="# of Restaurant Locations"
              />
              <FieldInput
                id="mce-BNAME"
                name="BNAME"
                label="Business Name (if applicable)"
              />
              {/* <div hidden>
                <FieldInput
                  // type="hidden"
                  id="tags"
                  name="tags"
                  label=""
                  value="7232977"
                />
                <input type="hidden" name="tags" value="7232977" />
              </div> */}
              <Button
                id="mc-embedded-subscribe"
                variant={{ type: 'primary', size: 'large' }}
                text="Submit"
                type="submit"
              />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ContactUsForm

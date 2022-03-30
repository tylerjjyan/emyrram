import { Formik, Form, FormikHelpers } from 'formik'
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
  full_name: string
  email: string
  phone_number: string
  job_title: string
  restaurant_locations: string
  business_name: string
}

const { AUDIENCE_ID, API_KEY } = mailchimpConfig

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
    full_name: '',
    email: '',
    phone_number: '',
    job_title: '',
    restaurant_locations: '',
    business_name: ''
  }

  const handleSubmit = async (
    values: IFormValues,
    { setSubmitting }: FormikHelpers<IFormValues>
  ): Promise<any> => {
    setSubmitting(true)
    const {
      email,
      full_name,
      phone_number,
      job_title,
      restaurant_locations,
      business_name
    } = values

    client.setConfig({
      apiKey: API_KEY,
      server: 'us14'
    })

    const [body = {}] = await handle(
      axios.post(
        `https://machobear.us14.list-manage.com/subscribe/post?u=eb9f58a9f9f65c3f093576ce0&amp;id=9c2c2f819b`,
        {
          email_address: email,
          status: 'subscribed',
          merge_fields: {
            FULLNAME: full_name,
            PHONE: phone_number,
            JOBTITLE: job_title,
            RCOUNT: restaurant_locations,
            BNAME: business_name
          },
          tags: ['contact-us']
        }
      )
    )

    // const response = await client.ping.get()

    // const response = await client.lists.addListMember(AUDIENCE_ID, {
    //   email_address: email,
    //   status: 'subscribed',
    //   merge_fields: {
    //     FULLNAME: full_name,
    //     PHONE: phone_number,
    //     JOBTITLE: job_title,
    //     RCOUNT: restaurant_locations,
    //     BNAME: business_name
    //   },
    //   tags: ['contact-us']
    // })

    // console.log('BODY', response)

    setSubmitting(false)
  }

  return (
    <div className={wrapper}>
      <Formik
        initialValues={{}}
        validationSchema={validationSchema}
        onSubmit={noop}
      >
        {({ isSubmitting }) => {
          return (
            <Form
              action="https://machobear.us14.list-manage.com/subscribe/post?u=eb9f58a9f9f65c3f093576ce0&amp;id=9c2c2f819b"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
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
              <div hidden>
                <input type="hidden" name="tags" value="7232977" />
              </div>
              <Button
                id="mc-embedded-subscribe"
                variant={{ type: 'primary', size: 'large' }}
                text="Submit"
                type="submit"
                value="Subscribe"
                name="subscribe"
                disabled={isSubmitting}
              />
            </Form>
          )
        }}
      </Formik>
    </div>
  )
}

export default ContactUsForm

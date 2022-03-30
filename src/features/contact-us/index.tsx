import { Formik, Form, FormikHelpers } from 'formik'
import * as yup from 'yup'
import '@/utils/validation'
import client from '@mailchimp/mailchimp_marketing'
import mailchimpConfig from 'config/mailchimp'
import { useTranslation } from 'next-i18next'

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

    const response = await client.lists.addListMember(AUDIENCE_ID, {
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
    })

    setSubmitting(false)
  }

  return (
    <div id="mc_embed_signup">
      <form
        action="https://machobear.us14.list-manage.com/subscribe/post?u=eb9f58a9f9f65c3f093576ce0&amp;id=9c2c2f819b"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-FULLNAME">
              Full Name <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              name="FULLNAME"
              className="required"
              id="mce-FULLNAME"
            />
          </div>
          <div className="mc-field-group size1of2">
            <label htmlFor="mce-PHONE">
              Phone Number <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              name="PHONE"
              className="required"
              id="mce-PHONE"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-JOBTITLE">
              Job Title <span className="asterisk">*</span>
            </label>
            <input
              type="text"
              name="JOBTITLE"
              className="required"
              id="mce-JOBTITLE"
            />
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-RCOUNT">
              Restaurant Count <span className="asterisk">*</span>
            </label>
            <select name="RCOUNT" className="required" id="mce-RCOUNT">
              <option value=""></option>
              <option value="0-2">0-2</option>
              <option value="3-9">3-9</option>
              <option value="10+">10+</option>
            </select>
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-BNAME">Business Name </label>
            <input type="text" name="BNAME" className="" id="mce-BNAME" />
          </div>
          <div hidden>
            <input type="hidden" name="tags" value="7232977" />
          </div>
          <div id="mce-responses" className="clear">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: 'none' }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: 'none' }}
            ></div>
          </div>
          {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
          <div
            style={{ position: 'absolute', left: '-5000px' }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_eb9f58a9f9f65c3f093576ce0_9c2c2f819b"
              tabIndex={-1}
            />
          </div>
          <div className="clear">
            <input
              type="submit"
              value="Submit"
              name="Submit"
              id="mc-embedded-subscribe"
              className="button"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default ContactUsForm

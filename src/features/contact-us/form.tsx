import classNames from 'classnames'
import { useTranslation } from 'next-i18next'
import { formContainer, input, wrapper, label, buttonBase } from './form.css'

const ContactUsForm = (): JSX.Element => {
  const { t } = useTranslation()
  const submitText = t('contact_us.form.submit.button', 'Submit') as string
  return (
    <form
      action="https://machobear.us14.list-manage.com/subscribe/post?u=eb9f58a9f9f65c3f093576ce0&amp;id=9c2c2f819b"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className={classNames('validate', formContainer)}
      target="_blank"
    >
      <div className={wrapper}>
        <label htmlFor="mce-EMAIL" className={label}>
          {t('contact_us.form.email_address.text', 'Email Address')}{' '}
          <span className="asterisk">*</span>
        </label>
        <input
          type="email"
          name="EMAIL"
          className={classNames('email', 'required', input)}
          id="mce-EMAIL"
          required
        />
      </div>
      <div className={wrapper}>
        <label htmlFor="mce-FULLNAME" className={label}>
          {t('contact_us.form.full_name.text', 'Full Name')}{' '}
          <span className="asterisk">*</span>
        </label>
        <input
          type="text"
          name="FULLNAME"
          className={classNames('required', input)}
          id="mce-FULLNAME"
          required
        />
      </div>
      <div className={wrapper}>
        <label htmlFor="mce-PHONE" className={label}>
          {t('contact_us.form.phone_number.text', 'Phone Number')}{' '}
          <span className="asterisk">*</span>
        </label>
        <input
          type="text"
          name="PHONE"
          className={classNames('required', input)}
          id="mce-PHONE"
          required
        />
      </div>
      <div className={wrapper}>
        <label htmlFor="mce-JOBTITLE" className={label}>
          {t('contact_us.form.job_title.text', 'Job Title')}{' '}
          <span className="asterisk">*</span>
        </label>
        <input
          type="text"
          name="JOBTITLE"
          className={classNames('required', input)}
          id="mce-JOBTITLE"
          required
        />
      </div>
      <div className={wrapper}>
        <label htmlFor="mce-RCOUNT" className={label}>
          {t('contact_us.form.restaurant_count.text', 'Restaurant Count')}{' '}
          <span className="asterisk">*</span>
        </label>
        <select
          name="RCOUNT"
          className={classNames('required', input)}
          id="mce-RCOUNT"
        >
          <option value="0-2">0-2</option>
          <option value="3-9">3-9</option>
          <option value="10+">10+</option>
        </select>
      </div>
      <div className={wrapper}>
        <label htmlFor="mce-BNAME" className={label}>
          {t('contact_us.form.business_name.text', 'Business Name')}{' '}
        </label>
        <input type="text" name="BNAME" className={input} id="mce-BNAME" />
      </div>
      <div hidden>
        <input type="hidden" name="tags" value="7232977" />
      </div>
      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_eb9f58a9f9f65c3f093576ce0_9c2c2f819b"
          tabIndex={-1}
        />
      </div>
      <input
        type="submit"
        value={submitText}
        name="Submit"
        id="mc-embedded-subscribe"
        className={buttonBase}
      />
    </form>
  )
}

export default ContactUsForm

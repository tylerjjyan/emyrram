import config from 'config/mailchimp'
import client from './client'

export default client.create({ baseUrl: config.BASE_URL })
